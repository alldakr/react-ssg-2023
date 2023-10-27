import { func, node, string } from 'prop-types';
import styles from './EventPropagation.module.css';

function EventPropagation() {
  const handleLog = () => {
    // [미션 1] 로그 함수 로직을 작성합니다.
    // ...
  };

  return (
    <div className={styles.component}>
      <h4>이벤트 전파 (할 일 갯수: 4)</h4>
      <p>
        이벤트 핸들러는 컴포넌트가 가질 수 있는 모든 하위 이벤트도 감지합니다.
      </p>
      <Box
        onLog={handleLog}
        tag="grand parent"
        style={{ marginTop: 12, width: 220 }}
      >
        <Box onLog={handleLog} tag="parent">
          <Box onLog={handleLog} tag="child" />
        </Box>
      </Box>
    </div>
  );
}

export default EventPropagation;

Box.propTypes = {
  tag: string,
  children: node,
  onLog: func,
};

function Box({ tag, children, onLog, ...restProps }) {
  const handleClick = () => {
    console.log(onLog);
    // [미션 2] onLog 속성(prop)이 작동되도록 설정합니다.
    // 사용자가 영역을 클릭하면 태그 이름이 출력되어야 합니다.
    // ...

    // [미션 3] 접근성 준수되도록 코드를 수정합니다.
    // <div> 요소는 초점 이동이 가능하지 않습니다. 이를 가능하도록 수정합니다.
    // ...
  };

  return (
    <div className={styles.box} onClick={handleClick} {...restProps}>
      <span className={styles.tag}>{tag}</span>
      {children}
    </div>
  );
}
