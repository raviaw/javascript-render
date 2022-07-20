import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Divider} from "@mui/material";
import Canvas from "./Canvas";

function App() {
  const mdTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  let loop1 = 0;
  let loop2 = 0;
  let loop3 = 0;
  let sz = 0;

  const draw = (ctx, frameCount) => {
    const width = ctx.canvas.width
    const height = ctx.canvas.height

    const pctHorizontal = (frameCount % width) / width
    const pctVertical = (frameCount % height) / height

    loop1 += Math.PI / 200;
    loop2 += Math.PI / 150;
    loop3 += Math.PI / 100;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#0000FF'
    ctx.strokeStyle = '#CCCCCC'
    ctx.lineWidth = 1
    ctx.beginPath()
    // const radius = Math.abs(0.5 - pctHorizontal) * width;
    // if (pctHorizontal < 0.5) {
    //   ctx.arc(width * pctHorizontal, height * pctHorizontal, radius, Math.PI, 2 * Math.PI)
    //   ctx.moveTo(width - width * pctHorizontal + radius, height * pctHorizontal)
    //   ctx.arc(width - width * pctHorizontal, height * pctHorizontal, radius, 0, Math.PI)
    // } else {
    //   ctx.arc(width * pctHorizontal, height * pctHorizontal, radius, Math.PI, 2 * Math.PI)
    //   ctx.moveTo(width - width * pctHorizontal + radius, height * pctHorizontal)
    //   ctx.arc(width - width * pctHorizontal, height * pctHorizontal, radius, 0, Math.PI)
    // }
    //ctx.stroke()

    //ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(width, height)
    ctx.lineTo(width, height * pctVertical)
    ctx.moveTo(width, height)
    ctx.lineTo(width * pctHorizontal, height)
    ctx.lineTo(width, height)
    ctx.moveTo(width * pctHorizontal, height)
    ctx.lineTo(width, height * pctVertical)
    // ctx.lineTo(width * pctHorizontal , height  * pctVertical)
    ctx.moveTo(width * pctHorizontal, height * pctVertical)
    ctx.lineTo(width * pctHorizontal, height)

    const moveTo = width * pctHorizontal
    const lineTo = width - ((width * pctHorizontal) / 2)

    ctx.lineTo(lineTo, height * pctVertical)
    ctx.lineTo(0, height)
    ctx.lineTo(width * pctHorizontal, height * pctVertical)

    ctx.stroke()
    ctx.fillStyle = '#0000FF'
    ctx.strokeStyle = '#FF00FF'
    ctx.lineWidth = 1
    ctx.beginPath()

    ctx.moveTo(moveTo, height * pctVertical)
    ctx.lineTo(lineTo - Math.sin(loop1) * 50, height * pctVertical + Math.cos(loop1) * 100)
    ctx.lineTo(width / 2 - Math.sin(loop1) * 50, height / 2 - Math.cos(loop1) * 50)
    const baseline1x = width / 2 + Math.sin(loop1) * 40
    const baseline1y = height / 2 + Math.cos(loop1) * 40
    ctx.lineTo(baseline1x, baseline1y)
    const baseline2x = baseline1x + Math.sin(loop2) * 80
    const baseline2y = baseline1y + Math.cos(loop2) * 80
    ctx.lineTo(baseline2x, baseline2y)
    const baseline3x = baseline2x - Math.sin(loop3) * 80
    const baseline3y = baseline2y + Math.cos(loop3) * 80
    ctx.lineTo(baseline3x, baseline3y)
    const baseline4x = baseline3x - Math.sin(loop1) * 100
    const baseline4y = baseline3y + Math.cos(loop1) * 100
    ctx.lineTo(baseline4x, baseline4y)

    ctx.stroke()
    ctx.fillStyle = '#0000FF'
    ctx.strokeStyle = '#00FFFF'
    ctx.lineWidth = 5
    ctx.beginPath()

    ctx.moveTo(baseline4x, baseline4y)
    const baseline5x = baseline4x - Math.sin(loop1) * 20
    const baseline5y = baseline4y - Math.cos(loop1) * 20
    ctx.lineTo(baseline5x, baseline5y)

    ctx.stroke()
    ctx.fillStyle = '#0000FF'
    ctx.strokeStyle = '#00FFFF'
    ctx.lineWidth = 1
    ctx.beginPath()

    let lastX;
    let lastY;

    for (let pos = 0; pos < Math.PI * 2; pos += Math.PI / 16) {
      const baseline6x = baseline5x - Math.sin(pos) * 100
      const baseline6y = baseline5y - Math.cos(pos) * 100
      ctx.moveTo(baseline5x, baseline5y)
      ctx.lineTo(baseline6x, baseline6y)
      for (let pos1 = 0; pos1 < Math.PI * 2; pos1 += Math.PI / 2) {
        const baseline7x = baseline6x - Math.sin(pos1) * 5
        const baseline7y = baseline6x - Math.cos(pos1) * 5
        ctx.moveTo(baseline6x, baseline6y)
        ctx.lineTo(baseline7x, baseline7y)
      }
      lastX = width / 2 + Math.sin(loop1) * 200
      lastY = height / 2 + Math.cos(loop1) * 200
      ctx.lineTo(lastX, lastY)
    }
    ctx.stroke()
    ctx.fillStyle = '#0000FF'
    ctx.strokeStyle = '#00FF00'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(lastX,lastY)
    ctx.bezierCurveTo(
      0,
      0,
      width / 2 + Math.sin(loop1) * 150,
      height / 2 + Math.cos(loop2) * 150,
      width / 2 + Math.sin(loop2) * 150,
      height / 2 + Math.cos(loop1) * 150,
    )
    ctx.bezierCurveTo(
      width / 2 + Math.sin(loop2) * 200,
      height / 2 + Math.cos(loop1) * 200,
      width / 2 + Math.sin(loop1) * 300,
      height / 2 + Math.cos(loop2) * 300,
      width / 2 + Math.sin(loop1) * 400,
      height / 2 + Math.cos(loop2) * 400,
    )

    ctx.stroke()
  }
  return (
    <>
      <CssBaseline/>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{display: 'flex'}}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 2}}
              >
                <MenuIcon/>
              </IconButton>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Javascript Render
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Divider/>
        <Box sx={{width: 700, height: 700}}>
          <Canvas draw={draw}/>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
