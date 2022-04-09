import SwitchPanel from "./SwitchPanel";

import { SwitchPanelSideEffect } from "./switchPanelSideEffect";

const SwitchPanelContainer = () => {
  const { categoryFromUrl, categories, api_category } = SwitchPanelSideEffect();

  return (
    <SwitchPanel
      categories={categories}
      categoryFromUrl={categoryFromUrl}
      api_category={api_category}
    />
  );
};

export default SwitchPanelContainer;
