import { arrayOf, func } from 'prop-types';
import { numberWithComma } from '@/utils';
import { Icon } from '@/components';
import { itemType } from './types';
import styles from './ShoppingCart.module.css';

Cart.propTypes = {
  cart: arrayOf(itemType),
  onRemove: func,
  onAllRemove: func,
};

function Cart({ cart, onRemove, onAllRemove }) {
  return (
    <section className={styles.cart}>
      <h4>
        장바구니{' '}
        <span>
          (총 상품 갯수:{' '}
          {cart.reduce((amounts, item) => amounts + item.amount, 0)}개)
        </span>
      </h4>
      <table>
        <caption className="sr-only">장바구니에 담긴 상품 표</caption>
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">가격</th>
            <th scope="col">수량</th>
            <th scope="col">삭제</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{numberWithComma(item.price)}원</td>
              <td>{item.amount}</td>
              <td>
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => onRemove?.(item)}
                >
                  <Icon type="minus" mode="secondary" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">총 합</th>
            <td className={styles.total} colSpan={3}>
              {numberWithComma(
                cart.reduce(
                  (total, item) => total + item.price * item.amount,
                  0
                )
              )}
              원
            </td>
          </tr>
        </tfoot>
      </table>
      <button
        type="button"
        className={styles.allRemoveButton}
        disabled={cart.length === 0}
        onClick={onAllRemove}
      >
        장바구니 모두 비우기
      </button>
    </section>
  );
}

export default Cart;
