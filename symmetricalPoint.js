import { makePoint, getX, getY } from 'hexlet-points';

// BEGIN (write your solution here)
export const quadrant = (point) => {
  if (getX(point) > 0 && getY(point) > 0) {
    return 1;
  } else if (getX(point) < 0 && getY(point) > 0) {
    return 2;
  } else if (getX(point) < 0 && getY(point) < 0) {
    return 3;
  } else if (getX(point) > 0 && getY(point) < 0) {
    return 4;
  }
};
// END

// BEGIN (write your solution here)
export const symmetricalPoint = (point) => {
  return makePoint(-(getX(point)), -(getY(point)));
};
// END

// BEGIN (write your solution here)
export const distance = (point1, point2) => {
  const xpoint = (getX(point2) - getX(point1));
  const ypoint = (getY(point2) - getY(point1));
  return Math.sqrt(Math.pow(xpoint, 2) + Math.pow(ypoint, 2));
};
// END