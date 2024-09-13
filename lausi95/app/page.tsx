import { promises as fs } from 'fs';
import CodeSample from "./components/molecules/CodeSample";
import BasicPage from "./components/templates/BasicPage";

export default async function Home() {
    return (
        <BasicPage page="home" subtitle="Home">
            <p>
                Hello! My Name is Tom Lausmann and this is going to be my personal
                Website. Here, you will find everything that I want you to know about
                me as a person, my hobbies and personal projects.
            </p>
            <p className="font-bold">
                This site is currently under construction! So dont wonder if
                parts dont feel super snappy, are incomplete or feel empty.
            </p>
            <p className="font-bold">
                Stay Tuned!
            </p>
            <CodeSample title="Example Code" src="sample.kt" language="Java" />
        </BasicPage>
    );
}

