import Code from "../atoms/Code";
import CopyButton from "../atoms/CopyButton";

export type CodeSampleProps = {
    code: string;
    language: string;
    title?: string;
    copyable?: boolean;
};

export default function CodeSample({ code, language, title, copyable }: CodeSampleProps) {
    return (
        <div className="border rounded border-gray-700 p-2 bg-[#010409]">
            <div className="flex justify-between pb-2">
                <div className="text-gray-700">
                    {title && <><span className="font-bold">{title}</span> - </>}{language}
                </div>
                {(copyable ?? true) && <CopyButton content={code} />}
            </div>
            <Code code={code} />
        </div>
    );
}
