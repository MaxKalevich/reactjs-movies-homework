import SwitchPanel from "./SwitchPanel";
import { useSelector } from "react-redux";

const SwitchPanelContainer = () => {
  const { category, categories } = useSelector((state) => state.mainPageSlice);
  return <SwitchPanel category={category} categories={categories} />;
};

export default SwitchPanelContainer;
