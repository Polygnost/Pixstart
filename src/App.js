import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Pixstart from "./Pixstart";
import MenuBar from "./MenuBar";
import ContextBar from "./ContextBar";
import ToolBar from "./ToolBar";
import Canvas from "./Canvas";
import Palette from "./Palette";
import Timeline from "./Timeline";
import StatusBar from "./StatusBar";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";

export default function App() {
  const imgObjs = useSelector(state => state.imageObjects.value);

  return (
    <div className="App">
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <Pixstart>
        {/* <MenuBar />
        <ContextBar />
        <ToolBar />
        <Canvas {...imgObjs} />
        <Palette />
        <Timeline />
        <StatusBar /> */}
      </Pixstart>
    </div>
  );
}
