import KeepingComponentsPure from './01-keeping-components-pure';
import StateIsComponentMemory from './02-state-is-component-memory';
import RespondingToEvents from './03-responding-to-events';
import FetchingData from './04-fetching-data';
import StateAsSnapshot from './05-state-as-a-snaphost';
import MakingTicTacToeGame from './06-making-tic-tac-toe-game';

export const navigationList = [
  {
    id: 'learn-keeping-components-pure',
    title: '컴포넌트 순수성 유지',
    PageElement: KeepingComponentsPure,
  },
  {
    id: 'state-is-component-memory',
    title: '상태 = 컴포넌트 메모리',
    PageElement: StateIsComponentMemory,
  },
  {
    id: 'learn-responding-to-events',
    title: '이벤트 응답',
    PageElement: RespondingToEvents,
  },
  {
    id: 'learn-fetching-data',
    title: '데이터 가져오기',
    PageElement: FetchingData,
  },
  {
    id: 'state-as-a-snapshot',
    title: '상태는 스냅샷처럼 작동',
    PageElement: StateAsSnapshot,
  },
  {
    id: 'making-tic-tac-toe-game',
    title: '틱택토 게임 만들기',
    PageElement: MakingTicTacToeGame,
  },
];
