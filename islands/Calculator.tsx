/** @jsx h */
import { ComponentChild, h } from "preact";
import { useState, useEffect } from "preact/hooks";
// import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import DrinkSelector from './DrinkSelector.tsx'




export default function Calculator(props: {}) {


    const [chosenDrink, setChosenDrink] = useState(
        "aeropress"
    )

    const [recipe, setRecipe] = useState({
        coffee: 0 || props.data.find((item: { name: string; }) => item.name === `${chosenDrink}`).starting.coffee,
        water: 0 || props.data.find((item: { name: string; }) => item.name === `${chosenDrink}`).starting.water,
        cups: 1
    })

    useEffect(() => {
        console.log("recipe: ", chosenDrink, recipe)
    }, [chosenDrink, recipe])
   
    const handleChange = (event: { target: { value: string | ((prevState: string) => string); }; }) => {
        let newCoffeeType = event.target.value
        setChosenDrink(newCoffeeType)
        setRecipe({
            coffee: 0 || props.data.find((item: { name: string; }) => item.name === newCoffeeType).starting.coffee,
            water: 0 || props.data.find((item: { name: string; }) => item.name === newCoffeeType).starting.water,
            cups: 1
        })
    }
    // const changeRecipe = () => {}

    const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
    return (
        <div>
            <div class={tw`flex gap-2 w-full`}>
                <p class={tw`flex-grow-1 font-bold text-xl`}>drink: {chosenDrink}</p>
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
            <select name="drinks" id="fruit-select" onChange={handleChange}>
                {props.data.map((option: {
                    name: ComponentChildren; value: string | number | string[] | undefined; text: string | number | bigint | boolean | object | ComponentChild[] | VNode<any> | null | undefined;
                }, index: any) => (
                    <option key={index} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
            {/* <DrinkSelector props={props.data} /> */}
        </div>
    );
}

function coffee(coffee: any, arg1: any, water: any, arg3: any, cups: any, arg5: number) {
    throw new Error("Function not implemented.");
}

function water(coffee: any, arg1: any, water: any, arg3: any, cups: any, arg5: number) {
    throw new Error("Function not implemented.");
}

function cups(coffee: any, arg1: any, water: any, arg3: any, cups: any, arg5: number) {
    throw new Error("Function not implemented.");
}
