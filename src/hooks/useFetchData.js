// 데이터 패치 코드 로직 재사용
// 상태(status) : idle | loading | success | error
// 오류(error) : null | Error
// 데이터(data) : null | Response<any>

import { useEffect, useState } from 'react';

function useFetchData(endpoint /* string */, initialData = null) {
  // 상태 관리: useState
  const [state, setState] = useState({
    status: 'idle',
    error: null,
    data: initialData,
  });

  // 이펙트 관리: useEffect
  // - 네트워크 요청/응답
  useEffect(() => {
    console.log('fetcing data');

    // 아래처럼 업데이트 하면 안 됨
    // [x] setState(nextState);
    // [o] setState((prevState) => nextState)
    setState((prevState) => ({
      ...prevState,
      status: 'loading',
    }));

    // Promise API 활용
    fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setState((prevState) => ({
          ...prevState,
          status: 'success',
          data,
        }));
      })
      .catch((error) => {
        setState((prevState) => ({
          ...prevState,
          status: 'success',
          error,
        }));
      });
  }, [endpoint]);

  // 훅 함수의 반환 값
  return state; /* { status, error, data } */
}

export default useFetchData;
