import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import ScrollTabs from "./ScrollTabs";
import './index.css'

const Navigator = () => {

  return (
    <div className="bp5-navbar flex items-center">
      <div className="h-full w-24 border">
        <LeftContent />
      </div>
      <div className="h-full flex-1 overflow-hidden">
        <ScrollTabs />
      </div>
      <div className="h-full w-36 border">
        <RightContent />
      </div>
    </div>
  );
};

export default Navigator;
