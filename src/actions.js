export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const FETCH = "FETCH";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export function increaseCounter(incrementValue = 1) {
  return {
    type: INCREMENT_COUNTER,
    incrementValue,
  };
}

export function decreaseCounter(decrementValue = 1) {
  return {
    type: DECREMENT_COUNTER,
    decrementValue,
  };
}

export function fetchUser() {
  return {
    type: FETCH,
  };
}
