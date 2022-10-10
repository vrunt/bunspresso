import { useState, useEffect } from "preact/hooks";
import { Stores, useStore } from "https://deno.land/x/fresh_store@v0.1.1/mod.ts";
import { cups, drink } from "../utils/signals.ts";
import { computed } from "@preact/signals";

interface CalculatorProps {
    // deno-lint-ignore no-explicit-any
    data: any
}

console.log("logging drink signal: ", drink.value)

export default function Calculator(props: CalculatorProps) {
    const coffee = computed( () => {
        return props.data.find((item: { name: string; }) => item.name === drink.value).startingCoffee * cups.value;
    })

    const water = computed( () => {
        const drinkObj = props.data.find((item: { name: string; }) => item.name === drink.value);
        return Math.floor(drinkObj.ratio.water / drinkObj.ratio.coffee * drinkObj.startingCoffee) * cups.value;
    })

    const explanation = computed(() => {
        return props.data.find((item: { name: string; }) => item.name === drink.value).explanation
    })

    const handleSubmit = (event: {
        target: { value: string; };
    }) => {
        console.log(event.target.value)
        event.preventDefault()
    }

    const handleCups = (event: { target: { value: any; }; }) => {
        cups.value = Math.min(event.target.value, 1)
    }

    const btn = `px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
    return (
        <div class={`flex flex-col`}>
            <div class={`flex flex-row justify-center self-center w-1/2 border(teal-300 1)`}>
                {/* <p class={`flex-grow-1 font-bold text-xl`}>drink: {chosenDrink}</p> */}
                <p class={`font-bold text-xl px-8 py-8`}><img
                    src="/cbeans.png"
                    class={`h-12`}
                /> {coffee}</p>
                <p class={`font-bold text-xl px-8 py-8`}><img
                    src="/water.png"
                    class={`h-12`}
                /> {water}</p>
            </div>
            <div class={`flex flex-row py-10 gap-2 w-1/2`}>
                <p class={`flex-grow-1 font-bold text-xl`}>How many cups?</p>
                <button
                    class={`px-2 py-1 border(gray-100 1) hover:bg-gray-200 rounded-l-lg`}
                    onClick={() => cups.value = Math.min(cups.value - 1, 1)}>
                    -
                </button>
                <form onSubmit={handleSubmit}>
                    <input class={`inset-0 align-middle text-center min-h-full w-10 font-bold`} type="text" value={cups} onChange={handleCups}></input>
                </form>
                <button
                    class={`px-2 py-1 border(gray-100 1) hover:bg-gray-200 rounded-r-lg`}
                    onClick={() => cups.value++}>
                    +
                </button>
            </div>
                <div id="explanation-container" class={`py-4 mb-4 px-4 bg-gray-200`}>
                    <p>{explanation}</p>
                </div>
        </div>
    );
}
