import React from "react"
import Sections from "./Sections"
import Preview from "./Preview"
import "normalize.css" /* http://nicolasgallagher.com/about-normalize-css/ */
import styled from "styled-components"

const ViewContainer = styled.div`
  font-family: "Inter";
  display: flex;
  flex-direction: row;
  padding: 0 12px;
  margin: 48px;
  background: #ffffff;
  /* Dropshadow / Depth 3 */
  box-shadow: 0px 7px 15px rgba(7, 1, 82, 0.09);
`

const Nav = styled.div`
  background: #040745;
  height: 80px;
`

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 24px;
  /* flex-grow: 1; */
  /* background: yellow; */
`

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <ViewContainer>
          <SectionsContainer>
            <Sections />
          </SectionsContainer>
          <Preview />
        </ViewContainer>
      </>
    )
  }
}

export default App
