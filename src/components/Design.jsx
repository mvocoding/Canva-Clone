import { useEffect, useRef, useState } from 'react';
import { Canvas, Circle, Rect } from 'fabric';
import Settings from './Settings';
import MenuBar from './MenuBar';
import SidebarMenu from './SidebarMenu';

function Design() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

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

  const handleShapeClick = (type) => {
    if (!canvas) return;

    if (type === 'rect') {
      const rect = new Rect({
        top: 100,
        left: 50,
        width: 100,
        height: 100,
        fill: '#0000FF',
      });
      canvas.add(rect);
    } else {
      const circle = new Circle({
        top: 100,
        left: 50,
        radius: 100,
        fill: '#0000FF',
      });
      canvas.add(circle);
    }
  };

  return (
    <div className="flex flex-col w-full h-full ">
      <MenuBar />
      <div className="flex items-center justify-center relative h-screen ">
        <SidebarMenu onShapeClick={handleShapeClick}></SidebarMenu>
        <canvas
          className="pl-14  border-2 border-gray-300 "
          id="canvas"
          ref={canvasRef}
        ></canvas>
        <Settings canvas={canvas} />
      </div>
    </div>
  );
}
export default Design;
