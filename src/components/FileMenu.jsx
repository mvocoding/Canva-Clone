import AddCircleIcon from '@mui/icons-material/AddCircle';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import useAppStore from '../store/useAppStore';

function FileMenu() {
  const { resetCanvas, downloadCanvas } = useAppStore();

  const menuOptions = [
    {
      text: 'Create new design',
      icon: <AddCircleIcon />,
      onClick: () => resetCanvas(),
    },
    {
      text: 'Download',
      icon: <DownloadForOfflineIcon />,
      onClick: () => downloadCanvas('png'),
    },
  ];

  return (
    <ul className="flex flex-col gap-y-4 py-4">
      {menuOptions.map(({ icon, text, onClick }, idx) => (
        <li
          key={idx}
          onClick={onClick}
          className="px-4 py-2 cursor-pointer gap-x-2 items-center flex hover:bg-gray-200"
        >
          {icon && <i>{icon}</i>}
          {text}
        </li>
      ))}
    </ul>
  );
}

export default FileMenu;
