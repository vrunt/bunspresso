import { count } from "../utils/count.ts";

export default function SignalTest() {
    console.log(count)
    return (
        <div>
        <button onClick={() => count.value--}>-1</button>
        <p>Count: {count.value}</p>
        <button onClick={() => count.value++}>+1</button>
        </div>
    )
}