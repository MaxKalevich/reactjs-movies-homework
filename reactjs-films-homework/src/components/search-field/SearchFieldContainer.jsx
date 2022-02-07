import SearchField from "./SearchField";
import { useSelector } from "react-redux";
import { setSearchData } from "../../store/reducers/mainPageSlice";

const SearchFieldContainer = () => {
  const { search } = useSelector((state) => state.mainPageSlice);
  return <SearchField search={search} setSearchData={setSearchData} />;
};

export default SearchFieldContainer;
