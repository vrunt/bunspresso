import { signal } from "@preact/signals";

export const count = signal<number>(0);

export const drink = signal<string>("aeropress");

export const cups = signal<number>(1);