import type { PropsWithChildren } from '@/@types/global';
import { ToggleButton } from '@/components';

export function ToggleButtons(props: PropsWithChildren): JSX.Element {
  return (
    <div {...props}>
      <ToggleButton on />
      <ToggleButton />
    </div>
  );
}
