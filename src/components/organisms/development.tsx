import React, { Component } from "react"
import styled from "styled-components"

const Base = styled.div`
  position: fixed;
  top: 0;
  left 0;
  width: 100%;
  background-color: yellow;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 2px;
  z-index: 64;
`

export default class Development extends Component {
  state = {
    disp : (<Base>このサイトは工事中です。/ This site is not yet complete. (WIP)</Base>)
  }
  handleOnClick = () => {
    this.setState({disp: (<div></div>)});
  }
  render() {
    return (
      <div onClick={this.handleOnClick}>{this.state.disp}</div>
    );
  }
}