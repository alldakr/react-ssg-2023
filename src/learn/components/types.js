import { number, shape, string } from 'prop-types';

export const itemType = shape({
  id: string.isRequired,
  title: string.isRequired,
  price: number.isRequired,
});
