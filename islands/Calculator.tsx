import { servings, drink, coffeeUnits, waterUnits, drinkObj } from "../utils/signals.ts";
import { computed } from "@preact/signals";
import Selector from "../islands/Selector.tsx";
import ratios from '../data/ratios.json' assert { type: "json" }
import unitsCoffee from '../data/unitsCoffee.json' assert { type: "json" }
import unitsWater from '../data/unitsWater.json' assert { type: "json" }

export default function Calculator() {
    console.log("drinkObj in calculator: ", drinkObj.value)
    console.log("coffeeUnits in calculator: ", coffeeUnits.value)
    console.log("amount of coffee in calculator: ", coffeeUnits.value)
    const coffee = computed(() => {
        // const drinkObj = ratios.find((item: { name: string; }) => item.name === drink.value);
        // const coffeeUnitObj = unitsCoffee.find((item: { name: string; }) => item.name === coffeeUnits.value);
        return (drinkObj.value.startingCoffee * servings.value / coffeeUnits.value.toGrams).toFixed(2);
    })

    const water = computed(() => {
        // const drinkObj = ratios.find((item: { name: string; }) => item.name === drink.value);
        // const waterUnitObj = unitsWater.find((item: { name: string; }) => item.name === waterUnits.value);
        return ((drinkObj.value.ratio.water / drinkObj.value.ratio.coffee * drinkObj.value.startingCoffee) * servings.value / waterUnits.value.toGrams).toFixed(2);
    })

    const explanation = computed(() => {
        return drinkObj.value.explanation
    })

    const handleSubmit = (event: {
        target: { value: string; };
    }) => {
        console.log(event.target.value)
        event.preventDefault()
    }

    const handleWaterChange = (event: {target: {value: string; }}) => {
        // const drinkObj = ratios.find((item: { name: string; }) => item.name === drink.value);
        const waterUnitObj = unitsWater.find((item: { name: string; }) => item.name === waterUnits.value);
        const newServings = drinkObj.value.ratio.coffee * waterUnitObj.toGrams * event.target.value / drinkObj.value.ratio.water
        servings.value = newServings
    } 
        

    // newServings = ratioCoffee * toGrams * waterVal / ratioWater / startingCoffee

    const handleCups = (event: { target: { value: any; }; }) => {
        servings.value = Math.max(event.target.value, 1)
    }

    const btn = `px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
    return (
        <div class={`flex flex-col`}>
            <div class="flex flex-row px-8 content-start hover:bg-teal-200">
                <div class={`flex flex-row pr-4 mb-8`}>
                    <p class="font-bold text-xl pr-1">drink: </p>
                    <Selector data={ratios} selector={drinkObj} />
                </div>
                <div class={`flex flex-row pr-4 mb-8`}>
                    <p class="font-bold text-xl pr-1">coffee units: </p>
                    <Selector data={unitsCoffee} selector={coffeeUnits} />
                </div>
                <div class={`flex flex-row pr-4 mb-8`}>
                    <p class="font-bold text-xl pr-1">water units: </p>
                    <Selector data={unitsWater} selector={waterUnits} />
                </div>
            </div>

            <div class={`flex flex-row justify-center self-center w-1/2 border(teal-300 1)`}>
                {/* <p class={`flex-grow-1 font-bold text-xl`}>drink: {chosenDrink}</p> */}
                <div class={`flex flex-col items-center justify-center px-8 py-8`}>
                    <img
                        src="/cbeans.png"
                        class={`h-12 w-12`}
                    />
                    <p class={`font-bold text-xl text-center`}>
                        {coffee.value} {coffeeUnits.value.name}</p>
                </div>
                <div class={`flex flex-col items-center justify-center px-8 py-8`}>
                    <img
                        src="/water.png"
                        class={`h-12 w-12`}
                    />
                    <p class={`font-bold text-xl text-center`}>
                        <input
                            class={`font-bold text-xl text-center`}
                            onChange={handleWaterChange}
                            value={water.value}>
                        </input>
                        {waterUnits.value.name}
                    </p>
                </div>
            </div>
            <div class={`flex flex-row py-10 gap-2 w-1/2`}>
                <p class={`flex-grow-1 font-bold text-xl`}>How many servings?</p>
                <button
                    class={`px-2 py-1 border(gray-100 1) hover:bg-gray-200 rounded-l-lg`}
                    onClick={() => servings.value = Math.max(servings.value - 1, 1)}>
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
                <p>{explanation.value}</p>
            </div>
        </div>
    );
}
