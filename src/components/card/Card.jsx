import { elementType, number, oneOfType, string } from 'prop-types';
import styles from './Card.module.css';

Card.propTypes = {
  as: oneOfType([string, elementType]),
  description: string.isRequired,
  title: string.isRequired,
  photo: string,
  width: number,
  height: number,
};

function Card({
  as: ComponentName = 'div',
  description,
  title,
  photo,
  width = 250,
  height = 400,
  ...restProps
}) {
  return (
    <ComponentName className={styles.component} {...restProps}>
      <img src={photo} alt="" width={width} height={height} />
      <div role="group" className={styles.wrapper}>
        <em>{title}</em>
        <span>{description}</span>
      </div>
    </ComponentName>
  );
}

export default Card;
