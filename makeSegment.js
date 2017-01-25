import { makePoint, getX, getY, toString } from 'hexlet-points';
import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const makeSegment = (point1, point2) => {
  const segment = cons(point1, point2);
  return segment;
};
export const startSegment = (segment) => {
  return car(segment);
};
export const endSegment = (segment) => {
  return cdr(segment);
};
export const toStr = (segment) => {
  return `[${ toString(car(segment))}, ${toString(cdr(segment))}]`;
};
export const midpointSegment = (segment) => {
  const x = (getX(startSegment(segment)) + getX(endSegment(segment))) / 2;
  const y = (getY(startSegment(segment)) + getY(endSegment(segment))) / 2;
  return makePoint(x, y);
};
// END
