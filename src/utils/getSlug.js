export function getSlug(path, seperator = '-') {
  return path.replace(/\s/g, seperator);
}
