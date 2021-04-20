import { FC, useEffect, useRef, CSSProperties } from "react";
import startWave from "./index";

const styles: CSSProperties = {
  zIndex: -1,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
};

const Wave: FC = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    startWave(canvasRef.current);
  }, []);
  return <canvas ref={canvasRef} style={styles} />;
};

export default Wave;
