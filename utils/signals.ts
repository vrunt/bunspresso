// deno-lint-ignore-file no-explicit-any
import { signal } from "@preact/signals";

export const count = signal<number>(0);

export const drink = signal<string>("aeropress");

export const servings = signal<number>(1);

// deno-lint-ignore no-explicit-any
export const coffeeUnits = signal<any>({
  name: "grams",
  symbol: "g",
  toGrams: 1.0,
});

export const waterUnits = signal<any>(
  {
    "name": "grams",
    "symbol": "g",
    "toGrams": 1.0
}
);

// deno-lint-ignore no-explicit-any
export const drinkObj = signal<any>({
  name: "aeropress",
  ratio: {
    coffee: 1,
    water: 6,
  },
  startingCoffee: 15,
  explanation:
    "The ratio of 1:6 is taken from the original recipe by Alan Adler; inventor of the Aeropress. This brew ratio results in a concentrate, much like an espresso—you can add hot water or milk to your liking.",
});
