import parkingIcon from '../assets/parking.png';
import wifiIcon from '../assets/reseaux.png';
import restaurantIcon from '../assets/restauration.png';
import boissonIcon from '../assets/boisson.png';
import disponibiliteIcon from '../assets/disponibilite.png';
import environnementIcon from '../assets/environnement.png';

const services = [
    {
        name: 'Parking',
        description: 'Parking gratuit pour nos clients.',
        icon: parkingIcon
    },
    {
        name: 'Wi-Fi',
        description: 'Wi-Fi gratuit dans tout l\'hôtel.',
        icon: wifiIcon
    },
    {
        name: 'Restaurant',
        description: 'Profitez de notre restaurant gastronomique.',
        icon: restaurantIcon
    },
    {
        name: 'Disponibilite',
        description: 'Le personnelle disponible à tout moment',
        icon: disponibiliteIcon
    },
    {
        name: 'Boisson',
        description: 'Un bar vous permettant de vous rafraichir',
        icon: boissonIcon
    },
    {
        name: 'Environnement',
        description: 'Un cadre dépaysans',
        icon: environnementIcon
    }
];


export default services;