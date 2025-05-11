import { useState, useRef, useEffect } from 'react';

function RevealPanel({
  children,
  classes = '',
  btnText = 'Panel',
  btnIcon = null,
  btnClasses = '',
}) {
  const [active, setActive] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const handleMouseOver = document.addEventListener('mouseover', (e) => {
      if (panelRef.current) {
        if (panelRef.current.contains(e.target)) {
          setActive(true);
        } else {
          setActive(false);
        }
      }
    });

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  return (
    <div className={`group ${classes} ${active && 'active'}`} ref={panelRef}>
      <button
        className={`
      cursor-pointer
      flex flex-col gap-y-1 rounded-lg text-gray-700 group-[.active]:border-gray-300  group-[.active]:border-2 p-1 ${btnClasses}`}
      >
        {btnIcon && <i>{btnIcon}</i>}
        {btnText}
      </button>
      <div
        className="
        invisible max-w-[0]
        group-[.active]:visible group-[.active]:max-w-[1000px]
        absolute left-full top-0 w-80 h-screen 
        bg-white rounded-xl p-4 shadow-2xl "
      >
        {children}
      </div>
    </div>
  );
}

export default RevealPanel;
