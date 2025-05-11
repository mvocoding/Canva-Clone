import { useEffect, useState } from 'react';
import Design from './components/Design';
import LoadingBar from './components/LoadingBar';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      <LoadingBar isActive={isLoading}></LoadingBar>
      <Design></Design>
    </>
  );
}
export default App;
