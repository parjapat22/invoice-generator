import React from "react";
import styles from "./FormRow.module.css";

const FormRow = () => {

  return (
    <tr>
      <td><input className={styles.inputField1} type="number" id="qty" name="qty" min="1" placeholder="qty" /></td>
      <td><input className={styles.inputField1} type="text" id="descrip" name="descrip" placeholder="description" /></td>
      <td><input className={styles.inputField1} type="number" id="uPrice" name="uPrice" placeholder="unit price" /></td>
      <td><input className={styles.inputField1} type="number" id="amount" name="amount" placeholder="amount" /></td>
    </tr>
  );
}

export default FormRow;