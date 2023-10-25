import { useState } from 'react';

export default function useReRender() {
  const [, update] = useState();
  const reRender = () => update(Math.random());
  return reRender;
}
