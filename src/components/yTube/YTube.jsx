import { oneOf, string } from 'prop-types';
import styles from './YTube.module.css';

YTube.propTypes = {
  id: string.isRequired,
  ratio: oneOf(['16:9', '4:3', '21:9', '1:1']),
};

function YTube({ id, ratio = '16:9', ...restProps }) {
  const [ratioH, ratioV] = ratio.split(':');

  return (
    <div
      className={styles.component}
      style={{
        '--ratio-h': ratioH,
        '--ratio-v': ratioV,
      }}
      {...restProps}
    >
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      />
    </div>
  );
}

export default YTube;
