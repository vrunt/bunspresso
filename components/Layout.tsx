import { Head } from "$fresh/runtime.ts";
import { type ComponentChildren } from "preact";
import NavBar from "./NavBar.tsx";

export default function Layout(props: { children?: ComponentChildren }) {
  return (
    <>
      <Head>
        <title>bunspresso</title>
        <NavBar />
        <link rel="stylesheet" href="/lux.bootstrap.min.css" />
        <link rel="stylesheet" href="/brew.css" />
      </Head>
      <div>{props.children}</div>
    </>
  );
}
