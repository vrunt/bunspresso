/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Calculator from "../islands/Calculator.tsx";
import ratios from '../ratios.json' assert { type: "json" }

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md border-double border-2 rounded-3xl`}>
      <img
        src="/espressocup.png"
        class={tw`h-12`}
      />
      <p class={tw`my-6`}>
       Coffee ratios here.
      </p>
      <Calculator data={ratios} />
    </div>
  );
}
