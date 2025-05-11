import { useEffect, useState } from 'react';

function Settings({ canvas }) {
  const [selectedObject, setSelectedObject] = useState(null);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [diameter, setDiameter] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    if (canvas) {
      canvas.on('selection:created', (e) => {
        handleObjectSelection(e.selected[0]);
      });

      canvas.on('selection:updated', (e) => {
        handleObjectSelection(e.selected[0]);
      });
      canvas.on('selection:cleared', (e) => {
        setSelectedObject(null);
        clearSettings();
      });
      canvas.on('object:modified', (e) => {
        handleObjectSelection(e.target);
      });
      canvas.on('object:scaling', (e) => {
        handleObjectSelection(e.target);
      });
    }
  }, [canvas]);

  const handleObjectSelection = (object) => {
    if (!object) return;

    setSelectedObject(object);
    if (object.type === 'rect') {
      setWidth(Math.round(object.width * object.scaleX));
      setHeight(Math.round(object.height * object.scaleY));
      setColor(object.fill);
      setDiameter('');
    } else if (object.type === 'circle') {
      setColor(object.fill);
      setDiameter(Math.round(object.radius * 2 * object.scaleX));
      setWidth('');
      setHeight('');
    }
  };

  const handleWidthChange = (e) => {
    const value = e.target.value.replace(/,/g, '');
    const intValue = parseInt(value, 10);

    setWidth(intValue);
    selectedObject.set({
      width: intValue / selectedObject.scaleX,
    });
    canvas.renderAll();
  };
  const handleHeightChange = (e) => {
    const value = e.target.value.replace(/,/g, '');
    const intValue = parseInt(value, 10);

    setHeight(intValue);
    selectedObject.set({
      height: intValue / selectedObject.scaleY,
    });
    canvas.renderAll();
  };
  const handleChangeDiameter = (e) => {
    const value = e.target.value.replace(/,/g, '');
    const intValue = parseInt(value, 10);

    setHeight(intValue);
    selectedObject.set({
      radius: intValue / 2 / selectedObject.scaleX,
    });
    canvas.renderAll();
  };

  const handleChangeColor = (e) => {
    const fillColor = e.target.value;
    selectedObject.set({
      fill: fillColor,
    });
    setColor(fillColor);
    canvas.renderAll();
  };

  const clearSettings = () => {
    setWidth('');
    setHeight('');
    setColor('');
    setDiameter('');
  };

  return (
    <div
      className="
        flex flex-col gap-2
        fixed bottom-4 right-4 p-2 rounded-xl bg-gray-500
        *:flex *:flex-col *:justify-start text-white    
    [&_input]:w-full [&_input]:px-2 [&_input]:border [&_input]:rounded-xl 
        "
    >
      {selectedObject?.type === 'rect' && (
        <>
          <div>
            <label htmlFor="width">Width:</label>
            <input
              type="text"
              id="width"
              name="width"
              value={width}
              onChange={handleWidthChange}
            />
          </div>
          <div>
            <label htmlFor="height">Height:</label>
            <input
              type="text"
              name="height"
              id="height"
              value={height}
              onChange={handleHeightChange}
            />
          </div>
          <div>
            <label htmlFor="color">Color</label>
            <input
              type="color"
              name="color"
              id="color"
              value={color}
              onChange={handleChangeColor}
            />
          </div>
        </>
      )}
      {selectedObject?.type === 'circle' && (
        <>
          <div>
            <label htmlFor="diameter">Diameter:</label>
            <input
              type="text"
              id="diameter"
              name="diameter"
              value={diameter}
              onChange={handleChangeDiameter}
            />
          </div>
          <div>
            <label htmlFor="color">Color</label>
            <input
              onChange={handleChangeColor}
              className="cursor-pointer"
              type="color"
              name="color"
              id="color"
              value={color}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Settings;
