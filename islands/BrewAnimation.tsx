import { useState } from "preact/hooks";

export default function BrewAnimation() {
  
    const [isBrewing, setIsBrewing] = useState(false)
    console.log(isBrewing)
    return (
    <div class={`flex flex-col items-center`}>
      <link rel="stylesheet" href="/brew.css" />
      <link rel="stylesheet" href="/lux.bootstrap.min.css" />
      {isBrewing ? <h1>brewing</h1> : <h1>not brewing</h1>}
      <button
        type="button"
        style="height:50%; align-self:center; margin-left:1rem; text-align:center;"
        class="btn btn-outline-danger"
        onClick={() => setIsBrewing(!isBrewing)}
      >
        BREW
      </button>
    </div>
  );
}
