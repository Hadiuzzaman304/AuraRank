export const ANGLE_LIMIT = {
  front: 10,
  left: 7,
  right: 7,
  back: 6,
};

export function pickAngle(counter) {
  const available = Object.keys(ANGLE_LIMIT).filter(
    (a) => counter[a] < ANGLE_LIMIT[a]
  );
  return available[Math.floor(Math.random() * available.length)];
}
