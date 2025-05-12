import { useEffect } from 'react';
import Design from './components/Design';
import LoadingBar from './components/LoadingBar';
import useAppStore from './store/useAppStore';

function App() {
  const { isLoading, setIsLoading } = useAppStore();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [setIsLoading]);
  return (
    <>
      <LoadingBar isActive={isLoading}></LoadingBar>
      <Design></Design>
    </>
  );
}
export default App;
