export function getJSONString(string) {
  return JSON.stringify(
    string,
    (key, value) => (typeof value === 'function' ? 'setter()' : value),
    2
  );
}
