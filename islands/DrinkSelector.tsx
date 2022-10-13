import { ComponentChild, ComponentChildren, VNode } from "preact";
import { drink } from "../utils/signals.ts";
export interface DrinkSelectorProps{
  // deno-lint-ignore no-explicit-any
  data: any
}

export default function Selector(props: DrinkSelectorProps) {

  // deno-lint-ignore no-explicit-any
  const handleChosenDrink = (event: { target: { value: any; }; }) => {
    drink.value = event.target.value
  }
  console.log("drink signal value in drinkSelector: ", drink.value)
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

