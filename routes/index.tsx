/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export const Head = () => {
    <head>
        <title>Index page</title>
        <meta
            name="description"
            content="This is an example of a
meta description. This will often show up in search results."
        />
    </head>;
};

export default function Home() {
    return (
        <div class={tw`p-4 mx-auto max-w-screen-md`}>
            <img src="/logo.svg" height="100px" alt="the fresh logo: a sliced lemon dripping with juice" />
            <p class={tw`my-6`}>
                Welcome to `fresh` Try update this message in the ./routes/index.tsx file, and refresh
            </p>
            <Counter start={3} />
        </div>
    );
}
