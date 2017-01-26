import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const make = (numer, denom) => {
  return cons(numer, denom);
};
export const numer = (pair) => {
  return car(pair);
};
export const denom = (pair) => {
  return cdr(pair);
};
export const toString = (rat) => {
  return `${numer(rat)} / ${denom(rat)}`;
};
export const isEqual = (rat1, rat2) => {
  return numer(rat1) * denom(rat2) === numer(rat2) * denom(rat1);
};
export const add = (rat1, rat2) => {
  return make(
    numer(rat1) * denom(rat2) + numer(rat2) * denom(rat1),
  denom(rat1) * denom(rat2)
  );
};
export const sub = (rat1, rat2) => {
  return make(
    numer(rat1) * denom(rat2) - numer(rat2) * denom(rat1),
  denom(rat1) * denom(rat2)
  );
};
export const mul = (rat1, rat2) => {
  return make(
    numer(rat1) * numer(rat2),
    denom(rat1) * denom(rat2)
    );
};
export const div = (rat1, rat2) => {
  return make(
    numer(rat1) * denom(rat2),
    denom(rat1) * numer(rat2)
    );
};
// END
