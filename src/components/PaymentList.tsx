import styles from "../../styles/PaymentList.module.css";
import PaymentItem from "./PaymentItem";

const PaymentList = ({ paymentList }) => {
  return (
    <table className="table rounded-border">
      <thead>
        <tr>
          <th>Due By</th>
          <th>Description</th>
          <th>Status</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {paymentList.map((paymentItem) => {
          return <PaymentItem key={paymentItem.id} paymentItem={paymentItem} />;
        })}
      </tbody>
    </table>
  );
};

export default PaymentList;
