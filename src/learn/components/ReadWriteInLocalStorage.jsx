import { useState, useEffect } from 'react';
import { any, arrayOf } from 'prop-types';
import { Icon, IconButton } from '@/components';
import styles from './ReadWriteInLocalStorage.module.css';

ReadWriteInLocalStorage.propTypes = {
  data: arrayOf(any),
};

// 브라우저 스토리지에 쓰기/읽기할 식별자 키
const LIST_KEY = 'LIST_KEY';

function ReadWriteInLocalStorage({ data: initialData = Array(2).fill(null) }) {
  const [clickedCount, setClickedCount] = useState(0);

  // [미션 2-1] 로컬 스토리지에서 특정 키 값을 읽어오도록 코드를 수정합니다.
  // React API 문서
  // 이니셜라이저(지연된 초기화) 참고: https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state
  const [data, setData] = useState(() => {
    // 초기화 수행(일) 처리
    // 브라우저 스토리지의 데이터 읽기 (고유한 키)
    // 원시 데이터 값 (number, string, boolean, null, ...)
    // 객체형 데이터 값 (object, array, ...)
    // [읽기] 문자(JSON 포멧) → 객체 변환(해석: parse)
    let data = localStorage.getItem(LIST_KEY);
    return data ? JSON.parse(data) : initialData;
    // if (data) {
    //   return JSON.parse(data);
    // } else {
    //   return initialData;
    // }
  });

  // console.log({ data });

  const handleAddItem = () => {
    // [미션 1] data에 새로운 아이템을 추가하는 로직을 작성합니다.
    // 리액트 프로그래밍에서 상태(배열) 업데이트는 어떻게 해야 할까?

    // 방법 1.
    // const nextData = data.slice(); // JS 배열 복제 (구형)
    // const nextData = [...data]; // JS 배열 복제 (신형)
    // nextData.push(null);
    // setData(nextData);

    // 방법 2.
    // 인라인 방식으로 새로운 상태 값 설정
    // - 전개 구문을 사용해 기존의 상태 값인 data(배열) 전개
    // - 새로운 아이템인 null을 추가
    setData([...data, null]);

    // 하면 안되는 방법
    // data.push(null);
    // setData(data);
  };

  // React.useEffect 훅
  // 외부의 상태 관리 도구(시스템)과 상태 동기화
  // 즉, 상태(스냅샷) 업데이트 시 상태 변경 이후 실행(콜백)되도록 처리할 때
  // useEffect(effectCallback, dependencies?);
  useEffect(() => {
    // [미션 2-2] 로컬 스토리지의 특정 키 값에 데이터를 저장하도록 설정합니다.
    // [쓰기] 객체 → 문자(JSON 포멧) 저장
    console.log('data가 변경되면 실행되는 콜백 함수');
    localStorage.setItem(LIST_KEY, JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    console.log('이펙트 훅에 종속성 배열을 설정하지 않으면?');
  }, []);

  return (
    <div className={styles.component}>
      <h4>로컬 스토리지에 읽기/쓰기</h4>
      <p>
        브라우저 스토리지에 데이터를 쓰고 읽어 컴포넌트 상태를 유지하도록
        설정합니다.
      </p>
      <div>
        <button
          type="button"
          lang="en"
          onClick={() => setClickedCount(clickedCount + 1)}
        >
          update clicked count ({clickedCount})
        </button>
      </div>
      <label>
        <input type="checkbox" /> 로컬 스토리지에 상태 유지
      </label>
      <ol>
        {data.map((item, index) => (
          <li key={index}>
            {index === 0 ? (
              <IconButton
                iconLeft={<Icon />}
                rounded="full"
                size="md"
                onClick={handleAddItem}
              >
                항목 추가
              </IconButton>
            ) : (
              <span>{item ?? index}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ReadWriteInLocalStorage;
