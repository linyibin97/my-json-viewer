import { useState } from "react";

const Tab = (props: { title: string }) => {
  const { title } = props;
  return (
    <div className="mx-1 px-2 py-2 truncate shrink-0 max-w-[8rem] cursor-pointer h-full select-none">
      {title}
    </div>
  );
};

let scrollbarTimer: number | null = null;

const ScrollTabs = () => {
  const [isShowScrollBar, setIsShowScrollbar] = useState<boolean>(false);

  const showScrollBar = () => {
    if (scrollbarTimer) {
      clearTimeout(scrollbarTimer);
    } else {
      setIsShowScrollbar(true);
    }
    scrollbarTimer = setTimeout(() => {
      setIsShowScrollbar(false);
      scrollbarTimer = null;
    }, 500);
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    showScrollBar()
    const container = event.currentTarget;
    const delta = Math.sign(event.nativeEvent.deltaY);
    container.scrollLeft += delta * 100;
  };

  return (
    <div
      className={
        "h-full flex flex-row items-center overflow-x-auto mini-scrollbar" +
        (isShowScrollBar ? " mini-scrollbar-show" : "")
      }
      onWheel={handleWheel}
    >
      {new Array(20).fill(null).map((_, index) => (
        <Tab title={`Untitled-${index}.json`} key={index}/>
      ))}
    </div>
  );
};

export default ScrollTabs;
