import './LoadingScreen.css';
import loadingScreenPath from '@/assets/loading-screen.svg';

function LoadingScreen() {
  return (
    <img className="LoadingScreen" src={loadingScreenPath} alt="로딩 중..." />
  );
}

export default LoadingScreen;
