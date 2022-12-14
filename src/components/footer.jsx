import logo from '../img/logo-negatif.png';
export default function Footer() {
    return (

        <div className='footer'>
            <div>

            <img src={logo} alt="drink-budy-logo" className='logo'/>
            <p>Mentions légales</p>
            <p>Conditions générales de vente</p>
            <p>Politique de confidentialité</p>

            </div>
        </div>
    );



}