import type { RestPropsWithChildren } from '@/types';
import { ToggleButton } from '@/components';

export function ToggleButtons(props: RestPropsWithChildren): JSX.Element {
  return (
    <div {...props}>
      <ToggleButton on />
      <ToggleButton />
    </div>
  );
}
