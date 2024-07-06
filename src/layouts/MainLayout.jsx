import Navbar from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';



const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;

