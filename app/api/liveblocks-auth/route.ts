// import { api } from "@/convex/_generated/api";
// import { auth, currentUser } from "@clerk/nextjs";
// import { Liveblocks } from "@liveblocks/node";

// import { ConvexHttpClient } from "convex/browser";

// const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// const liveblocks = new Liveblocks({
//     secret: process.env.NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY!,
// });

// export async function POST(request: Request) {
//     const authorization = await auth();
//     const user = await currentUser();

//     if (!authorization || !user) {
//         return new Response("Unauthorized", { status: 401 });
//     }

//     const { room } = await request.json();
//     const board = await convex.query(api.board.get, { id: room });

//     if (board?.orgId !== authorization.orgId) {
//         return new Response("Unauthorized", { status: 401 });
//     }

//     const userInfo = {
//         name: user.firstName || "Anonymous",
//         picture: user.imageUrl!,
//     };

//     const session = liveblocks.prepareSession(user.id, {
//         userInfo,
//     });

//     if (room) {
//         session.allow(room, session.FULL_ACCESS);
//     }

//     const { status, body } = await session.authorize();
//     return new Response(body, { status });
// }
// import { api } from "@/convex/_generated/api";
// import { auth, currentUser } from "@clerk/nextjs";
// import { Liveblocks } from "@liveblocks/node";
// import { ConvexHttpClient } from "convex/browser";

// const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// const liveblocks = new Liveblocks({
//     secret: process.env.NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY!,
// });

// export async function POST(request: Request) {
//     const { room } = await request.json();

//     // Run auth checks in parallel
//     const [authorization, user] = await Promise.all([
//         auth(),
//         currentUser(),
//     ]);

//     if (!authorization || !user) {
//         return new Response("Unauthorized", { status: 401 });
//     }

//     // Fetch board data
//     const board = await convex.query(api.board.get, { id: room });

//     if (board?.orgId !== authorization.orgId) {
//         return new Response("Unauthorized", { status: 401 });
//     }

//     const userInfo = {
//         name: user.firstName || "Anonymous",
//         picture: user.imageUrl!,
//     };

//     const session = liveblocks.prepareSession(user.id, {
//         userInfo,
//     });

//     if (room) {
//         session.allow(room, session.FULL_ACCESS);
//     }

//     const { status, body } = await session.authorize();
//     return new Response(body, { status });
// }





export const dynamic = 'force-dynamic';

import { api } from "@/convex/_generated/api";
import { auth, currentUser } from "@clerk/nextjs";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
    secret: process.env.NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY!,
});

// Cache to prevent repeated Convex queries
const boardCache = new Map<string, { orgId: string; timestamp: number }>();
const CACHE_DURATION = 30000; // 30 seconds

export async function POST(request: Request) {
    try {
        const { room } = await request.json();

        const [authorization, user] = await Promise.all([
            auth(),
            currentUser(),
        ]);

        if (!authorization || !user) {
            return new Response("Unauthorized", { status: 401 });
        }

        // Check cache first
        const now = Date.now();
        const cached = boardCache.get(room);
        let boardOrgId: string;

        if (cached && now - cached.timestamp < CACHE_DURATION) {
            boardOrgId = cached.orgId;
        } else {
            const board = await convex.query(api.board.get, { id: room });
            if (!board) {
                return new Response("Board not found", { status: 404 });
            }
            boardOrgId = board.orgId;
            boardCache.set(room, { orgId: boardOrgId, timestamp: now });
        }

        if (boardOrgId !== authorization.orgId) {
            return new Response("Unauthorized", { status: 403 });
        }

        const userInfo = {
            name: user.firstName || "Anonymous",
            picture: user.imageUrl!,
        };

        const session = liveblocks.prepareSession(user.id, {
            userInfo,
        });

        if (room) {
            session.allow(room, session.FULL_ACCESS);
        }

        const { status, body } = await session.authorize();
        return new Response(body, { status });
    } catch (error) {
        console.error("Liveblocks auth error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}