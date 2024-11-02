import Activites from './activities/Activites';
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import HotelInfo from './hotelInfo/HotelInfo';
import Navbar from './Navbar/Navbar';
import Restaurant from './restaurant/Restaurant';
import Rooms from './rooms/Rooms'
import Services from './services/Services';
import Title from './Title/Title';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<div className='container'>
				<Title subTitle="Harmonie, nature, et confort en altitude" title="Notre Hôtel" />
				<HotelInfo />
				<Title subTitle="Balcon ou terrasse avec vue sur la fôret" title="Nos chambres" />
				<Rooms />
				<Title subTitle="Tout ce dont vous avez besoin, au cœur de la nature" title="Nos services" />
				<Services />
				<Title subTitle="Saveurs authentiques au sommet de la nature" title="Notre restaurant" />
				<Restaurant />
				<Title subTitle="Venez découvrir notre région" title="Les activités" />
				<Activites />
			</div>

			<Footer />
		</div>
	);
}

export default App;
