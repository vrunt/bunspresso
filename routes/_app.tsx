import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import NavBar from "../components/NavBar.tsx";

export default function App(props: AppProps) {
    return (
        <>
        <Head>
            <title>bunspresso</title>
            <NavBar />
        </Head>
        <props.Component />
        </>
    );
}
