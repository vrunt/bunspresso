
/** @jsx h */
import { ComponentChild, h, VNode } from "preact";


export default function DrinkSelector(props: []) {
    const data = props.props;
    return (
        <select  name="drinks" id="fruit-select">
        {data.map((option: { value: string|number|string[]|undefined; text: string|number|bigint|boolean|object|ComponentChild[]|VNode<any>|null|undefined; }, index: any) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    )
}

