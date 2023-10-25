import { arrayOf, func } from 'prop-types';
import styles from './ShoppingCart.module.css';
import { numberWithComma } from '@/utils';
import { Icon } from '@/components';
import { itemType } from './types';

Products.propTypes = {
  items: arrayOf(itemType),
  onAdd: func,
};

function Products({ items = [], onAdd }) {
  return (
    <section className={styles.products}>
      <h4 className="sr-only">상품 목록</h4>
      {items.map((item) => (
        <div key={item.id} className={styles.product}>
          <h5>{item.title}</h5>
          <span>{numberWithComma(item.price)}원</span>
          <button
            type="button"
            className={styles.button}
            onClick={() => onAdd?.(item)}
          >
            <Icon mode="secondary" />
          </button>
        </div>
      ))}
    </section>
  );
}

export default Products;
