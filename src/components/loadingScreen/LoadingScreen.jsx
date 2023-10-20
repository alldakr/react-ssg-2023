import './LoadingScreen.css';
import loadingScreenPath from '../assets/loading-screen.svg';

function LoadingScreen() {
  // 상대 경로로 에셋을 불러오면 안된다.
  // 동적 에셋은 import 구문으로 불러와야 한다.
  return (
    <img className="LoadingScreen" src={loadingScreenPath} alt="로딩 중..." />
  );
}

export default LoadingScreen;
