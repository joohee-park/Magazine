import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Main from '../pages/Main';
export default function Layout() {
 return (
   <div>
    <Header />
    <Outlet></Outlet>
    <Footer />
   </div>
 );
}