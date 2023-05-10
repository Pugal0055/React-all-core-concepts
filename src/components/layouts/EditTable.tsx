import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop: React.FC<{ closeModel: any }> = (props) => {
  return <div className={classes["backdrop"]} onClick={props.closeModel}></div>;
};

const EditTabelModal = (props: any) => {
  const submitHandler = (e: any) => {
    e.preventDefault();

    if (props.entity === "productTable") {
      props.updateValue({
        id: props.inputList.id.toString(),
        brand: props.brand.current.value,
        title: props.title.current.value,
        price: props.price.current.value,
      });
    }

    if (props.entity === "userTable") {
      props.updateValue({
        id: props.inputList.id.toString(),
        firstname: props.brand.current.value,
        gender: props.title.current.value,
        eyecolor: props.price.current.value,
      });
    }

    props.closeModel();
  };
  console.log(props.entity);
  return (
    <form onSubmit={submitHandler} className={classes["card"]}>
      {props.entity === "productTable" && (
        <>
          <div className={classes["edit__container"]}>
            <label>Brand</label>
            <input
              type="text"
              defaultValue={props.inputList.brand}
              ref={props.brand}
            ></input>
          </div>
          <div className={classes["edit__container"]}>
            <label>Title</label>
            <input
              type="text"
              defaultValue={props.inputList.title}
              ref={props.title}
            ></input>
          </div>
          <div className={classes["edit__container"]}>
            <label>Price</label>
            <input
              type="text"
              defaultValue={props.inputList.price}
              ref={props.price}
            ></input>
          </div>
        </>
      )}
      {props.entity === "userTable" && (
        <>
          <div className={classes["edit__container"]}>
            <label>Firstname</label>
            <input
              type="text"
              defaultValue={props.inputList.firstName}
              ref={props.brand}
            ></input>
          </div>
          <div className={classes["edit__container"]}>
            <label>Gender</label>
            <input
              type="text"
              defaultValue={props.inputList.gender}
              ref={props.title}
            ></input>
          </div>
          <div className={classes["edit__container"]}>
            <label>Eyecolor</label>
            <input
              type="text"
              defaultValue={props.inputList.eyeColor}
              ref={props.price}
            ></input>
          </div>
        </>
      )}

      <button type="submit">save</button>
    </form>
  );
};

const EditTabel: React.FC<{
  tableList: any;
  closeModel: any;
  updateValue: any;
  entity: string;
}> = (props) => {
  const brand = useRef<any>();
  const title = useRef<any>();
  const price = useRef<any>();

  // console.log(props.entity);

  const backdropRoot = document.getElementById("backdrop-root");
  if (!backdropRoot) {
    return null;
  }

  const editTableModal = document.getElementById("edit__modal-root");
  if (!editTableModal) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModel={props.closeModel} />,
        backdropRoot
      )}
      {ReactDOM.createPortal(
        <EditTabelModal
          inputList={props.tableList}
          brand={brand}
          title={title}
          price={price}
          updateValue={props.updateValue}
          closeModel={props.closeModel}
          entity={props.entity}
        />,
        editTableModal
      )}
    </>
  );
};

export default EditTabel;
