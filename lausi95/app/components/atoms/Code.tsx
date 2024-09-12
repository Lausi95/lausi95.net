"use client";

import { useEffect, useState } from "react";
import hljs from "highlight.js/lib/core";
import kotlin from "highlight.js/lib/languages/kotlin";
import java from "highlight.js/lib/languages/java";
import "highlight.js/styles/default.css";

export type CodeProps = {
    code: string;
};

export default function Code({ code }: CodeProps) {
    const [formattedCode, setFormattedCode] = useState("");

    useEffect(() => {
        hljs.registerLanguage("kotlin", kotlin);
        hljs.registerLanguage("java", java);
        const highlighted = hljs.highlightAuto(code);
        setFormattedCode(highlighted.value);
    }, [code]);

    return <pre><code dangerouslySetInnerHTML={{ __html: formattedCode }}></code></pre>;
}

