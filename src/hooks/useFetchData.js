// 데이터 패치 코드 로직 재사용
// 상태(status) : idle | loading | success | error
// 오류(error) : null | Error
// 데이터(data) : null | Response<any>

import { useEffect, useState } from 'react';

function useFetchData(endpoint /* string */, initialData = null, options = {}) {
  // 상태 관리: useState
  const [state, setState] = useState({
    status: 'idle',
    error: null,
    data: initialData,
  });

  // 이펙트 관리: useEffect
  // - 네트워크 요청/응답
  useEffect(() => {
    setState({
      ...state,
      status: 'loading',
    });

    // Promise API 활용
    fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    })
      .then((response) => response.json())
      .then((data) => {
        setState({
          ...state,
          status: 'success',
          data, // data: data (1997 ~ 2014)
        });
      })
      .catch((error) => {
        setState({
          ...state,
          error,
        });
      });
  }, [endpoint, options, state]);

  // 훅 함수의 반환 값
  return state; /* { status, error, data } */
}

export default useFetchData;
