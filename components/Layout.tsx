import { Head } from "$fresh/runtime.ts";
import { type ComponentChildren } from "preact";

export default function Layout(props: { children?: ComponentChildren }) {
  return (
    <>
      <Head>
        <title>bunspresso</title>
        <link rel="stylesheet" href="/lux.bootstrap.min.css" />
        <link rel="stylesheet" href="/brew.css" />
      </Head>
      <div>{props.children}</div>
    </>
  );
}
