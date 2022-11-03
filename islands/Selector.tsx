import { ComponentChildren, VNode } from "preact";

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
    props.selector.value = props.data.find((item: { name: string; }) => item.name === target.value)
  }

  return (
    <div class="form-group">
    <label class="form-label mt-4">{props.label}:</label>
   <select class="form-select font-italic text-xl" name="drinks" id="drink-select" onChange={handleChosen} value={props.selector.value.name}>
        {props.data.map((option: {
            name: ComponentChildren; value: string }, index: number) => (
            <option key={index} value={option.value}>
                {option.name}
            </option>
        ))}
    </select>
    </div>
    )
}

