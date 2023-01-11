import React, {useState} from "react";
import {dataMocks} from "../../../moks/mocksTodo";
import TaskCard from './components/TaskCard'



export default function Tasks() {
  let newArray = JSON.parse(localStorage.getItem("newArray"));
  if (!newArray) {
    localStorage.setItem('newArray', JSON.stringify(dataMocks));
  }
  const [boards, setBoards] = useState(newArray)
  const [currentBoard, setCurrentBoard] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  const renderBoard = () => {
    setBoards(boards.map(b => {return b}))
  }
  const delButton = (boards,board,item) => {
    boards[board.id-1].items.splice(boards[board.id-1].items.indexOf(item), 1)
    localStorage.setItem('newArray', JSON.stringify(boards));
    renderBoard()
  }
  function dragStartHandler(e, board, item) {
    setCurrentBoard(board)
    setCurrentItem(item)
  }
  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none'
  }
  function dragOverHandler(e) {
    e.preventDefault()
    if (e.target.className==='item') {
      e.target.style.boxShadow = '0 2px 3px darkgreen'
    }
  }
  function dropHandler(e) {
    e.preventDefault()
    e.target.style.boxShadow = 'none'
  }
  function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none'
  }
  function dropCardHandler(e, board) {
    newArray = []
    board.items.push(currentItem)
    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex, 1)
    setBoards(boards.map(b => {
      if (b.id === board.id) {
        newArray.splice(b.id, 1, board);
        return board
      }
      if (b.id === currentBoard.id) {
        newArray.splice(b.id, 1, currentBoard);
        return currentBoard
      }
      newArray.splice(b.id, 1, b);
      return b
    }))
    localStorage.setItem('newArray', JSON.stringify(newArray));
  }
  const addTask = () => {
    const input = document.querySelector('#newTask')
    if (input.value) {
      boards[0].items.push({id: Math.random(), title: input.value})
      newArray = []
      setBoards(boards.map(b => {
        newArray.push(b)
        return b
      }))
      localStorage.setItem('newArray', JSON.stringify(newArray));
      input.value = '';
    }
  }
  return (
    <>
      <div className='dad2'>
        {
          boards.map(board =>
            <div
              key={board.id} className='board'
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropCardHandler(e, board)}
            >
              <p className='board__title'>{board.title}</p>
              {
                board.items.map(item => (
                  <div
                    className='item'
                    key={item.id}
                    draggable={true}
                    onDragStart={(e) => dragStartHandler(e, board, item)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, board, item)}
                  >
                    <TaskCard
                      key={item.id}
                      title={item.title}
                    />
                    <button onClick={()=>{delButton(boards,board,item)}}>x</button>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
      <input id='newTask' placeholder={'Новая задача'}/>
      <button onClick={() => {addTask()}}>Добавить</button>
      <button onClick={() => {
        localStorage.setItem('newArray', JSON.stringify(dataMocks));
        let newArray = JSON.parse(localStorage.getItem("newArray"));
        setBoards(newArray.map(b => {
          return b
        }))
      }}>clean</button>
      <textarea
        id='feedback'
        defaultValue={localStorage.getItem('feedback')}
        placeholder={'feedback'}
        onChange={()=> {
          let feedback = document.getElementById('feedback')
          localStorage.setItem('feedback', feedback.value)
        }
      }/>

    </>
  )
}
