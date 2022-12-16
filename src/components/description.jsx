import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'



export default function Description() {


  return (
    <div className='description'>
      <h1>Drink Buddy</h1>
      <p> Le Drink Buddy est le compagnon idéal pour une vie plus saine, avec sa facilité d’utilisation et sa taille, il peut être utilisé partout sans trop de problème. Sa batterie et le câble de rechargement intégrés permettent une utilisation prolongée quel que soit l’environnement!
      </p>
      <div className="flex">
      <button className='blue-button'>Acheter maintenant</button>
      <a type='button' className='blue-button' href='#form'> En savoir plus  <FontAwesomeIcon icon={faArrowDown}/></a>
      

      </div>

    </div>
  );
}