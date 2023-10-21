export const getPublic = (filePath: string): string => {
  return `${import.meta.env.BASE_URL}${filePath}`;
};

export const getPublicAsset = (
  filePath: string,
  assetDir: string = 'assets'
): string => {
  return getPublic(`${assetDir}/${filePath}`);
};
