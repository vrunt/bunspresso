import { ComponentChild, ComponentChildren, VNode } from "preact";

export interface SelectorProps{
  // deno-lint-ignore no-explicit-any
  selector: any
  // deno-lint-ignore no-explicit-any
  data: any
  label: string
}

export default function Selector(props: SelectorProps) {

  const handleChosen = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    console.log("handling change in selector")
    props.selector.value = props.data.find((item: { name: string; }) => item.name === target.value)
  }

  console.log("signal value in Selector: ", props.selector.value)
  return (
    <div class="form-group">
    <label class="form-label mt-4">{props.label}:</label>
   <select class="form-select font-italic text-xl" name="drinks" id="drink-select" onChange={handleChosen}>
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

