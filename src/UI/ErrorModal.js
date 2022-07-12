import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "../components/Button";
import "./ErrorModal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onConfirm={props.onConfirm} />;
};

const Modal = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button className="button" onClick={props.onConfirm}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop props={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("modal-root")
      )}
    </div>
  );
};

export default ErrorModal;
