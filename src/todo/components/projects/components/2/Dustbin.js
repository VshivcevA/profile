import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import {Box} from "./Box";
const style = {
  // height: "12rem",
  // width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
  display: "flex",
  flexDirection: "column",
};
export const Dustbin = ({title, cards,moveCard}) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ title: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
      <p>{isActive ? "Release to drop" : "Drag a box here"}</p>
      <p>{title}</p>
      {
        cards.map((card,index) => {
          return (
            <Box
              key={card.id}
              title={card.title}
              index={index}
              moveCard={moveCard}
            />
          )
        })
      }
    </div>
  );
};
