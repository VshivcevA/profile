import React, {useState} from 'react'
import {DragDropContext} from "react-beautiful-dnd";
import initialData from './initial-data'
import Column from "./Column";

export default function App() {
  const [data] = useState(initialData)
  const onDragEnd = result => {

  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {
        data.columnOrder.map(columnId => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map(taskId =>
            data.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks}/>
        })
      }
    </DragDropContext>
  )
}
