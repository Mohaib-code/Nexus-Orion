export const dynamic = 'force-dynamic';

import { api } from "@/convex/_generated/api";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
    secret: process.env.NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(request: Request) {
    try {
        const { room } = await request.json();

        // Get authenticated user
        const user = await currentUser();

        if (!user) {
            console.error("No user found");
            return new Response("Unauthorized", { status: 401 });
        }

        // Verify the board exists
        try {
            const board = await convex.query(api.board.get, { id: room });
            if (!board) {
                console.error("Board not found:", room);
                return new Response("Board not found", { status: 404 });
            }
        } catch (error) {
            console.error("Error fetching board:", error);
            return new Response("Error fetching board", { status: 500 });
        }

        // Create user info for Liveblocks
        const userInfo = {
            name: user.firstName || user.username || "Anonymous",
            picture: user.imageUrl || "",
        };

        // Create Liveblocks session
        const session = liveblocks.prepareSession(user.id, {
            userInfo,
        });

        // Allow access to the room
        if (room) {
            session.allow(room, session.FULL_ACCESS);
        }

        // Authorize and return token
        const { status, body } = await session.authorize();
        return new Response(body, { status });

    } catch (error) {
        console.error("Liveblocks auth error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}