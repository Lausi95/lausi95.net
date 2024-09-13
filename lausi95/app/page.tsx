import CodeSample from "./components/molecules/CodeSample";
import BasicPage from "./components/templates/BasicPage";
import Block from "./components/atoms/Block";

export default async function Home() {
    return (
        <BasicPage page="home" subtitle="Home">
            <Block paragraph>
                Hello! My Name is Tom Lausmann and this is going to be my
                personal Website. Here, you will find everything that I want
                you to know about me as a person, my hobbies and personal
                projects.
            </Block>
            <Block paragraph>
                This site is currently under construction! So dont wonder if
                parts dont feel super snappy, are incomplete or feel empty.
            </Block>
            <Block paragraph>
                Stay Tuned!
            </Block>
            <Block>
                <CodeSample title="Example Code" src="sample.kt" language="Java" />
            </Block>
        </BasicPage>
    );
}

