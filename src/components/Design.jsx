import { useEffect, useRef } from 'react';
import { Canvas, Circle, Rect, Control, IText } from 'fabric';
import Settings from './Settings';
import MenuBar from './MenuBar';
import SidebarMenu from './SidebarMenu';
import useAppStore from '../store/useAppStore';

function Design() {
  const canvasRef = useRef(null);
  const { canvas, setCanvas } = useAppStore();

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 500,
        height: 500,
      });

      initCanvas.backgroundColor = '#fff';
      initCanvas.renderAll();

      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose();
      };
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-full ">
      <MenuBar />
      <div className="flex items-center justify-center relative h-screen ">
        <SidebarMenu></SidebarMenu>
        <canvas
          className="pl-14  border-2 border-gray-300 "
          id="canvas"
          ref={canvasRef}
        ></canvas>
        {/* <Settings canvas={canvas} /> */}
      </div>
    </div>
  );
}
export default Design;
