import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'



export default function Description() {


  return (
    <div className='description'>
      <h1>Drink Buddy</h1>
      <p>Votre outil de tous les jours pour vous assurer une bonne hydratation !
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam quaerat esse nesciunt explicabo saepe repellat quasi odio voluptas laboriosam, architecto recusandae sapiente quam molestias similique et inventore? Consectetur, beatae.
      </p>
      <div className="flex">
      <button className='blue-button'>Acheter maintenant</button>
      <a type='button' className='blue-button' href='#form'> En savoir plus  <FontAwesomeIcon icon={faArrowDown}/></a>
      

      </div>

    </div>
  );
}