import React from "react"
import initalData from "./data"
import Section from "./Section"
import { DragDropContext } from "react-beautiful-dnd"
import styled from "styled-components"

class Sections extends React.Component {
  state = initalData
  //Updaing the list data on drag end
  onDragEnd = result => {
    const { destination, source, draggableId } = result
    //No destinaiton do nothing
    if (!destination) {
      return
    }
    //Destination is the same as source do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
    // reordering courses in the same column
    const start = this.state.sections[source.droppableId]
    const finish = this.state.sections[destination.droppableId]

    if (start === finish) {
      const newCourseIds = Array.from(start.courseIds)
      newCourseIds.splice(source.index, 1)
      newCourseIds.splice(destination.index, 0, draggableId)

      const newSection = {
        ...start,
        courseIds: newCourseIds
      }

      const newState = {
        ...this.state,
        sections: {
          ...this.state.sections,
          [newSection.id]: newSection
        }
      }
      this.setState(newState)
      return
    }
    //moving courses between columns
    const startCourseIds = Array.from(start.courseIds)
    startCourseIds.splice(source.index, 1)
    const newStart = {
      ...start,
      courseIds: startCourseIds
    }

    const finishCourseIds = Array.from(finish.courseIds)
    finishCourseIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      courseIds: finishCourseIds
    }

    const newState = {
      ...this.state,
      sections: {
        ...this.state.sections,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    this.setState(newState)
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {/* Fetching the data */}
        {this.state.sectionOrder.map(sectionId => {
          const section = this.state.sections[sectionId]
          const courses = section.courseIds.map(
            courseId => this.state.courses[courseId]
          )

          return (
            <Section key={section.id} section={section} courses={courses} />
          )
        })}
      </DragDropContext>
    )
  }
}

export default Sections
