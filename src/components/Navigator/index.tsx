import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import ScrollTabs from "./ScrollTabs";
import "./index.css";

const Navigator = () => {
  return (
    <div className="bp5-navbar flex items-center" style={{ padding: 0, height: '2.5rem' }}>
      <div className="h-full w-24 bg-slate-400 opacity-50">
        <LeftContent />
      </div>
      <div className="h-full flex-1 overflow-hidden">
        <ScrollTabs />
      </div>
      <div className="h-full w-24 bg-slate-400 opacity-50">
        <RightContent />
      </div>
    </div>
  );
};

export default Navigator;
