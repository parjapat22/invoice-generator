import React from "react";
import InvoiceForm from "./InvoiceForm";
import styles from "./InvoicePage.module.css";
import logo from "../logo.png";

const InvoicePage = () => {

  return (
    <div>
      {/* section 1 */}
      <div class={styles.flexContainer}>
        {/* column 1 */}
        <div style={{ width: "50%" }}>
          <img src={logo} height={130} width={200} alt=" company logo" />
        </div>

        {/* column 2 */}
        <div style={{ width: "50%" }}>
          <p>Tax Invoice</p>
          <p>
            <label for="invoiceNum">Invoice Number: </label>
            <input className={styles.inputField1} type="number" id="invoiceNum" name="invoiceNum" min="1" placeholder="invoice number" />
          </p>

          <p>
            <label for="invoiceDate">Invoice Date: </label>
            <input className={styles.inputField1} type="date" id="invoiceDate" name="invoiceDate" placeholder="invoice date" />
          </p>
        </div>
      </div>

      {/* section 2 */}
      <div class={styles.flexContainer}>
        {/* column 1 */}
        <div style={{ width: "50%" }}>
          <p>4/71 Kremzow Road</p>
          <p>Brendale, QLD, 4500</p>
          <p>ABN: 15 644 672 828</p>
        </div>

        {/* column 2 */}
        <div style={{ width: "50%" }}>
          <p>Workshop: 0466 232 206</p>
          <p>Bagi: 0435 267 495</p>
          <p>Hary: 0412 999 187</p>
          <p>Email: admin@highendautocare.com.au</p>
        </div>
      </div>

      {/* section 3 */}
      <fieldset>
        <legend>To:</legend>
        <div class={styles.flexContainer}>
          {/* column 1 */}
          <div style={{ width: "50%" }}>
            <textarea rows="6" cols="35" name="message" placeholder="customer details">
            </textarea>

            <p>
              <label for="mobile">Mobile: </label>
              <input className={styles.inputField1} type="text" id="mobile" name="mobile" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
            </p>
          </div>

          {/* column 2 */}
          <div style={{ width: "50%" }}>
            <p>
              <label for="make">Make: </label>
              <input className={styles.inputField1} type="text" id="make" name="make" placeholder="vehicle make" />
            </p>

            <p>
              <label for="model">Model: </label>
              <input className={styles.inputField1} type="text" id="model" name="model" placeholder="vehicle model" />
            </p>

            <p>
              <label for="rego">Rego: </label>
              <input className={styles.inputField1} type="text" id="rego" name="rego" placeholder="vehicle rego" />
            </p>

            <p>
              <label for="odometer">Odometer: </label>
              <input className={styles.inputField1} type="number" id="odometer" name="odometer" placeholder="vehicle odometer" />
            </p>
          </div>
        </div>
      </fieldset>

      <div>
        <InvoiceForm />
      </div>
    </div >
  );
}

export default InvoicePage;