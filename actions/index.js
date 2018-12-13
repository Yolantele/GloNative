import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../constants";

export const incrementCounter = (count) => ({
    type: INCREMENT_COUNTER,
})

export const decrementCounter = (count) => ({
    type: DECREMENT_COUNTER,
})