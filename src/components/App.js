import Activites from './activities/Activites';
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import HotelInfo from './hotelInfo/HotelInfo';
import Restaurant from './restaurant/Restaurant';
import Rooms from './rooms/Rooms'
import Services from './services/Services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr className="section-divider" />
      <HotelInfo></HotelInfo>
      <hr className="section-divider" />
      <Rooms></Rooms>
      <hr className="section-divider" />
      <Services></Services>
      <hr className="section-divider" />
      <Restaurant></Restaurant>
      <hr className="section-divider" />
      <Activites></Activites>
      <Footer></Footer>
    </div>
  );
}

export default App;
