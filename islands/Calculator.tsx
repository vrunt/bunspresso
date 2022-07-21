/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
// import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";



export default function Calculator(props: {}) {

    const [chosenDrink, setChosenDrink] = useState(
        "aeropress"
    )

    const [recipe, setRecipe] = useState({
        coffee: 0 || props.data.find(item => item.name === `${chosenDrink}`).starting.coffee,
        water: 0 || props.data.find(item => item.name === `${chosenDrink}`).starting.water,
        cups: 1
    })

    console.log(props.data.find(item => item.name === `${chosenDrink}`).starting.coffee)
    const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
    return (
        <div>
            <div class={tw`flex gap-2 w-full`}>
                <p class={tw`flex-grow-1 font-bold text-xl`}>coffee: {recipe.coffee * recipe.cups}</p>
                <p class={tw`flex-grow-1 font-bold text-xl`}>water: {recipe.water * recipe.cups}</p>
            </div>
            <div class={tw`flex flex-row py-10 gap-2 w-1/2`}>
                <p class={tw`flex-grow-1 font-bold text-xl`}>How many cups?</p>
                <p class={tw`flex-grow-1 text-l`}>{recipe.cups}</p>
                <button
                    class={btn}
                    onClick={() => setRecipe({
                        cups: recipe.cups - 1,
                        coffee: recipe.coffee,
                        water: recipe.water
                    })}>
                    -1
                </button>
                <button
                    class={btn}
                    onClick={() => setRecipe({
                        cups: recipe.cups + 1,
                        coffee: recipe.coffee,
                        water: recipe.water
                    })}>
                    +1
                </button>
            </div>
        </div>
    );
}
