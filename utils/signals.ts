import { signal } from "@preact/signals";

export type Units = {
  name: string;
  symbol: string;
  toGrams: number;
}

export type Drink = {
  name: string;
  ratio: { coffee: number; water: number; };
  startingCoffee: number;
  explanation: string;
}

export const count = signal<number>(0);

export const servings = signal<number>(1);

export const multiplier = signal<number>(1);

export const coffeeUnits = signal<Units>({
  name: "grams",
  symbol: "g",
  toGrams: 1.0,
});

export const waterUnits = signal<Units>(
  {
    name: "grams",
    symbol: "g",
    toGrams: 1.0
}
);

export const drink = signal<Drink>({
  name: "aeropress",
  ratio: {
    coffee: 1,
    water: 6,
  },
  startingCoffee: 15,
  explanation:
    "The ratio of 1:6 is taken from the original recipe by Alan Adler; inventor of the Aeropress. This brew ratio results in a concentrate, much like an espresso—you can add hot water or milk to your liking.",
});
