import './App.css';
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
    </div>
  );
}

export default App;
