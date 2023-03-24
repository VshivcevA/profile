import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { Card } from './Card.js'
import Board from "./Board";
import {dataMocks} from "../../../../../../moks/mocksTodo";
const style = {
  width: 400,
  color: 'gray',
}
export const Container = () => {
  // const [boards, setBoards] = useState([
  //   {
  //     id: 1,
  //     title: '1'
  //   },
  //   {
  //     id: 2,
  //     title: '2'
  //   }
  // ])
  const [boards, setBoards] = useState(dataMocks)
  const [cards, setCards] = useState(boards[0].items)
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    )
  }, [])
  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.title}
        moveCard={moveCard}
      />
    )
  }, [moveCard])
  const renderBoard = (board, indexBoard) => {
    return (
      <Board
        key={boards[indexBoard].id}
        index={indexBoard}
        title={boards[indexBoard].title}
        moveCard={moveCard}
      >
        <div style={style}>
          {
            cards.map((card, index) => {
              return (
                renderCard(card, index)
              )
            })
          }
        </div>
      </Board>
    )
  }

  return (
    <>
      <div>
        {boards.map((board, indexBoard) => {
          return (
            renderBoard(board, indexBoard)
          )
        })}
      </div>

    </>
  )
}
