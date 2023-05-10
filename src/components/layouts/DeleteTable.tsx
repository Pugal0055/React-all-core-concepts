import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop: React.FC<{ closeModel: any }> = (props) => {
  return <div className={classes["backdrop"]} onClick={props.closeModel}></div>;
};

const DeleteItem = (props: any) => {
  return (
    <div className={classes["card"]}>
      <h1>Delete Item</h1>

      <span>Are you sure you want to delete this item</span>

      <div className={classes["delete__container"]}>
        <button
          onClick={() => {
            props.deleteItem(props.item);
          }}
        >
          Yes
        </button>
        <button onClick={props.closeModel}>Cancel</button>
      </div>
    </div>
  );
};

const DeleteTable: React.FC<{
  closeModel: any;
  deleteItem: any;
  tableList: any;
}> = (props) => {
  const backdropRoot = document.getElementById("backdrop-root");
  if (!backdropRoot) {
    return null;
  }

  const deleteItem = document.getElementById("delete__modal-root");

  if (!deleteItem) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModel={props.closeModel} />,
        backdropRoot
      )}
      {ReactDOM.createPortal(
        <DeleteItem
          closeModel={props.closeModel}
          deleteItem={props.deleteItem}
          item={props.tableList}
        />,
        deleteItem
      )}
    </>
  );
};

export default DeleteTable;
