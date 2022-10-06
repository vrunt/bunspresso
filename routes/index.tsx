import Calculator from "../islands/Calculator.tsx";
import DrinkSelector from "../islands/DrinkSelector.tsx";
import ratios from '../ratios.json' assert { type: "json" }

export default function Home() {

  const storePtr = crypto.randomUUID();

  return (
    <div class="p-4 mx-auto max-w-screen-md border-double border-2 rounded-3xl">
      <img
        src="/espressocup.png"
        class="h-12 mb-8"
      />
      <div class="flex flex-row content-start hover:bg-teal-200">
        <p class="font-bold text-xl pr-2 mb-8">drink: </p>
        <DrinkSelector storePtr={storePtr} data={ratios} />
      </div>
      <Calculator storePtr={storePtr} data={ratios} />
    </div>
  );
}
