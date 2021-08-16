import styles from "../../styles/PaymentItem.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import { Payment } from "../pages/data/payment";

const PaymentItem = ({ paymentItem }) => {
  return (
    <tr>
      <td width="10%">
        <div className={styles.due_date}>{formatDate(paymentItem.dueDate)}</div>
      </td>
      <td width="60%">
        <div className={styles.content}>
          <div className={styles.category}>{paymentItem.category}</div>
          <div className={styles.description}>{paymentItem.description}</div>
        </div>
      </td>
      <td width="10%">
        <div className={styles.status}>
          <span className={`badge ${getPaymentStatus(paymentItem)}`}>
            {getPaymentStatus(paymentItem)}
          </span>
        </div>
      </td>
      <td width="10%">
        <div className={styles.amount}>{centsToUSD(paymentItem.amount)}</div>
      </td>
      <td width="10%">
        {paymentItem.status !== "Paid" && (
          <div>
            <a className="btn btn_primary">Pay</a>
          </div>
        )}
      </td>
    </tr>
  );
};

export const centsToUSD = (amount: number): string | undefined => {
  if (amount) {
    let amountInDollars: number = amount / 100;
    let dollars: string = amountInDollars.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return dollars;
  }
};

export const formatDate = (date: Date): string | undefined => {
  let shortDate;
  if (date) {
    return (shortDate = dayjs(date).format("MMM DD"));
  }
};

export const getPaymentStatus = (payment: Payment): string | undefined => {
  if (payment) {
    if (isOverDuePayment(payment.dueDate)) {
      if (payment.status === "Paid") {
        return "Paid";
      } else {
        return "Overdue";
      }
    }
  }
};

export const isOverDuePayment = (paymentDate: Date): boolean => {
  const today = dayjs(new Date());
  const rentDate = dayjs(paymentDate);
  return rentDate.isBefore(today);
};

export default PaymentItem;
