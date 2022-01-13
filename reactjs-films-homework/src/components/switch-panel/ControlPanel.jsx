import "./switch-panel-style.scss";

const SwitchPanel = () => {
  return (
    <div className="switch-wrapper">
      <ul className="switch-wrapper__item-list">
        <li>Popular</li>
        <li>Top Rated</li>
        <li>Upcoming</li>
      </ul>
    </div>
  );
};

export default SwitchPanel;
