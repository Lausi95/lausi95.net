import React from "react";
import Navigation, { NavPage } from "../organisms/Navigation";
import PageTitle from "../organisms/Title";

export type BasicPageProps = {
    children?: React.ReactNode;
    page?: NavPage;
    subtitle?: string;
};

export default function BasicPage({ children, page, subtitle }: BasicPageProps) {
    return (
        <>
            <PageTitle subtitle={subtitle} />
            <Navigation page={page} />
            <div className="p-4">
                {children}
            </div>
        </>
    );
}

