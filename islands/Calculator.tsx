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

    const chosenDrink = useStore("aeropress", {
        pointer: props.storePtr,
        onChange: (newState) => console.log(`New value: ${newState}`)
    })

    const [recipe, setRecipe] = useState({
        coffee: 0,
        water: 0,
        cups: 1
    })

    useEffect(() => {
        console.log("recipe: ", Stores.get<string>(props.storePtr), recipe)
    }, [Stores.get<string>(chosenDrink)?.state, recipe])

    const handleChange = (event: { target: { value: string | ((prevState: string) => string); }; }) => {
        console.log("change triggered")
        let newCoffeeType = event.target.value
        Stores.get<string>(chosenDrink)?.set(newCoffeeType);
        setRecipe({
            coffee: 0 || props.data.find((item: { name: string; }) => item.name === newCoffeeType).starting.coffee,
            water: 0 || props.data.find((item: { name: string; }) => item.name === newCoffeeType).starting.water,
            cups: 1
        })
    }

    const handleSubmit = (event: {
        preventDefault(); target: { value: string; };
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
                <p class={tw`flex-grow-1 font-bold text-xl`}>drink: {Stores.get<string>(chosenDrink)?.state}</p>
                <p class={tw`flex-grow-1 font-bold text-xl`}>coffee: {recipe.coffee * recipe.cups}</p>
                <p class={tw`flex-grow-1 font-bold text-xl`}>water: {recipe.water * recipe.cups}</p>
            </div>
            <div class={tw`flex flex-row py-10 gap-2 w-1/2`}>
                <p class={tw`flex-grow-1 font-bold text-xl`}>How many cups?</p>
                <button
                    class={btn}
                    onClick={() => setRecipe({
                        cups: Math.max(1, recipe.cups - 1),
                        coffee: recipe.coffee,
                        water: recipe.water
                    })}>
                    -1
                </button>
                <form onSubmit={handleSubmit}>
                    <input class="border-2" type="text" value={recipe.cups} onChange={handleCups}></input>
                    <input type="submit" class={tw`flex-grow-1 px-6 border-2 border-indigo-600 text-l`} value="set cups"></input>
                </form>
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
            {<select name="drinks" id="drink-select" onChange={handleChange}>
               <option>choose a drink</option>
                 {props.data.map((option: {
                    name: ComponentChildren; value: string | number | string[] | undefined; text: string | number | bigint | boolean | object | ComponentChild[] | VNode<any> | null | undefined;
                }, index: any) => (
                    <option key={index} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>}
        </div>
    );
}
