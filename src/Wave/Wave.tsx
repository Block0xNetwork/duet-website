import {FC, useEffect, useRef,} from "react";
import startWave from "./index";
import styled from "styled-components";

const WaveCanvas = styled.canvas`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`

const Wave: FC = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    startWave(canvasRef.current);
  }, []);
  return <WaveCanvas ref={canvasRef}/>;
};

export default Wave;
