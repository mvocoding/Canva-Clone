import TitleIcon from '@mui/icons-material/Title';
import useAppStore from '../store/useAppStore';

function TextPanel() {
  const { draw } = useAppStore();
  return (
    <div className="bg-white text-gray-900 space-y-4 ">
      <button
        onClick={() => draw('normalText')}
        className="flex items-center justify-center  gap-1 
      cursor-pointer w-full bg-[#8b3dff]/90 hover:bg-[#8b3dff] text-lg  text-white rounded-full py-2 font-semibold "
      >
        <i>
          <TitleIcon></TitleIcon>
        </i>
        Add a text box
      </button>
      <div className="space-y-2">
        <h2 className="text-sm ">Default text side</h2>
        <button
          onClick={() => draw('headingText')}
          className="cursor-pointer text-2xl w-full rounded-xl py-4 font-semibold border-2 hover:bg-gray-200"
        >
          Add a heading
        </button>
        <button
          onClick={() => draw('subheadingText')}
          className="cursor-pointer text-base w-full rounded-xl py-2  font-semibold  border-2 hover:bg-gray-200"
        >
          Add a sub heading
        </button>
      </div>
    </div>
  );
}
export default TextPanel;
