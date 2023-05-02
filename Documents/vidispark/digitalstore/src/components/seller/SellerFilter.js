import NiceSelect from "../NiceSelect";

const SellerFilter = ({
  setFilter_,
  setFilteredData,
  getProductByFilter,
  setActive,
  filter_,
  creators,
}) => {
  const onChnage = (name, value) => {
    setFilter_({ ...filter_, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setFilteredData(getProductByFilter(creators, filter_));
    setActive(0);
  };
  return (
    <div className="filterable-bar">
      <form id="creators-filter-form" onSubmit={(e) => onSubmit(e)}>
        <div className="filter-options">
          <NiceSelect
            arr={[
              { name: "Order by Name (A-Z)", value: "" },
              { name: "Order by Last Modification", value: "modification" },
              { name: "Order by Registration Date", value: "registration" },
            ]}
            ChangeFilterData={(name, value) => onChnage(name, value)}
            name={"order"}
          />

          <NiceSelect
            arr={[
              { name: " Verified Creators Only", value: true },
              { name: "All Creators", value: "" },
            ]}
            ChangeFilterData={(name, value) => onChnage(name, value)}
            name={"verified"}
          />
          <NiceSelect
            arr={[
              { name: " Creators with Active Auctions", value: true },
              { name: "All Creators", value: "" },
            ]}
            ChangeFilterData={(name, value) => onChnage(name, value)}
            name={"auction"}
          />
        </div>
        <div className="filter-button">
          <button className="btn btn-normal btn-dark">Filter</button>
        </div>
      </form>
    </div>
  );
};
export default SellerFilter;
