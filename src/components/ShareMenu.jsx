import { useState } from 'react';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import useAppStore from '../store/useAppStore';

const fileTypes = [
  {
    type: 'jpg',
    icon: <PhotoCameraBackIcon />,
    desc: 'Best for sharing',
  },
  {
    type: 'png',
    icon: <PhotoCameraBackIcon />,
    desc: 'High quality image',
  },
];

function ShareMenu() {
  const [selectedType, setSelectedType] = useState(fileTypes[0].type);
  const { downloadCanvas } = useAppStore();

  return (
    <form className="p-4 flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        {fileTypes.map(({ type, icon, desc }) => {
          const isActive = selectedType === type;

          return (
            <label
              key={type}
              htmlFor={type}
              className={`flex items-center gap-4 cursor-pointer rounded-xl border-2 w-full px-4 py-2 transition-all
                ${
                  isActive ? 'border-[#8b3dff] bg-purple-50' : 'border-gray-300'
                }`}
            >
              <input
                type="radio"
                name="fileType"
                id={type}
                className="sr-only"
                value={type}
                checked={isActive}
                onChange={() => setSelectedType(type)}
              />
              <i>{icon}</i>
              <div className="flex flex-col">
                <span className="font-semibold uppercase">{type}</span>
                <span className="text-sm text-gray-500">{desc}</span>
              </div>
            </label>
          );
        })}
      </div>

      <button
        className="w-full rounded-full py-2 cursor-pointer bg-[#8b3dff]/90 hover:bg-[#8b3dff] text-white font-semibold text-lg"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          downloadCanvas(selectedType);
        }}
      >
        Download
      </button>
    </form>
  );
}

export default ShareMenu;
