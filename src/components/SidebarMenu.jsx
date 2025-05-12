import InterestsIcon from '@mui/icons-material/Interests';
import RevealPanel from './RevealPanel';
import ShapePanel from './ShapePanel';
import TextPanel from './TextPanel';
import TitleIcon from '@mui/icons-material/Title';

function SidebarMenu() {
  return (
    <aside
      className="
      flex flex-col gap-y-4 py-4 items-center 
      text-gray-700 absolute top-0  left-0 z-[100] h-screen text-xs w-16 "
    >
      <RevealPanel btnText="Shapes" btnIcon={<InterestsIcon></InterestsIcon>}>
        <ShapePanel></ShapePanel>
      </RevealPanel>

      <RevealPanel btnText="Text" btnIcon={<TitleIcon></TitleIcon>}>
        <TextPanel></TextPanel>
      </RevealPanel>
    </aside>
  );
}
export default SidebarMenu;
