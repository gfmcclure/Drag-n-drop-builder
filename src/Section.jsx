import React from "react"
import "./styles.css"
import styled from "styled-components"
import { Droppable } from "react-beautiful-dnd"
import Course from "./Course"

const SectionContent = styled.div`
  min-height: 100px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "#02E088" : "white")};
`

const Heading = styled.h1`
  margin: 0 0 12px 0;
  font-size: 24px;
`

class Section extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="sectionTitle">
          <Heading>{this.props.section.title}</Heading>
          <p>6 items | 03:16:49 </p>
        </div>

        <Droppable droppableId={this.props.section.id}>
          {(provided, snapshot) => (
            <SectionContent
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.courses.map((course, index) => (
                <Course key={course.id} course={course} index={index} />
              ))}
              {provided.placeholder}
            </SectionContent>
          )}
        </Droppable>
      </div>
    )
  }
}

export default Section
