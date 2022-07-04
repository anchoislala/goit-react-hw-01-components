import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return <table className={css.transactionhistory}>
  <thead>
    <tr className={css.tablerow}>
      <th className={css.tablehead}>Type</th>
      <th className={css.tablehead}>Amount</th>
      <th className={css.tablehead}>Currency</th>
    </tr>
  </thead>

    <tbody>
      
      {items.map(({ id, type, amount, currency }) => {
        return <tr key={ id } className={css.tablerow}>
      <td>{ type }</td>
      <td>{ amount }</td>
      <td>{ currency }</td>
        </tr>
      })}
    
  </tbody>
</table>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
}
