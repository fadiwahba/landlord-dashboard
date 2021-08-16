import styles from "../../styles/PaymentItem.module.css";
import dayjs from "dayjs";
import { Payment } from "../pages/data/payment";
import { useState } from "react";
import Modal from "./Modal";

const PaymentItem = ({ paymentItem, onPayHandler }) => {
  const [showModal, setShowModal] = useState(false);

  const onPayClick = (payment: Payment) => {
    setShowModal(true);
  };

  const onCloseModalHandler = () => {
    setShowModal(false);
  };

  const onSubmitModalHandler = (payment: Payment) => {
    setShowModal(false);
    onPayHandler(payment);
  };

  const centsToUSD = (amount: number): string | undefined => {
    if (amount) {
      let amountInDollars: number = amount / 100;
      let dollars: string = amountInDollars.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
      return dollars;
    }
  };

  const formatDate = (date: Date): string | undefined => {
    let shortDate;
    if (date) {
      return (shortDate = dayjs(date).format("MMM DD"));
    }
  };

  const getPaymentStatus = (payment: Payment): string | undefined => {
    if (payment) {
      if (isOverDuePayment(payment.dueDate) && payment.status === "Unpaid") {
        return "Overdue";
      }
      if (payment.status === "Paid") {
        return "Paid";
      }
      if (payment.status === "Unpaid") {
        return "";
      }
    }
  };

  const isOverDuePayment = (paymentDate: Date): boolean => {
    const today = dayjs(new Date());
    const rentDate = dayjs(paymentDate);
    return rentDate.isBefore(today);
  };

  return (
    <>
      <tr>
        <td width="10%">
          <div className={styles.due_date}>{formatDate(paymentItem.dueDate)}</div>
        </td>
        <td width="60%">
          <div className={styles.content}>
            <div className={styles.category}>
              {paymentItem.category}
            </div>
            <div className={styles.description}>
              {paymentItem.description}
            </div>
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
          {paymentItem.status === "Unpaid" ||
          paymentItem.status === "Overdue" ? (
            <div>
              <button
                onClick={() => onPayClick(paymentItem)}
                className="btn btn_primary"
              >
                Pay
              </button>
            </div>
          ) : null}
        </td>
      </tr>
      <Modal
        show={showModal}
        submitLabel="Pay Now"
        onSubmit={() => onSubmitModalHandler(paymentItem)}
        onClose={() => onCloseModalHandler()}
      >
        <div className={styles.modal_pre_content}>
          <h2 className="text_thin">{paymentItem.description}</h2>
          <div className={styles.flex_space_between}>
            <div className={styles.modal_amount}>{formatDate(paymentItem.dueDate)} Rent</div>
            <div className={styles.modal_amount_value}>
              {centsToUSD(paymentItem.amount)}
            </div>
          </div>
        </div>
        <div className={styles.modal_content}>
          <div className={styles.flex_space_between}>
            <div className={styles.modal_total_amount}>Total Today</div>
            <div className={styles.modal_total_amount_value}>
              {centsToUSD(paymentItem.amount)}
            </div>
          </div>
          <div className={styles.text_center_gray}>
            Your account ending 1234 will be charged
          </div>
          <div className={styles.modal_disclaimer}>
            By clicking Pay Now, I hereby authorize you to Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Perspiciatis temporibus hic
            ipsa reprehenderit, vitae debitis, harum voluptas commodi vero iusto
            aliquam doloribus corporis eveniet sint, natus iste magni animi.
            Accusamus!
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PaymentItem;
