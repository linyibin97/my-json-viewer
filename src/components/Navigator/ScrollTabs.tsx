import React, { useState } from "react";
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

function getTabItemStyle(props: {
  isDarkMode: boolean;
  isOpened: boolean;
}): React.CSSProperties {
  const { isDarkMode, isOpened } = props;
  let style: React.CSSProperties = {};
  if (isOpened) {
    style = {
      ...style,
      background: isDarkMode ? Colors.DARK_GRAY4 : Colors.LIGHT_GRAY5,
      border: `0.125rem solid ${Colors.BLUE5}`,
    };
  } else {
    style = {
      ...style,
      background: isDarkMode ? Colors.DARK_GRAY5 : Colors.LIGHT_GRAY3,
    };
  }
  return style;
}

let scrollbarTimer: any = null;

const ScrollTabs = () => {
  const { isDarkMode } = useTheme();
  const [list, setList] = useState(mockTabList);
  const [currentId, setCurrentId] = useState<string>(mockTabList[0].id);
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

  const onSelectTab = (id: string) => {
    setCurrentId(id);
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
                      ...getTabItemStyle({
                        isDarkMode,
                        isOpened: item.id === currentId,
                      }),
                    }}
                    className="item"
                    onClick={(e) => {
                      onSelectTab(item.id);
                      e.stopPropagation();
                    }}
                  >
                    <Icon icon="document" size={14}></Icon>
                    <Text className="text">{item.name}</Text>
                    <div
                      onClick={(e) => {
                        onCloseTab(index);
                        e.stopPropagation();
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
