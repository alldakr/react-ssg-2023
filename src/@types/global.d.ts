import {
  CSSProperties,
  PropsWithChildren as ReactPropsWithChildren,
} from 'react';

declare type PropsWithChildren = {
  [key: string]: unknown;
} & ReactPropsWithChildren;

declare type Styles = {
  [key: string]: CSSProperties | undefined;
};
