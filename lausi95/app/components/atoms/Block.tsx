import { ReactNode } from "react";

type BlockProps = {
    children: ReactNode;
    paragraph?: boolean;
};

export default function Block({ children, paragraph }: BlockProps) {
    return (
        <>
            {paragraph || <div className="pb-2">{children}</div>}
            {paragraph && <p className="pb-2">{children}</p>}
        </>
    );
}
