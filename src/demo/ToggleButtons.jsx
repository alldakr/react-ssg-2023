import { ToggleButton } from '@/components';

export function ToggleButtons(props) {
  return (
    <div {...props}>
      <ToggleButton on />
      <ToggleButton />
    </div>
  );
}
