import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Navbar } from "../(dashboard)/_components/navbar";
import { OrgSidebar } from "../(dashboard)/_components/org-sidebar";
import Sidebar from "../(dashboard)/_components/sidebar";
import DashboardContent from "../(dashboard)/_components/dashboard-content";

interface DashboardPageProps {
    searchParams: {
        search?: string;
        favorites?: string;
    };
}

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {
    const { userId } = await auth();

    if (!userId) {
        redirect("/");
    }

    return (
        <main className="h-full">
            <Sidebar />
            <div className="pl-[60px] h-full">
                <div className="flex h-full">
                    <OrgSidebar />
                    <div className="border-l border-gray-300 h-full" />
                    <div className="h-full flex-1">
                        <Navbar />
                        <DashboardContent searchParams={searchParams} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DashboardPage;