/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <nav class={tw`flex flex-wrap justify-between pt-10`}>
        <a href="/about" class={tw`text-orange-500 hover:underline`}>
          About Page
        </a>
        <a href="/jack" class={tw`text-orange-500 hover:underline`}>
          Hello, jack (dynamic route)
        </a>
        <a href="/ong" class={tw`text-orange-500 hover:underline`}>
          Hello, ong (dynamic route)
        </a>
        <a href="/github/vcx100g" class={tw`text-orange-500 hover:underline`}>
          vcx100g github (fetch)
        </a>
        <a href="/search" class={tw`text-orange-500 hover:underline`}>
          Search
        </a>
        <a href="/countdown" class={tw`text-orange-500 hover:underline`}>
          Countdown
        </a>
      </nav>
    </div>
  );
}
