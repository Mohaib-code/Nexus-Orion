import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface MarketingLayoutProps {
    children: React.ReactNode;
}

const MarketingLayout = async ({ children }: MarketingLayoutProps) => {
    const { userId } = await auth();

    // If user is already logged in, redirect to dashboard
    if (userId) {
        redirect("/dashboard");
    }

    return (
        <div className="h-full">
            {children}
        </div>
    );
};

export default MarketingLayout;