import IosShareIcon from '@mui/icons-material/IosShare';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MenuDropdown from './MenuDropdown';
import FileMenu from './FileMenu';
import ShareMenu from './ShareMenu';

const menudropdowns = [
  {
    text: 'File',
    content: <FileMenu></FileMenu>,
  },
  {
    text: 'Share',
    icon: <IosShareIcon></IosShareIcon>,
    content: <ShareMenu></ShareMenu>,
    classes: 'ml-auto [&_.content]:left-[unset] [&_.content]:right-0',
    btnClasses: 'bg-white/90 !text-black px-4 py-2',
  },
];

function MenuBar() {
  return (
    <header
      className="text-gray-700 w-full h-14 
  bg-[linear-gradient(90deg,#00c4cc,#7d2ae8)] "
    >
      <div className="relative h-full px-8 flex items-center gap-x-6  ">
        {menudropdowns.map(
          ({ text, icon, content, classes, btnClasses }, idx) => (
            <MenuDropdown
              key={idx}
              text={text}
              icon={icon}
              content={content}
              classes={classes}
              btnClasses={btnClasses}
            ></MenuDropdown>
          )
        )}
      </div>
    </header>
  );
}
export default MenuBar;
