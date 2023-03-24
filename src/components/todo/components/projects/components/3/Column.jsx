import styled from "styled-components";
import {Droppable} from "react-beautiful-dnd"
import Task from "./Task"

const Container = styled.div`
  margin: 0;
  border: 1px solid lightgrey;
  border-radius: 2px;
`
const Title = styled.h3`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
`

export default function Column({column,tasks}) {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Title>посмотреть как другие обошли проблемы с ref<br/>
        а потом забить и сделать на react dnd</Title>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index}/>
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  )
}
