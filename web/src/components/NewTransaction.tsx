import { useForm } from "react-hook-form";
import { PrimaryButton } from "./Button";
import { Input } from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "../schemas/NewTransaction";
import { createTransaction } from "../services/transactions";

interface ModalProps {
  maxWidth?: number;
  handleClick?: () => void;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const NewTransaction = ({ maxWidth, setOpen }: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(transactionSchema),
  });
  function handleClose() {
    if (setOpen) {
      setOpen(false);
    }
  }

  async function handleSubmitForm(data: any) {
    try {
      const body = { ...data, type: "output" };
      await createTransaction(body);
      setOpen && setOpen(false);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        className={`w-[100%] max-w-[${maxWidth}px] p-12 bg-white rounded-lg flex flex-col gap-3`}
      >
        New Transaction
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            type="number"
            name="value"
            register={register("value")}
            placeholder="Valor"
          />
          {errors.value && <span> {`${errors.value.message}`} </span>}

          <Input
            type="text"
            name="description"
            register={register("description")}
            placeholder="Description"
          />
          {errors.description && (
            <span> {`${errors.description.message}`} </span>
          )}

          <PrimaryButton text="Send" type="submit" />
          <PrimaryButton
            text="Cancel"
            type="button"
            handleClick={handleClose}
          />
        </form>
      </div>
    </div>
  );
};

export default NewTransaction;
