import { useState } from "preact/hooks";
import Liquid from "./Liquid.tsx";

export default function BrewAnimation() {
  const [isBrewing, setIsBrewing] = useState(false);
  const handleBrew = () => {
    setIsBrewing(!isBrewing);
  };
  console.log(isBrewing);
  return (
    <div>
      <link rel="stylesheet" href="lux.bootstrap.min.css" />
      <div class={`flex flex-col contents-center items-center`}>
        {isBrewing? <Liquid /> : <h1>not brewing</h1>}
        <button
          type="button"
          style="height:50%; align-self:center; margin-left:1rem; text-align:center;"
          class="btn btn-outline-danger"
          onClick={handleBrew}
        >
          BREW
        </button>
      </div>
    </div>
  );
}
