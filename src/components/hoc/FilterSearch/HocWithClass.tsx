import React from "react";

const HocWithClass = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  entity: string,
  className: string
) => {
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
        this.setState({ data: json });
      };

      fetchData();
    }

    render() {
      const { data, userSearchData } = this.state;

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
            onChange={(e) =>
              this.setState({ ...this.state, userSearchData: e.target.value })
            }
          />
          <WrappedComponent {...(this.props as P)} data={filteredData} />
        </div>
      );
    }
  };
};

export default HocWithClass;
