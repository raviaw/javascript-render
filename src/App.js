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

  const draw = (ctx, frameCount) => {
    const width = ctx.canvas.width
    const height = ctx.canvas.height

    const pctHorizontal = (frameCount % width) / width
    const pctVertical = (frameCount % height) / height

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#0000FF'
    ctx.strokeStyle = '#FF00FF'
    ctx.lineWidth = 1
    ctx.beginPath()
    const radius = Math.abs(0.5 - pctHorizontal) * width;
    if (pctHorizontal < 0.5) {
      ctx.arc(width * pctHorizontal, height * pctHorizontal, radius, Math.PI, 2 * Math.PI)
      ctx.moveTo(width - width * pctHorizontal + radius, height * pctHorizontal)
      ctx.arc(width - width * pctHorizontal, height * pctHorizontal, radius, 0, Math.PI)
    } else {
      ctx.arc(width * pctHorizontal, height * pctHorizontal, radius, Math.PI, 2 * Math.PI)
      ctx.moveTo(width - width * pctHorizontal + radius, height * pctHorizontal)
      ctx.arc(width - width * pctHorizontal, height * pctHorizontal, radius, 0, Math.PI)
    }
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
        <Box sx={{width: 500, height: 500}}>
          <Canvas draw={draw}/>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
