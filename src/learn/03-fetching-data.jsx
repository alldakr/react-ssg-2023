import { Helmet } from 'react-helmet-async';
import MovieList from './components/MovieList';

function FetchingData() {
  return (
    <>
      <Helmet>
        <title>Fetching Data</title>
      </Helmet>
      <div className="prose">
        <h3>데이터 가져오기</h3>
        <p>
          비동기 프로그래밍 방식으로 클라이언트 환경에서 데이터를 가져오는
          방법을 학습합니다.
        </p>

        <MovieList />
      </div>
    </>
  );
}

export default FetchingData;
