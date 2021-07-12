import React from 'react';
import Swal from "sweetalert2";

import lineup from 'Assets/pictures/lineUp.png'
import { Button } from 'react-native-elements';

const LastPage = () => {
    
    return(
        <div>
            <img src={lineup}></img>
            <div>
                <Button title="Nummer 1" onPress={()=> Swal.fire('Du svarte feil!', '', 'error')}></Button>
                <Button title="Nummer 2" onPress={() => Swal.fire('Du svarte riktig!', '', 'success')}></Button>
                <Button title="Nummer 3" onPress={()=> Swal.fire('Du svarte feil!', '', 'error')}></Button>
                <Button title="Nummer 4" onPress={()=> Swal.fire('Du svarte feil!', '', 'error')}></Button>
            </div>

        </div>
    )
}
export default LastPage;
