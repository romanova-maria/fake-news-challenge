export function wait(sec = 1) {
  return new Promise((res) => setTimeout(res, sec * 1000));
}
