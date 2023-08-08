import { writable } from "svelte/store";

export const input = writable({
    slider1: 0,
    slider2: 0,
    button1: false,
});
