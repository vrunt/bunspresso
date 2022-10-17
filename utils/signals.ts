import { signal } from "@preact/signals";

export const count = signal<number>(0);

export const drink = signal<string>("aeropress");

export const servings = signal<number>(1);

export const coffeeUnits = signal<string>("grams")

export const waterUnits = signal<string>("grams")
