import React from "react";

const HocJs = (WrappedComponent, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      userSearchData: "",
    };

    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        this.setState({ ...this.state, data: json });
      };

      fetchData();
    }

    render() {
      const { data, userSearchData } = this.state;

      const filteredData = data.filter((filteredData) => {
        if (entity === "users") {
          const { name } = filteredData;
          return name.toLowerCase().match(userSearchData.toLowerCase());
        }

        if (entity === "todos") {
          const { title } = filteredData;
          return title.toLowerCase().match(userSearchData.toLowerCase());
        }
      });
      return (
        <div>
          <h2>{entity}</h2>
          <input
            type="text"
            onChange={(e) =>
              this.setState({ ...this.state, userSearchData: e.target.value })
            }
          />
          <WrappedComponent data={filteredData} />
        </div>
      );
    }
  };
};

export default HocJs;
