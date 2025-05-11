import AddCircleIcon from '@mui/icons-material/AddCircle';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const menuOptions = [
  {
    text: 'Create new design',
    icon: <AddCircleIcon></AddCircleIcon>,
  },
  {
    text: 'Save',
    icon: <CloudQueueIcon></CloudQueueIcon>,
  },
  {
    text: 'Download',
    icon: <DownloadForOfflineIcon></DownloadForOfflineIcon>,
  },
];

function FileMenu() {
  return (
    <ul className="flex flex-col gap-y-4 py-4 ">
      {menuOptions.map(({ icon, text }, idx) => (
        <li
          key={idx}
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
