import classes from "./Table.module.css";
import UserTable from "./UserTable";
import ProductTable from "./ProductTable";

const Index: React.FC = () => {
  return (
    <div className={classes["table-Conatainer"]}>
      <ProductTable />
      <UserTable />
    </div>
  );
};

export default Index;
