import './App.css';
import Header from './header/Header';
import HotelInfo from './hotelInfo/HotelInfo';
import Rooms from './rooms/Rooms'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HotelInfo></HotelInfo>
      <Rooms></Rooms>
    </div>
  );
}

export default App;
