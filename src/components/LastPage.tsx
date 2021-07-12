import React from 'react';
import Swal from "sweetalert2";

import lineup from '../Assets/pictures/lineUp.png'

const LastPage = () => {
    
    return(
        <div>
            <img src={lineup}></img>
            <div>
                <button title="Nummer 1" onClick={()=> Swal.fire('Du svarte feil!', '', 'error')}>Nummer 1</button>
                <button title="Nummer 2" onClick={() => Swal.fire('Du svarte riktig!', '', 'success')}>Nummer 2</button>
                <button title="Nummer 3" onClick={()=> Swal.fire('Du svarte feil!', '', 'error')}>Nummer 3</button>
                <button title="Nummer 4" onClick={() => Swal.fire('Du svarte riktig!', '', 'success')}>Nummer 4</button>
                <button title="Nummer 5" onClick={()=> Swal.fire('Du svarte feil!', '', 'error')}>Nummer 5</button>

            </div>

        </div>
    )
}
export default LastPage;
