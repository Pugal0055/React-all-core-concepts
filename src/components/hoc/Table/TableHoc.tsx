import { FC, ComponentType, useState, useEffect } from "react";

import classes from "src/pages/TableHoc/Table.module.css";

const TableHoc = <P extends object>(
  WrappedComponent: ComponentType<P>,
  title: Array<string>,
  entity: string,
  className: string
  // showModelHandler: any
): FC<P> => {
  const EnhancedComponent: FC<P> = (props) => {
    const [showModel, setShowModel] = useState(false);
    const [showDeleteModel, setShowDeleteModel] = useState(false);

    // Edit Table Data
    const [editList, setEditList] = useState<any>(null);
    // const [editDataId, setEditDataId] = useState<any>(null);

    // Table List
    const [tableList, setTableList] = useState<any>([]);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(5);
    const [currentItem, setCurrentItem] = useState<any>([]);

    const [sortColumn, setSortColumn] = useState<boolean>(false);
    const pageNumber: any = [];

    if (tableList) {
      for (let i = 1; i <= Math.ceil(tableList.length / 5); i++) {
        pageNumber.push(i);
      }
    }

    let nextPage = currentPage * itemPerPage;

    const prevPage = nextPage - itemPerPage;

    const pageNumberHandler = (pageNumber: any) => {
      setCurrentPage(pageNumber);
    };

    const prevPageHandler = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
    const nextPageHandler = () => {
      if (currentPage < 6) {
        setCurrentPage(currentPage + 1);
      }
    };

    //Sorting
    const sortHandler = () => {
      if (!sortColumn) {
        currentItem.sort((a: any, b: any) => b.id - a.id);
        console.log("if");
        setSortColumn(true);
      } else {
        currentItem.sort((a: any, b: any) => a.id - b.id);
        setSortColumn(false);
        console.log("else");
      }
    };

    // Edit Table
    const editHandler = (editTableList: any) => {
      setEditList(editTableList);
      setShowModel(true);
      console.log("update");
    };

    const closeModelHandler = () => {
      setShowModel(false);
      setShowDeleteModel(false);
      console.log("close");
    };

    const updateValue = async (modifyData: any) => {
      const res = await fetch(
        `https://dummyjson.com/${entity}/${modifyData.id}`,
        {
          method: "PUT" /* or PATCH */,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(modifyData),
        }
      );
      getProducts();
      // const data = await res.json();
      // setTableList(data[entity]);
    };

    // Delete user
    const deleteHandler = (deleteItem: any) => {
      setEditList(deleteItem);
      setShowDeleteModel(true);
    };

    const deleteItem = (deleteData: any) => {
      const res = fetch(`https://dummyjson.com/products/${deleteData.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(console.log);
      getProducts();
      closeModelHandler();
    };

    // This Wrapped component used to perfrom update and delete api

    const originalComponent = (
      <WrappedComponent
        {...props}
        closeModelHandler={closeModelHandler}
        updateValue={updateValue}
        deleteItem={deleteItem}
        editTableList={editList}
        showModel={showModel}
        showDeleteModel={showDeleteModel}
      ></WrappedComponent>
    );

    // Help to Display current Page Items
    useEffect(() => {
      setCurrentItem(tableList.slice(prevPage, nextPage));
      setSortColumn(false);
    }, [tableList, currentPage]);

    // Help to Fetch data from the Api
    const getProducts = async () => {
      const res = await fetch(`https://dummyjson.com/${entity}`);
      const data = await res.json();
      setTableList(data[entity]);
    };
    useEffect(() => {
      getProducts();
    }, [setCurrentPage]);

    // Help to Display Table header to the page.
    const renderProductTitle = title.map((title: string, index: number) => {
      return <th key={index}>{title.toUpperCase()}</th>;
    });

    // Help to Display Table list to the page.
    const renderProductList =
      currentItem &&
      currentItem.map((product: any, index: number) => {
        return (
          <tr key={index}>
            {title.map((title: any, childIndex: number) => (
              <td key={childIndex}>
                <span>
                  {product[title]} {title === "no" && product.id}{" "}
                </span>
                {title === "edit/delete" && (
                  <span
                    onClick={() => {
                      editHandler(product);
                    }}
                    className={`material-icons-outlined ${classes.edit}`}
                  >
                    edit
                  </span>
                )}
                {title === "edit/delete" && (
                  <span
                    onClick={() => {
                      deleteHandler(product);
                    }}
                    className={`material-icons-outlined ${classes.delete}`}
                  >
                    delete
                  </span>
                )}
              </td>
            ))}
          </tr>
        );
      });

    // Display Items - 1. Sorting - 2. Table header and list - 3. Pagination

    return (
      <div className={className}>
        <button onClick={sortHandler}>sort</button>
        <table>
          <thead>
            <tr>{renderProductTitle}</tr>
          </thead>
          <tbody>{renderProductList}</tbody>
        </table>
        <div>
          <nav className={classes["pagination"]}>
            <span
              className="material-symbols-outlined"
              onClick={prevPageHandler}
            >
              arrow_back_ios_new
            </span>

            <div id="pagination-numbers">
              <ul>
                {pageNumber.map((number: any) => (
                  <li
                    key={number}
                    onClick={() => {
                      pageNumberHandler(number);
                    }}
                    // className={`${activeClass ? "primary" : ""}`}
                    // onClick={active}
                  >
                    {number}
                  </li>
                ))}
              </ul>
            </div>
            <span
              className="material-symbols-outlined"
              onClick={nextPageHandler}
            >
              arrow_forward_ios
            </span>
          </nav>
        </div>

        {originalComponent}
      </div>
    );
  };

  return EnhancedComponent;
};

export default TableHoc;
