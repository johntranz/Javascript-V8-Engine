import React, { useRef } from "react";
import "./App.css";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import { drawMesh } from "./utilities";

function App() {
  // Setup references
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Load facemesh
  const runFacemesh = async () => {
    const net = await facemesh.load({
      inputResolution: { with: 640, height: 480 },
      scale: 0.8,
    });

    setInterval(() => {
      detect(net);
    }, 100);
  };

  // Detect function
  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set video height
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make detections
      const face = await net.estimateFaces(video);
      console.log(face);

      // Get canvas context for drawing
      const ctx = canvasRef.current.getContext("2d");
      drawMesh(face, ctx);
    }
  };

  runFacemesh();

  return (
    <div className="App">
      <head className="App-header">
        <h1>Face Landmark Detection</h1>
        <Webcam ref={webcamRef} className="App-main" />
        <canvas ref={canvasRef} className="App-main" />
      </head>
    </div>
  );
}

export default App;
