import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableStateSnapshot,
  DraggingStyle,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import useTheme from "@/common/hooks/useTheme";
import { Text, Icon, Colors } from "@blueprintjs/core";
import { mockTabList } from "@/common/utils/mock";

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function getStyle(
  style: DraggingStyle | NotDraggingStyle | undefined,
  snapshot: DraggableStateSnapshot
) {
  if (snapshot.isDropAnimating) {
    return {
      ...style,
      transitionDuration: `0.001s`,
    };
  }
  return style;
}

let scrollbarTimer: any = null;

const ScrollTabs = () => {
  const { isDarkMode } = useTheme();
  const [list, setList] = useState(mockTabList);
  const [currentIndex, setCurrentIndex] = useState<number>(2);
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

  const onCloseTab = (index: number) => {
    const newList = Array.from(list);
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided, _snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={
              "nav-tabs mini-scrollbar" +
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
                    style={{
                      ...getStyle(provided.draggableProps.style, snapshot),
                      background: isDarkMode
                        ? Colors.DARK_GRAY5
                        : Colors.LIGHT_GRAY4,
                    }}
                    className="item"
                  >
                    <Icon icon="document" size={14}></Icon>
                    <Text className="text">{item.name}</Text>
                    <div
                      onClick={() => {
                        onCloseTab(index);
                      }}
                      className="close-button"
                      style={{
                        background: isDarkMode
                          ? Colors.GRAY1
                          : Colors.LIGHT_GRAY2,
                      }}
                    >
                      <Icon icon="small-cross"></Icon>
                    </div>
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
