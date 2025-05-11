import CircleIcon from '@mui/icons-material/Circle';
import SquareIcon from '@mui/icons-material/Square';
import RectangleIcon from '@mui/icons-material/Rectangle';

const shapes = [
  { name: 'rect', Icon: SquareIcon },
  { name: 'circle', Icon: CircleIcon },
];

function ShapePanel({ onShapeClick }) {
  return (
    <div className="*:cursor-pointer flex flex-wrap gap-4">
      {shapes.map(({ name, Icon }, idx) => (
        <Icon
          key={idx}
          style={{ fontSize: 100 }}
          onClick={() => onShapeClick(name)}
        />
      ))}
    </div>
  );
}

export default ShapePanel;
