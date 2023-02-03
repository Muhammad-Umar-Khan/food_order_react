import { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import "./MealItemForm.css";

const MealItemForm = (props) => {
  const [amounIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const entredAmount = amountInputRef.current.value;
    const entredAmountNumber = +entredAmount;
    if (
      entredAmount.trim().length === 0 ||
      entredAmountNumber < 1 ||
      entredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(entredAmountNumber)
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amounIsValid && <p>Please enter a valid number(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
