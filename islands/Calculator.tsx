/** @jsx h */
import { ComponentChild, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { tw } from "@twind";
import { Stores, useStore } from "https://deno.land/x/fresh_store@v0.1.1/mod.ts";


interface CalculatorProps {
    storePtr: string
    // deno-lint-ignore no-explicit-any
    data: any
}

export default function Calculator(props: CalculatorProps) {
    const [chosenDrink, setChosenDrink] = useState("aeropress");
    useStore(chosenDrink, {
        pointer: props.storePtr,
        onChange: (newState) => {
            setChosenDrink(newState)
            handleChange()
        }
    })

    const [recipe, setRecipe] = useState({
        coffee: getRecipeCoffee(),
        water: getRecipeWater(),
        cups: 1
    })

    const [explanation, setExplanation] = useState(getDrinkExplanation())

    function getRecipeCoffee() {
        return props.data.find((item: { name: string; }) => item.name === chosenDrink).startingCoffee
    }

    function getRecipeWater() {
        return props.data.find((item: { name: string; }) => item.name === chosenDrink).ratio.water * props.data.find((item: { name: string; }) => item.name === chosenDrink).startingCoffee
    }

    function getDrinkExplanation() {
        return props.data.find((item: { name: string; }) => item.name === chosenDrink).explanation
    }




    useEffect(() => {
        console.log("recipe: ", Stores.get<string>(props.storePtr), recipe)
    }, [Stores.get<string>(chosenDrink)?.state, recipe])

    const handleChange = (event: { target: { value: string | ((prevState: string) => string); }; }) => {
        console.log("change triggered")
        setRecipe({
            coffee: getRecipeCoffee(),
            water: getRecipeWater(),
            cups: 1
        })
        setExplanation(getDrinkExplanation())
    }

    const handleSubmit = (event: {
        target: { value: string; };
    }) => {
        console.log(event.target.value)
        event.preventDefault()
    }


    const handleCups = (event: { target: { value: any; }; }) => {
        setRecipe({
            cups: Math.max(1, event.target.value),
            coffee: recipe.coffee,
            water: recipe.water
        })
    }



    const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
    return (
        <div>
            <div class={tw`flex gap-2 w-full`}>
                <p class={tw`flex-grow-1 font-bold text-xl`}>drink: {chosenDrink}</p>
                <p class={tw`flex-grow-1 font-bold text-xl`}><img
                    src="/cbeans.png"
                    class={tw`h-12`}
                /> {recipe.coffee * recipe.cups}</p>
                <p class={tw`flex-grow-1 font-bold text-xl`}><img
                    src="/water.png"
                    class={tw`h-12`}
                /> {recipe.water * recipe.cups}</p>
            </div>
            <div class={tw`flex flex-row py-10 gap-2 w-1/2`}>
                <p class={tw`flex-grow-1 font-bold text-xl`}>How many cups?</p>
                <button
                    class={tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200 rounded-l-lg`}
                    onClick={() => setRecipe({
                        cups: Math.max(1, recipe.cups - 1),
                        coffee: recipe.coffee,
                        water: recipe.water
                    })}>
                    -
                </button>
                <form onSubmit={handleSubmit}>
                    <input class={tw`inset-0 align-middle text-center min-h-full w-10 font-bold`} type="text" value={recipe.cups} onChange={handleCups}></input>
                </form>
                <button
                    class={tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200 rounded-r-lg`}
                    onClick={() => setRecipe({
                        cups: recipe.cups + 1,
                        coffee: recipe.coffee,
                        water: recipe.water
                    })}>
                    +
                </button>
            </div>
                <div id="explanation-container" class={tw`py-4 mb-4 px-4 bg-gray-200`}>
                    <p>{explanation}</p>
                </div>
        </div>
    );
}
