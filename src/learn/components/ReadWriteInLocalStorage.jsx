import { useState } from 'react';
import { any, arrayOf } from 'prop-types';
import { Icon, IconButton } from '@/components';
import styles from './ReadWriteInLocalStorage.module.css';

ReadWriteInLocalStorage.propTypes = {
  data: arrayOf(any),
};

function ReadWriteInLocalStorage({ data: initialData = Array(2).fill(null) }) {
  // [미션 2-1] 로컬 스토리지에서 특정 키 값을 읽어오도록 코드를 수정합니다.
  const [data] = useState(initialData);

  console.log({ data });

  const handleAddItem = () => {
    // [미션 1] data에 새로운 아이템을 추가하는 로직을 작성합니다.
    // ...
    // [미션 2-2] 로컬 스토리지의 특정 키 값에 데이터를 저장하도록 설정합니다.
    // ...
  };

  return (
    <div className={styles.component}>
      <h4>로컬 스토리지에 읽기/쓰기</h4>
      <p>
        브라우저 스토리지에 데이터를 쓰고 읽어 컴포넌트 상태를 유지하도록
        설정합니다.
      </p>
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
