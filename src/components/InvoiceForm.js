import React from "react";
import FormRow from "./FormRow";
import styles from "./InvoiceForm.module.css";

const InvoiceForm = () => {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>Qty</th>
            <th style={{ width: "60%" }}>Description</th>
            <th style={{ width: "15%" }}>Unit Price</th>
            <th style={{ width: "15%" }}>Amount</th>
          </tr>
        </thead>

        <tbody>
          <FormRow />
        </tbody>
      </table>

      <div>
        <button className={styles.button1} type="button">Add</button>
        <button className={styles.button1} type="button">Remove</button>
      </div>
    </div>
  );
}

export default InvoiceForm;