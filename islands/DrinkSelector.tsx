import { useRef } from "https://esm.sh/v86/preact@10.8.2/hooks/src/index";
import { ComponentChild, ComponentChildren, VNode } from "preact";
import { useStore, Stores } from "https://deno.land/x/fresh_store@v0.1.1/mod.ts";

export interface DrinkSelectorProps{
  storePtr: string
  // deno-lint-ignore no-explicit-any
  data: any
}

export default function DrinkSelector(props: DrinkSelectorProps) {

  const chosenDrinkPointer = useStore("aeropress", {
    pointer: props.storePtr
})

  // deno-lint-ignore no-explicit-any
  const handleChosenDrink = (event: { target: { value: any; }; }) => {
    const newCoffeeType = event.target.value
    Stores.get<string>(chosenDrinkPointer)?.set(newCoffeeType);
  }

  return (
    <div>
   <select class="font-italic text-xl" name="drinks" id="drink-select" onChange={handleChosenDrink}>
        {props.data.map((option: {
            name: ComponentChildren; value: string | number | string[] | undefined; text: string | number | bigint | boolean | object | ComponentChild[] | VNode<any> | null | undefined;
        }, index: any) => (
            <option key={index} value={option.value}>
                {option.name}
            </option>
        ))}
    </select>
    </div>
    )
}

