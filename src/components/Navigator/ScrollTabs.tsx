import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useTheme from "../../common/hooks/useTheme";

const mockList: { id: string; name: string }[] = [];
for (let i = 0; i < 30; i++) {
  const names = [
    "John",
    "Lisa",
    "Mark",
    "Sarah",
    "William",
    "Samantha",
    "Alexander",
    "KatherineKatherine",
    "BenjaminBenjamin",
    "ElizabethElizabethElizabethElizabeth",
  ];
  mockList.push({
    id: "tab" + i,
    name: names[Math.floor(Math.random() * names.length)],
  });
}

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

let scrollbarTimer: number | null = null;

const ScrollTabs = () => {
  const { isDarkMode } = useTheme();
  const [list, setList] = useState(mockList);
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
    const container = event.currentTarget;
    const delta = Math.sign(event.nativeEvent.deltaY);
    container.scrollLeft += delta * 100;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    setList(reorder(list, result.source.index, result.destination.index));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={
              "h-full flex flex-row items-center overflow-x-auto mini-scrollbar" +
              (isShowScrollBar ? " mini-scrollbar-show" : "")
            }
            onWheel={handleWheel}
            onScroll={showScrollBar}
          >
            {list.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={provided.draggableProps.style}
                    className={
                      "mx-0.5 px-2 py-1.5 truncate shrink-0 max-w-[10rem] cursor-pointer select-none " +
                      (isDarkMode ? "bg-[#404854] " : "bg-[#F6F7F9] ") +
                      (snapshot.isDragging ? "opacity-80" : "")
                    }
                  >
                    {item.name}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ScrollTabs;
