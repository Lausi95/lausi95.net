import BasicPage from "./components/templates/BasicPage";

export default function Home() {
    return (
        <BasicPage page="home" subtitle="Home">
            <div className="border border-gray-700 rounded p-2">
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
            </div>
        </BasicPage>
    );
}

