import Calculator from "../islands/Calculator.tsx";
import Navigator from "../islands/Navigator.tsx";

export default function Home() {

  return (
    <div class="p-4 mx-auto max-w-screen-md border-double border-2 rounded-3xl">
      <img
        src="/espressocup.png"
        class="h-12 mb-8"
      />
      < Navigator />
     <Calculator/>
    </div>
  );
}
