import { Helmet } from 'react-helmet-async';
import ShoppingCart from './components/ShoppingCart';

function StateAsSnapshot() {
  return (
    <>
      <Helmet>
        <title>State as a Snapshot</title>
      </Helmet>
      <div className="prose">
        <h3>상태는 스냅샷처럼 작동</h3>
        <p>
          상태 변수는 읽고 쓸 수 있는 일반 JavaScript 변수처럼 보일 수 있습니다.
        </p>
        <p>
          하지만 상태는{' '}
          <a
            href="https://bit.ly/3s73JTy"
            rel="noreffer noreferrer"
            target="_blank"
            style={{ color: 'var(--primary--500)', textDecoration: 'none' }}
            title="스냅샷이란? 마치 사진을 찍듯, 특정 시점에 스토리지의 파일 시스템을 포착해
            보관하는 기술을 의미합니다."
          >
            스냅샷
          </a>
          처럼 작동합니다. 상태 변수를 변경 시도해도
          <br />
          이미 가지고 있는 상태 변수를 바로 변경되지 않지만, 리-렌더링을
          트리거합니다.
        </p>

        <ShoppingCart />
      </div>
    </>
  );
}

export default StateAsSnapshot;
