// TODO:Not-Done Yet

interface IInput {
  formField: boolean;
  fieldType?:
    | "idCard"
    | "phoneNumber"
    | "name"
    | "email"
    | "cardNumber"
    | "accNumber"
    | "shabaNumber";
}

const Input: React.FC<IInput> = ({ formField }) => {
  const base = "rounded-md border p-2";

  const phoneNumberRegex = /^0\d{10}$/;
  const IDCardRegex = /^\d{10}$/;

  return (
    <input
      className={`${base} ${
        formField ? "border-black/50 h-10" : "border-black/25 h-14"
      }`}
      type="text"
    />
  );
};

export default Input;
