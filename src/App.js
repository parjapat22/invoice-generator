import React from "react";
import InvoicePage from "./components/InvoicePage";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <InvoicePage />
    </div>
  );
}

export default App;