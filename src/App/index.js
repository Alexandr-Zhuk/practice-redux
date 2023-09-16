import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';



// Pages
import DashboardPage from '../containers/DashboardPage';
function App() {

  const title = useSelector((state) => state.page.title);
  const pageTitle = `My App - ${title}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </>
  );
}


export default App;
