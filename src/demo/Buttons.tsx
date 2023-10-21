import type { PropsWithChildren } from '@/@types/global';
import { Button } from '@/components';

export function Buttons(props: PropsWithChildren): JSX.Element {
  return (
    <div {...props}>
      <Button title="getting started">시작하기</Button>
      <Button title="installing packages">패키지 설치</Button>
    </div>
  );
}
