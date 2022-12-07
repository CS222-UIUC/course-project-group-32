import * as React from "react";
import { ReactSketchCanvas } from 'react-sketch-canvas';
import {SketchPicker} from "react-color"
import {Grid} from "@material-ui/core"

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
};

const Board = class extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
    this.state = {
      strokeColor:'#000',
      eraser: false,
    };
  }

  handleChangeComplete = (color) => {
    this.setState({strokeColor: color.hex});
  };
  render() {
  return (
    <div style={{padding:"20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
    <div>
    <Grid  direction="row" container spacing={2}>
    <SketchPicker
      color={ this.state.strokeColor }
      onChangeComplete={ this.handleChangeComplete }
    />
    <ReactSketchCanvas
      ref={this.canvas}
      style={styles}
      width="500px"
      height="500px"
      strokeWidth={4}
      strokeColor={this.state.strokeColor}
    />
    </Grid>
    <br></br>
    <div style={{display: "flex",justifyContent: "space-between"}}>
    <button
          onClick={() => {
            this.canvas.current
              .undo()
          }}
        >
          Undo
    </button>
    <button
          onClick={() => {
            this.canvas.current
              .redo()
          }}
        >
          Redo
    </button>
    <button
          onClick={() => {
            this.setState({eraser: !this.state.eraser});
            this.canvas.current
            .eraseMode(this.state.eraser)
          }}
        >
          Eraser Mode
    </button>
    <button
          onClick={() => {
            this.canvas.current
            .clearCanvas()
          }}
        >
          Clear Canvas
    </button>
    </div>
    </div>
    </div>
  );
}
};

export default Board;