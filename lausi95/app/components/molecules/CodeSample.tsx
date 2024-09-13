import { promises as fs } from 'fs';
import Code from "../atoms/Code";
import CopyButton from "../atoms/CopyButton";

export type CodeSampleProps = {
    src: string;
    language: string;
    title?: string;
    copyable?: boolean;
};

export default async function CodeSample({ src, language, title, copyable }: CodeSampleProps) {
    const code = await fs.readFile(process.cwd() + `/snippets/${src}`, 'utf8');
    return (
        <div className="border rounded border-gray-700 p-2 bg-[#010409]">
            <div className="flex justify-between">
                <div className="text-gray-700">
                    {title && <><span className="font-bold">{title}</span> - </>}{language}
                </div>
                {(copyable ?? true) && <CopyButton content={code} />}
            </div>
            <div className="overflow-x-auto">
                <Code code={code} />
            </div>
        </div>
    );
}
