import CodeSample from "./components/molecules/CodeSample";
import BasicPage from "./components/templates/BasicPage";

export default function Home() {

    const someCode = `public static void main(String[] args) {
  System.out.println("Hallo, Welt!");
}`;

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
            <CodeSample title="Example Code" code={someCode} language="Java" />
        </BasicPage>
    );
}

