import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import ScrollTabs from "./ScrollTabs";
import "./index.less";

const Navigator = () => {
  return (
    <div className="bp5-navbar nav-bar" style={{ padding: 0, height: '2.5rem' }}>
      <div className="bp5-card nav-content">
        <LeftContent />
      </div>
      <div className="nav-tabs-wrapper">
        <ScrollTabs />
      </div>
      <div className="bp5-card nav-content">
        <RightContent />
      </div>
    </div>
  );
};

export default Navigator;
