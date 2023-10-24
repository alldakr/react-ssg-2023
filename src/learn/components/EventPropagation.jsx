import { node, string } from 'prop-types';
import styles from './EventPropagation.module.css';

function EventPropagation() {
  return (
    <div className={styles.component}>
      <h4>이벤트 전파</h4>
      <p>
        이벤트 핸들러는 컴포넌트가 가질 수 있는 모든 하위 이벤트도 감지합니다.
      </p>
      <Box tag="grand parent" style={{ marginTop: 12 }}>
        <Box tag="parent">
          <Box tag="child" />
        </Box>
      </Box>
    </div>
  );
}

export default EventPropagation;

Box.propTypes = {
  tag: string,
  children: node,
};

function Box({ tag, children, ...restProps }) {
  return (
    <button type="button" className={styles.box} {...restProps}>
      <span className={styles.tag}>{tag}</span>
      {children}
    </button>
  );
}
