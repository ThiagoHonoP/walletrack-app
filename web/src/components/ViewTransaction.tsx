import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTransactionById } from "../services/transactions";
import { PrimaryButton } from "./Button";

interface ModalProps {
  maxWidth?: number;
  children?: React.ReactNode;
}

interface TransactionFields {
  _id: string;
  value: number;
  description: string;
  type: string;
}

const ViewTransaction = ({ maxWidth }: ModalProps) => {
  let navigate = useNavigate();
  let { id } = useParams<"id">();
  const [data, setData] = useState<TransactionFields>({
    _id: "",
    value: 0,
    description: "",
    type: "",
  });

  function onDismiss() {
    navigate(-1);
  }

  async function getTransaction() {
    try {
      const response = await getTransactionById(id as string);
      setData(response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        className={`w-[100%] max-w-[${maxWidth}px] p-12 bg-white rounded-lg flex flex-col gap-3`}
      >
        <p>I am a modal!</p>
        <p> id: {data._id}</p>
        <p> Value: {data.value}</p>
        <p> Description: {data.description}</p>
        <p> Tipo: {data.type}</p>
        <PrimaryButton text="Close" type="button" handleClick={onDismiss} />
      </div>
    </div>
  );
};

export default ViewTransaction;
