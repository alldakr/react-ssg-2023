import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>React. Step by Step</title>
      </Helmet>
      <div className="prose">
        <h3>리액트﹣스탭 바이 스탭</h3>
      </div>
    </>
  );
}

export default Home;
