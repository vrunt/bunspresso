import { servings, drink, coffeeUnits, waterUnits } from "../utils/signals.ts";
import { computed } from "@preact/signals";
import Selector from "../islands/Selector.tsx";
import ratios from '../data/ratios.json' assert { type: "json" }
import units from '../data/units.json' assert { type: "json" }


export default function Calculator() {
    const coffee = computed(() => {
        const drinkObj = ratios.find((item: { name: string; }) => item.name === drink.value);
        const coffeeUnitObj = units.find((item: { name: string; }) => item.name === coffeeUnits.value);
        return (drinkObj.startingCoffee * servings.value / coffeeUnitObj?.tograms).toFixed(2);
    })

    const water = computed(() => {
        const drinkObj = ratios.find((item: { name: string; }) => item.name === drink.value);
        const waterUnitObj = units.find((item: { name: string; }) => item.name === waterUnits.value);
        return ((drinkObj.ratio.water / drinkObj.ratio.coffee * drinkObj.startingCoffee) * servings.value / waterUnitObj?.tograms).toFixed(2);
    })

    const explanation = computed(() => {
        return ratios?.find((item: { name: string; }) => item.name === drink.value).explanation
    })

    const handleSubmit = (event: {
        target: { value: string; };
    }) => {
        console.log(event.target.value)
        event.preventDefault()
    }

    const handleCups = (event: { target: { value: any; }; }) => {
        servings.value = Math.min(event.target.value, 1)
    }

    const btn = `px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
    return (
        <div class={`flex flex-col`}>
            <div class="flex flex-row px-8 content-start hover:bg-teal-200">
                <div class={`flex flex-row pr-4 mb-8`}>
                    <p class="font-bold text-xl pr-1">drink: </p>
                    <Selector data={ratios} selector={drink} />
                </div>
                <div class={`flex flex-row pr-4 mb-8`}>
                    <p class="font-bold text-xl pr-1">coffee units: </p>
                    <Selector data={units} selector={coffeeUnits} />
                </div>
                <div class={`flex flex-row pr-4 mb-8`}>
                    <p class="font-bold text-xl pr-1">water units: </p>
                    <Selector data={units} selector={waterUnits} />
                </div>
            </div>

            <div class={`flex flex-row justify-center self-center w-1/2 border(teal-300 1)`}>
                {/* <p class={`flex-grow-1 font-bold text-xl`}>drink: {chosenDrink}</p> */}
                <div class={`flex flex-col items-center justify-center px-8 py-8`}>
                    <img
                        src="/cbeans.png"
                        class={`h-12 w-12`}
                    />
                    <p class={`font-bold text-xl `}>
                        {coffee} {coffeeUnits}</p>
                </div>
                <div class={`flex flex-col items-center justify-center px-8 py-8`}>
                    <img
                        src="/water.png"
                        class={`h-12 w-12`}
                    />
                    <p class={`font-bold text-xl p`}> {water} {waterUnits}</p>
                </div>
            </div>
            <div class={`flex flex-row py-10 gap-2 w-1/2`}>
                <p class={`flex-grow-1 font-bold text-xl`}>How many servings?</p>
                <button
                    class={`px-2 py-1 border(gray-100 1) hover:bg-gray-200 rounded-l-lg`}
                    onClick={() => servings.value = Math.min(servings.value - 1, 1)}>
                    -
                </button>
                <form onSubmit={handleSubmit}>
                    <input class={`inset-0 align-middle text-center min-h-full w-10 font-bold`} type="text" value={servings} onChange={handleCups}></input>
                </form>
                <button
                    class={`px-2 py-1 border(gray-100 1) hover:bg-gray-200 rounded-r-lg`}
                    onClick={() => servings.value++}>
                    +
                </button>
            </div>
            <div id="explanation-container" class={`py-4 mb-4 px-4 bg-gray-200`}>
                <p>{explanation}</p>
            </div>
        </div>
    );
}
