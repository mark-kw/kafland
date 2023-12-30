import './App.css';
import Header from './components/Header';
import Reservation from './components/Reservation';
import RoomSection from './components/RoomSection';

function App() {
  return (
    <div className="App">
      <Header />
      <RoomSection />
      <hr className="border-t border-gray-800 my-5" />
      <Reservation />
    </div>
  );
}

export default App;
