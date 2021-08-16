import styles from "../../styles/PaymentList.module.css";
import { Payment } from "../pages/data/payment";
import PaymentItem from "./PaymentItem";

const PaymentList = ({ paymentList, onPayHandler }) => {
  const onPay = (payment: Payment) => {
    onPayHandler(payment);
  };

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
          return (
            <PaymentItem
              key={paymentItem.id}
              paymentItem={paymentItem}
              onPayHandler={(payment) => onPay(payment)}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default PaymentList;
