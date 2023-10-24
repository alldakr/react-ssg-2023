import { YTube } from '@/components';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>React. Step by Step</title>
      </Helmet>
      <div className="prose">
        <h3>리액트﹣스탭 바이 스탭</h3>
        <p>
          리액트 공식 문서의 기본 개념 이해를 위한 STEP-BY-STEP 실습을
          진행합니다.
        </p>
        <div
          style={{
            maxWidth: 420,
          }}
        >
          <YTube id="iCrargw1rrM" ratio="1:1" />
        </div>
      </div>
    </>
  );
}

export default Home;
