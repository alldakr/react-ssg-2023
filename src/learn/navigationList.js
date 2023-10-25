import KeepingComponentsPure from './01-keeping-components-pure';
import RespondingToEvents from './02-responding-to-events';
import FetchingData from './03-fetching-data';
import UnderstaindUseStateHook from './04-understaind-use-state-hook';

export const navigationList = [
  {
    id: 'learn-keeping-components-pure',
    title: '컴포넌트 순수성 유지',
    PageElement: KeepingComponentsPure,
  },
  {
    id: 'understaind-use-state-hook',
    title: 'useState 훅 이해',
    PageElement: UnderstaindUseStateHook,
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
