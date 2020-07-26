import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 18px;
  height: fit-content;
  /* background: pink; */
  /* max-width: 500px; */
  /* flex-grow: 2; */
  margin: 36px 3%;
  /* padding: 1.5%; */
`

const Title = styled.div``
const Para = styled.p`
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 6px;
  /* background: red; */
`
const Heading = styled.h3`
  margin-top: 0;
  font-size: 24px;
  /* background: red; */
`

const Video = styled.div`
  height: 0;
  padding-top: 56.25%;
  background-image: url("https://res.cloudinary.com/acloud-guru/image/fetch/w_600,q_auto/https%3A%2F%2Facloudguru-content-assets-production.s3-accelerate.amazonaws.com%2Faws-introduction-1-square.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: black;
`

class Preview extends React.Component {
  render() {
    return (
      <Container>
        <Title>
          <Para>Course</Para>
          <Heading>Introduction to AWS</Heading>
        </Title>
        <Video />
        <Para>
          Want to get started with Amazon Web Services? Learn the fundamentals
          of cloud with our AWS tutorial for beginners.
        </Para>
      </Container>
    )
  }
}

export default Preview
