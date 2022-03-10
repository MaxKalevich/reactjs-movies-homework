import SwitchPanel from "./SwitchPanel";

import { SwitchPanelSideEffect } from "./switchPanelSideEffect";

const SwitchPanelContainer = () => {
  const { categoryFromUrl, categories } = SwitchPanelSideEffect();

  return (
    <SwitchPanel categories={categories} categoryFromUrl={categoryFromUrl} />
  );
};

export default SwitchPanelContainer;
