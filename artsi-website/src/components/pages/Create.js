import React, { useMemo, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import {Grid} from "@material-ui/core"
import {TextField} from "@material-ui/core"
import './Create.css';

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "200px",
  marginLeft: "50px",
  marginTop: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out"
};

const activeStyle = {
  borderColor: "#2196f3"
};

const acceptStyle = {
  borderColor: "#00e676"
};

const rejectStyle = {
  borderColor: "#ff1744"
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
  marginLeft: "50px",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 200,
  padding: 4,
  boxSizing: "border-box"
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "auto",
  height: "100%"
};

function Create(props) {
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open
  } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onDrop: acceptedFiles => {
      // setFiles(
      //   acceptedFiles.map(file =>
      //     Object.assign(file, {
      //       preview: URL.createObjectURL(file)
      //     })
      //   )
      // );
    }
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject]
  );

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const filepath = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <div role="cont-test" style={{ padding: 30 }}>
    <Grid className="create-container" direction="row" container spacing={2}>
        <Grid className="drop-container">
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop video file here</p>
                <button type="button" onClick={open}>
                Open File Dialog
                </button>
            </div>
            <div style={{marginLeft: "50px",fontSize:"20px"}}>
                <h4>FILES:</h4>
                <ul>{filepath}</ul>
            </div>
            <aside style={thumbsContainer}>{thumbs}</aside>
        </Grid>
        <Grid className="video-details">
            <TextField 
                fullWidth
                id="video-title" 
                label="Video Name" 
                variant="outlined" 
                style={{marginTop: "20px", marginLeft: "50px",width: "550px"}}
                role="video-name"/><br/>
            <textarea role="description" name="body" style={{marginTop: "20px", marginLeft: "50px", height: "345px", width: "550px"}}>
                Write your video description here!
            </textarea>
        </Grid>
        <Grid className='upload-btn-container' xs={12}>
          <button className='upload-btn' onClick={"Successfully Uploaded!!!"}>UPLOAD</button>
        </Grid>
    </Grid>
    </div>
  );
}

export default Create;