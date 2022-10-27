import Calculator from "../islands/Calculator.tsx";
import Layout from "../components/Layout.tsx";
import Navigator from "../islands/Navigator.tsx";

export default function Home() {
  return (
    <Layout>
        {/* <img
          src="/espressocup.png"
          class="h-12 mb-8"
        /> */}
        {/* <Navigator /> */}
        <Calculator />
    </Layout>
  );
}
