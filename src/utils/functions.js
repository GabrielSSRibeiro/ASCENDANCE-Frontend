export function firstHalf(array) {
  return array.filter((value, index) => index < array.length / 2);
}

export function secondHalf(array) {
  return array.filter((value, index) => index >= array.length / 2);
}
