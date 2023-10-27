// 사용자 입력이 멈춘 후 0.4초 동안 아무런 동작이 없다면?
// 그 때 콜백 함수 실행
export function debounce(callback, timeout = 400 /* ms */) {
  let clearId;

  // JavaScript 클로저 활용
  return (...args) => {
    clearTimeout(clearId);
    clearId = setTimeout(callback.bind(null, ...args), timeout);
  };
}
