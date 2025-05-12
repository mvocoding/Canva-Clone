import CircleIcon from '@mui/icons-material/Circle';
import SquareIcon from '@mui/icons-material/Square';
import RectangleIcon from '@mui/icons-material/Rectangle';
import useAppStore from '../store/useAppStore';

const shapes = [
  { name: 'rect', Icon: RectangleIcon },
  { name: 'square', Icon: SquareIcon },
  { name: 'circle', Icon: CircleIcon },
];

function ShapePanel() {
  const { draw } = useAppStore();
  return (
    <div className="*:cursor-pointer flex flex-wrap gap-4">
      {shapes.map(({ name, Icon }, idx) => (
        <Icon key={idx} style={{ fontSize: 100 }} onClick={() => draw(name)} />
      ))}
    </div>
  );
}

export default ShapePanel;
