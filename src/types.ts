import { CSSProperties, PropsWithChildren } from 'react';

export type Styles = {
  [key: string]: CSSProperties | undefined;
};

export type RestPropsWithChildren = PropsWithChildren<{
  [key: string]: unknown;
}>;
