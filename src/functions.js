export default (min, max) => {
// Math.round(0.5 + (Math.random() * 20));
  let rand = (min - 0.5) + (Math.random() * ((max - min) + 1));
  rand = Math.round(rand);
  return rand;
};
