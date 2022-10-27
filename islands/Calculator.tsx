import {
  coffeeUnits,
  drink,
  drinkObj,
  multiplier,
  servings,
  waterUnits,
} from "../utils/signals.ts";
import { computed, signal } from "@preact/signals";
import Selector from "../islands/Selector.tsx";
import ratios from "../data/ratios.json" assert { type: "json" };
import unitsCoffee from "../data/unitsCoffee.json" assert { type: "json" };
import unitsWater from "../data/unitsWater.json" assert { type: "json" };

export default function Calculator() {
  console.log("drinkObj in calculator: ", drinkObj.value);
  console.log("coffeeUnits in calculator: ", coffeeUnits.value);
  console.log("amount of coffee in calculator: ", coffeeUnits.value);

  interface SubstanceBlockProps {
    substance: typeof signal<number>;
    units: typeof signal<string>;
    icon: string;
  }

  function SubstanceBlock(props: SubstanceBlockProps) {
    return (
      <div class={`flex flex-row items-center content-center py-10`}>
        <img
          src={props.icon}
          class={`h-12 w-12`}
        />
        <p class={`font-bold text-xl text-center`}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              class={`font-bold text-xl text-center w-1/2`}
              onChange={handleSubstanceChange}
              data-substance={props.substance}
              value={props.substance.value}
            >
            </input>
          </form>

          {props.units.value.name}
        </p>
      </div>
    );
  }
  const coffee = computed(() => {
    // const drinkObj = ratios.find((item: { name: string; }) => item.name === drink.value);
    // const coffeeUnitObj = unitsCoffee.find((item: { name: string; }) => item.name === coffeeUnits.value);
    return (multiplier.value * drinkObj.value.startingCoffee * servings.value /
      coffeeUnits.value.toGrams).toFixed(2);
  });

  const water = computed(() => {
    // const drinkObj = ratios.find((item: { name: string; }) => item.name === drink.value);
    // const waterUnitObj = unitsWater.find((item: { name: string; }) => item.name === waterUnits.value);
    return ((multiplier.value * drinkObj.value.ratio.water /
      drinkObj.value.ratio.coffee *
      drinkObj.value.startingCoffee) *
      servings.value / waterUnits.value.toGrams).toFixed(2);
  });

  const explanation = computed(() => {
    return drinkObj.value.explanation;
  });

  const handleSubmit = (event: {
    target: { value: string };
  }) => {
    console.log(event.target.value);
    event.preventDefault();
  };

  // deno-lint-ignore no-explicit-any
  const handleSubstanceChange = (
    event: { target: { value: string; dataset: any } },
  ) => {
    console.log(`dataset is ${event.target.dataset.substance}`);
    multiplier.value *= Number(event.target.value) /
      Number(event.target.dataset.substance);
    console.log(`multiplier value is ${multiplier.value}`);
  };

  const handleCups = (event: { target: { value: any } }) => {
    servings.value = Math.max(event.target.value, 1);
  };
  const btn = `px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  return (
    <div class={`flex flex-col content-center`}>
    
      <div class="flex flex-row px-8 content-start hover:bg-teal-200 justify-center	">
        <div class={`flex flex-row pr-4 mb-8`}>
          <Selector data={ratios} selector={drinkObj} label="drink"/>
        </div>
        <div class={`flex flex-row pr-4 mb-8`}>
          <Selector data={unitsCoffee} selector={coffeeUnits} label="coffee units"/>
        </div>
        <div class={`flex flex-row pr-4 mb-8`}>
          <Selector data={unitsWater} selector={waterUnits} label="water units"/>
        </div>
      </div>

      <div
        class={`flex flex-row items-center justify-center self-center w-1/2 border(teal-300 1) mb-10`}
      >
        {/* <p class={`flex-grow-1 font-bold text-xl`}>drink: {chosenDrink}</p> */}
        <div class={`flex flex-col items-center justify-left px-4 py-8`}>
          <SubstanceBlock
            substance={coffee}
            units={coffeeUnits}
            icon={"/cbeans.png"}
          />

          <SubstanceBlock
            substance={water}
            units={waterUnits}
            icon={"/water.png"}
          />
        </div>
      <div class={`px-10 flex flex-row py-10  justify-center items-center content-center`}>
        <p class={` mx-10 font-bold text-xl`}>How many servings?</p>
        <button
          class={`px-2 py-1 border(gray-100 1) hover:bg-gray-200 rounded-l-lg`}
          onClick={() => servings.value = Math.max(servings.value - 1, 1)}
        >
          -
        </button>
        <form onSubmit={handleSubmit}>
          <input
            class={`inset-0 align-middle text-center min-h-full w-10 font-bold`}
            type="text"
            value={servings}
            onChange={handleCups}
          >
          </input>
        </form>
        <button
          class={`px-2 py-1 border(gray-100 1) hover:bg-gray-200 rounded-r-lg`}
          onClick={() => servings.value++}
        >
          +
        </button>
      </div>
      </div>
      <div class="self-center card bg-secondary mb-3" style="max-width:80%;">
        <div class="card-header">Header</div>
        <div class="card-body">
        <h4 class="card-title">Title</h4>
        <p class="card-text">{explanation.value}</p>
      </div>
    </div>
    </div>
  );
}
