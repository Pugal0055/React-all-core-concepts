import React, { useEffect, useState } from "react";

import TableHoc from "../../components/hoc/Table/TableHoc";
import classes from "./Table.module.css";

import EditTable from "../../components/layouts/EditTable";
import DeleteTable from "../../components/layouts/DeleteTable";

const title = ["no", "brand", "title", "price", "edit/delete"];

const Table: React.FC = ({
  editTableList,
  closeModelHandler,
  updateValue,
  showModel,
  showDeleteModel,
  deleteItem,
}: any) => {
  return (
    <>
      {showModel && (
        <EditTable
          tableList={editTableList}
          closeModel={closeModelHandler}
          updateValue={updateValue}
          entity="productTable"
        ></EditTable>
      )}
      {showDeleteModel && (
        <DeleteTable
          deleteItem={deleteItem}
          closeModel={closeModelHandler}
          tableList={editTableList}
        ></DeleteTable>
      )}
    </>
  );
};

const ProductTable = TableHoc(
  Table,
  title,
  "products",
  classes["product-title"]
);

export default ProductTable;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import { useEffect, useState } from "react";

// import TableHoc from "../../components/hoc/Table/TableHoc";

// const title = ["no", "brand", "title", "price"];

// const Table = () => {
//   const [products, setProdcuts] = useState<any>([]);
//   const title = ["no", "brand", "title", "price"];

//   useEffect(() => {
//     const getProducts = async () => {
//       const res = await fetch("https://dummyjson.com/products");
//       const data = await res.json();
//       setProdcuts(data.products);
//     };
//     getProducts();
//   }, []);

//   const renderProductTitle = title.map((title: string, index: number) => {
//     return <th key={index}>{title.toUpperCase()}</th>;
//   });

//   const renderProductList = products.map((product: any, index: number) => {
//     return (
//       <tr key={index}>
//         {title.map((title: any, childIndex: number) => (
//           <td key={childIndex}>
//             {product[title]} {title === "no" && product.id}
//           </td>
//         ))}
//       </tr>
//     );
//   });

//   return (
//     <table>
//       <thead>
//         <tr>{renderProductTitle}</tr>
//       </thead>
//       <tbody>{renderProductList}</tbody>
//     </table>
//   );
// };

// export default Table;

// setTitle(Object.keys(data.products[0]));
