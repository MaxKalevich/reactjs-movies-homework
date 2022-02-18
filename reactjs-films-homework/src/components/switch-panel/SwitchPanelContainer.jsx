import SwitchPanel from "./SwitchPanel";
import { SwitchPanelSideEffect } from "./switchPanelSideEffect";

const SwitchPanelContainer = () => {
  const { category, categories } = SwitchPanelSideEffect();
  return <SwitchPanel category={category} categories={categories} />;
};

export default SwitchPanelContainer;
