import Head from "next/head";
import PaymentList from "../components/PaymentList";
import Modal from "../components/Modal";
import { Payment } from "../pages/data/payment";
import { server } from "../config/index";
import { useState } from "react";

export default function Index({ paymentList }) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('Please Wait...');
  const [payments, setPayments] = useState(paymentList);
  

  const onPay = async (payment: Payment) => {
    try {
      setShowModal(true);
      setModalContent('Please wait...');
      const res = await fetch(`${server}/api/payments/${payment.id}/pay`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (res.status === 204) {
        // The result of the PATCH call should be used to then update the status of that transaction in the list that is displayed to the user.
        let updatedData = await fetchData();
        setPayments(updatedData);
        setModalContent('Your transaction has been successfull!');
      }
      
      if (res.status === 402) {
        // error scenario for payments over $1,000
        let data = await res.json();
        setModalContent(data.message);
        console.warn("Warning", data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>LandlordStudio recruitment test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PaymentList
        paymentList={payments}
        onPayHandler={(payment: Payment) => onPay(payment)}
      />
      <Modal
        show={showModal}
        noSubmitAction={true}
        onSubmit={() => {
          setShowModal(false)
          setModalContent('');
        }}
        onClose={() => {
          setShowModal(false);
          setModalContent('');
        }}
      >
        <div className="text_lg text_thin text-center p-3">
          {modalContent}
        </div>
      </Modal>
    </>
  );
}

export const fetchData = async () => {
  const res = await fetch(`${server}/api/payments`);
  let data: Payment[] = await res.json();
  data = sortData(data);
  return data;
};

export const sortData = (payments: Payment[]): Payment[] => {
  let sortedPayments: Payment[] = [];
  if (payments && payments.length > 0) {
    sortedPayments = payments.sort((a: Payment, b: Payment) => {
      let dateA = new Date(a.dueDate).getTime();
      let dateB = new Date(b.dueDate).getTime();
      return dateA > dateB ? 1 : -1;
    });
  }
  return sortedPayments;
};

export const getServerSideProps = async () => {
  let data = await fetchData();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      paymentList: data,
    },
  };
};
