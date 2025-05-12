import { useState, useRef, useEffect } from 'react';

function DropdownButton({ text, icon, classes, handleOnclick }) {
  return (
    <button
      onClick={handleOnclick}
      className={`
        flex items-center gap-1 rounded-xl hover:bg-[#00c4cc] p-2 
        text-white font-semibold cursor-pointer text-base ${classes}`}
    >
      {icon && <i className="text-xs ">{icon}</i>}
      {text}
    </button>
  );
}

function DropdownContent({ children }) {
  return (
    <div
      className={`content 
        absolute top-full left-2 w-80  bg-white rounded-lg shadow-xl z-[1000] 
        py-2 px-4 space-y-4 opacity-0 max-h-0 overflow-hidden 
        transition-all duration-300 ease-in-out group-[.active]:opacity-100 
        group-[.active]:max-h-[500px] group-[.active]:visible 
        border border-gray-200 mt-2`}
    >
      {children}
    </div>
  );
}
function MenuDropdown({
  text = 'Dropdown',
  icon = null,
  content = null,
  classes = '',
  btnClasses = '',
}) {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown');
    };
  }, []);
  const toggleDropdown = (e) => {
    e.preventDefault();
    setActive((prev) => !prev);
  };
  return (
    <div
      className={`relative  group ${classes} ${active ? 'active' : ''}`}
      ref={dropdownRef}
    >
      <DropdownButton
        classes={btnClasses}
        text={text}
        icon={icon}
        handleOnclick={toggleDropdown}
      ></DropdownButton>
      <DropdownContent>{content}</DropdownContent>
    </div>
  );
}

export default MenuDropdown;
