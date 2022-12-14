import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function ScrollText() {
  return (
    <div id="scroll-container">
    <div id="scroll-text" className='flex'>
    INSCRIVEZ-VOUS !
    <br />
    <div class="arrow bounce margin">
    <FontAwesomeIcon icon={faArrowDown}/>
    </div>
    -10% avec le code HYDRONOEL 
    <div class="arrow bounce margin">
    <FontAwesomeIcon icon={faArrowDown}/>
    </div>
    -10% avec le code HYDRONOEL
    <div class="arrow bounce margin">
    <FontAwesomeIcon icon={faArrowDown}/>
    </div>


    -10% avec le code HYDRONOEL




    <div class="arrow bounce margin">
    <FontAwesomeIcon icon={faArrowDown}/>
    </div>
    -10% avec le code HYDRONOEL
  INSCRIVEZ-VOUS !
  <br />
  </div>
    </div>
  );
}
