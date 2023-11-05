const ScrollTabs = () => {
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    console.log(event);
    const container = event.currentTarget;
    const delta = Math.sign(event.nativeEvent.deltaY);
    container.scrollLeft += delta * 100; // 控制滚动速度
    event.preventDefault(); // 阻止页面滚动
  };

  return (
    <div
      className="h-full flex flex-row items-center overflow-x-auto hide-scrollbar"
      onWheel={handleWheel}
    >
      {new Array(20).fill(null).map((_, index) => (
        <div key={index} className="mx-2">{`${index}.JSON`}</div>
      ))}
    </div>
  );
};

export default ScrollTabs;
