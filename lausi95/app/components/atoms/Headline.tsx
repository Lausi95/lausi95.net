import { ReactNode } from "react";

type HeadlineProps = {
    children: ReactNode;
};

export default function Headline({ children }: HeadlineProps) {
    return (
        <h1 className="text-2xl font-bold pb-2">{children}</h1>
    );
}

