import React, { ComponentType, FC, useEffect, useState } from "react";

const SearchHoc = <P extends object>(
  WrappedComponent: ComponentType<P>,
  entity: string,
  className: string
): FC<P> => {
  const EnhancedComponent: FC<P> = (props) => {
    const [data, setData] = useState<any[]>([]);
    const [userSearchData, setUserSearchData] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        setData(json);
      };
      fetchData();
    }, []);

    const filteredData = data.slice(0, 10).filter((filteredData: any) => {
      if (entity === "users") {
        const { name } = filteredData;
        return name.toLowerCase().match(userSearchData.toLowerCase());
      }

      if (entity === "todos") {
        const { title } = filteredData;
        return title.toLowerCase().match(userSearchData.toLowerCase());
      }
      return false;
    });

    return (
      <div className={className}>
        <h2>{entity}</h2>
        <input
          type="text"
          onChange={(e) => setUserSearchData(e.target.value)}
        />
        <WrappedComponent {...props} data={filteredData} />
      </div>
    );
  };

  return EnhancedComponent;
};

export default SearchHoc;
