import React from "react";

export default function TaskCard({title,id,board,item,boards,setBoards}) {
  return (
    <div
       // className='item'
       key={id}
    >
    {title}
    {/*<button onClick={()=> {delButton()}}>x</button>*/}
    </div>

  )
}
