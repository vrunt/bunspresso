import { useState } from "preact/hooks";

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
        {isBrewing? <h1>now brewing</h1> : <h1>not brewing</h1>}
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
