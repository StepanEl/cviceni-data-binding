import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';

createRoot(
  document.querySelector('#app'),
).render(<HomePage />);

/*
export const HomePage = () => {
  cosnt [svatek, setSvatek] = useState()
  
useEffect(() => {
    const nacistSvatek = async () => {
      const response = await fetch("https://nameday.abalin.net/api/V2/today");
      const responseData = await response.json();
      setSvatek(responseData.data.cz);
    };
    nacistSvatek();
  }, []); 

  return (
    <div className='container'>
        {!svatek &&<em>Načítám data...</em>}
        {svatek && <div> Dnes má svátek {svatek}.</div>}
  </div>
);};
  
  */