import BrewAnimation from "../islands/BrewAnimation.tsx";

export default function Brew() {
  return (
    <div class={`min-h-screen flex flex-row items-center`}>
      <link rel="stylesheet" href="/brew.css" />
      <div class={`flex flex-col items-center`}>
      <h1>brew page</h1>
        <BrewAnimation />
      </div>
    </div>
  );
}
