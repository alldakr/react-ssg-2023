import KeepingComponentsPure from './01-keeping-components-pure';
import StateIsComponentMemory from './02-state-is-component-memory';
import RespondingToEvents from './03-responding-to-events';
import FetchingData from './04-fetching-data';

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
];
