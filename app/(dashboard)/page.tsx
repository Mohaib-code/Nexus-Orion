import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DashboardContent from "./_components/dashboard-content";

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

    return <DashboardContent searchParams={searchParams} />;
};

export default DashboardPage;