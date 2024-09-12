"use client";

import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type CopyButtonProps = {
    content: string;
};

export default function CopyButton({ content }: CopyButtonProps) {
    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(content);
    };

    return <button className="text-gray-700 px-2 py-1 cursor-pointer" onClick={copyCodeToClipboard}>
        <FontAwesomeIcon icon={faCopy} />
    </button>;
}
