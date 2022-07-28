
/** @jsx h */
import { useRef } from "https://esm.sh/v86/preact@10.8.2/hooks/src/index";
import { ComponentChild, ComponentChildren, h, VNode } from "preact";


export interface DrinkSelectorProps{
  onChange: (drink: string|undefined) => void
}
export default function DrinkSelector(props: DrinkSelectorProps) {
    const data = props.props;
    console.log(props)

    const selectedDrink = useRef<HTMLInputElement>(null)

    const handleSelectDrink = () => {
      
      props.onChange(selectedDrink?.current?.value);
    }
    return (
      <select ref={selectedDrink} name="drinks" id="drink-select" onChange={handleSelectDrink}>
      <option>drinkselector a drink</option>
        {data.map((option: {
            name: ComponentChildren; value: string | number | string[] | undefined; text: string | number | bigint | boolean | object | ComponentChild[] | VNode<any> | null | undefined;
        }, index: any) => (
            <option key={index} value={option.value}>
                {option.name}
            </option>
        ))}
    </select>
    )
}

