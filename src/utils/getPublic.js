export const getPublic = (filePath) => `${import.meta.env.BASE_URL}${filePath}`;

export const getPublicAsset = (filePath, assetDir = 'assets') =>
  getPublic(`${assetDir}/${filePath}`);

// export default {
//   getPublic,
//   getPublicAsset
// }
