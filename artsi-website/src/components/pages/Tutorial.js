import React, { useCallback, useEffect, useRef, useState } from 'react';
import {DialogTitle, Grid} from "@material-ui/core"
import { useLocation } from 'react-router-dom'
import './Tutorial.css'
import {RiHeart3Fill, RiBookmarkFill} from 'react-icons/ri';

const colors = [
  "red",
  "green",
  "yellow",
  "black",
  "blue"
]





function Tutorial({title="Tutorial Title", videosource=""}) {
  const location = useLocation()
  
  const { t, v } = location.state
  title = t; videosource=v;

  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0
  });


  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
  }, []);

  const draw = useCallback((x, y) => {
    y = y - 150;
    x = x - 750;
    if (mouseDown) {
      ctx.current.beginPath();
      ctx.current.strokeStyle = selectedColor;
      ctx.current.lineWidth = 10;
      ctx.current.lineJoin = 'round';
      ctx.current.moveTo(lastPosition.x, lastPosition.y);
      ctx.current.lineTo(x, y);
      ctx.current.closePath();
      ctx.current.stroke();

      setPosition({
        x,
        y
      })
    }
  }, [lastPosition, mouseDown, selectedColor, setPosition])

  const download = async () => {
    const image = canvasRef.current.toDataURL('image/png');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "image.png";
    link.click();
  }

  const clear = () => {
    ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
  }

  const onMouseDown = (e) => {
    setPosition({
      x: e.pageX - 750,
      y: e.pageY - 150
    })
    setMouseDown(true)
  }

  const onMouseUp = (e) => {
    setMouseDown(false)
  }

  const onMouseMove = (e) => {
    draw(e.pageX, e.pageY)
  }
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const handleClick = () => { setIsActive(current => !current); };
  const handleClick2 = () => { setIsActive2(current => !current); };
 return ( 
    <><div role='tutorial-exists'>
     <Grid container direction="row" alignItems="center" justify="center" spacing="7px">
       <Grid item style={{ padding: 0, margin: 0 }}>
         <br></br>
         <div style={{ marginLeft: 175 }}>
           <b>{title}</b>
         </div>
         <br></br>
         <iframe width="500" height="450" src={videosource}></iframe>
         <div>
           <RiHeart3Fill
             className="heart"
             style={{
               color: isActive ? 'red' : '',
             }}
             role="heart"
             onClick={handleClick} /><RiBookmarkFill
             className="bookmark"
             style={{
               color: isActive2 ? 'gold' : '',
             }}
             role="bookmark"
             onClick={handleClick2} />
         </div>
       </Grid>
       <Grid item style={{ padding: 50 }}>

       </Grid>
       <Grid item style={{ marginTop: 50 }}>
         <canvas
           style={{
             border: "1px solid #000"
           }}
           width={650}
           height={550}
           ref={canvasRef}
           onMouseDown={onMouseDown}
           onMouseUp={onMouseUp}
           onMouseLeave={onMouseUp}
           onMouseMove={onMouseMove} />
         <br />
         <select
           value={selectedColor}
           onChange={(e) => setSelectedColor(e.target.value)}
         >
           {colors.map(
             color => <option key={color} value={color}>{color}</option>
           )}
         </select>
         <button onClick={clear}>Clear</button>
         <button onClick={download}>Download</button>
       </Grid>
     </Grid>
   </div><Grid item style={{ marginTop: 10 }}>
       <label>test drop down</label>
       <select name="test" id="test_id">
         <option value="test_a">A</option>
         <option value="test_b">B</option>
         <option value="test_c">C</option>
         <option value="test_d">D</option>
       </select>
     </Grid></>
    );
}

export default Tutorial;