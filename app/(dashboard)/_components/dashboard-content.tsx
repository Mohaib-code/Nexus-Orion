"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./empty-org";
import { BoardList } from "./board-list";

interface DashboardContentProps {
    searchParams: {
        search?: string;
        favorites?: string;
    };
}

const DashboardContent = ({ searchParams }: DashboardContentProps) => {
    const { organization } = useOrganization();

    return (
        <div className="flex-1 h-[calc(100%-80px)] p-5">
            {!organization ? (
                <EmptyOrg />
            ) : (
                <BoardList orgId={organization.id} query={searchParams} />
            )}
        </div>
    );
};

export default DashboardContent;