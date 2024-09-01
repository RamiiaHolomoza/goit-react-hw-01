import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
        {/* {transactions.map((transaction) => {
                  return (
                    <tr className={s.transaction} key={transaction.id}>
                      <td>{transaction.type}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.currency}</td>
                    </tr>
                  );
        })} */}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
