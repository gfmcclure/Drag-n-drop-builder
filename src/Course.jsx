import React from "react"
import styled from "styled-components"
import { Draggable } from "react-beautiful-dnd"

const Container = styled.div`
  background: white;
  border: solid 1px #d7e0f1;
  padding: 12px;
  margin-bottom: -1px;
  display: flex;
  justify-content: space-between;
`
const Icon = styled.div`
  padding: 0 12px 0 6px;
  /* background: red; */
`

const Title = styled.div`
  padding: 0 12px 0 6px;
  /* background: red; */
  flex-grow: 2;
`

const Duration = styled.div`
  padding: 0 6px;
`

class Course extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.course.id} index={this.props.index}>
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Icon>📹</Icon>
            <Title>{this.props.course.title}</Title>
            <Duration>1:00:00</Duration>
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Course
