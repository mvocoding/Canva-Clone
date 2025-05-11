import InterestsIcon from '@mui/icons-material/Interests';
import RevealPanel from './RevealPanel';
import ShapePanel from './ShapePanel';

function SidebarMenu({ onShapeClick }) {
  return (
    <aside
      className="text-gray-700 absolute top-0  left-0 z-[100] h-screen p-2 pr-0 text-xs
        min-w-14 "
    >
      <RevealPanel btnText="Shapes" btnIcon={<InterestsIcon></InterestsIcon>}>
        <ShapePanel onShapeClick={onShapeClick}></ShapePanel>
      </RevealPanel>
    </aside>
  );
}
export default SidebarMenu;
