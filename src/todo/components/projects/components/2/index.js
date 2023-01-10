import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {Dustbin} from "./Dustbin";
import {dataMocks} from "../../../../../moks/mocksTodo";
import update from "immutability-helper";
import {useState} from "react";

export default function App() {
  const [cards, setCards] = useState(dataMocks)
  const moveCard = (dragIndex, hoverIndex) => {
    console.log('moveCard')
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    )
  }
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        {
          cards.map(board => {
            return (
              <Dustbin
                key={board.id}
                title={board.title}
                cards={board.items}
                moveCard={moveCard}
              />
            )
          })
        }
      </DndProvider>
    </div>
  )
}
