import TableHoc from "../../components/hoc/Table/TableHoc";

import classes from "./Table.module.css";
import EditTable from "../../components/layouts/EditTable";
import DeleteTable from "../../components/layouts/DeleteTable";
const title = ["no", "firstName", "gender", "eyeColor", "edit/delete"];

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
          entity="userTable"
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

const UserTable = TableHoc(Table, title, "users", classes["user-title"]);

export default UserTable;

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

// setTitle(Object.keys(data.products[0]));

// import { useEffect, useState } from "react";
// import classes from "./Table.module.css";

// const UserTable = () => {
//   const [products, setProdcuts] = useState<any>([]);
//   const title = ["no", "firstName", "gender", "address"];

//   useEffect(() => {
//     const getProducts = async () => {
//       const res = await fetch("https://dummyjson.com/users");
//       const data = await res.json();
//       setProdcuts(data.users);
//       console.log(data);
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
//             {title !== "address" && product[title]}{" "}
//             {title === "no" && product.id}{" "}
//             {title === "address" && product.address.city}
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

// export default UserTable;

// // setTitle(Object.keys(data.products[0]));
