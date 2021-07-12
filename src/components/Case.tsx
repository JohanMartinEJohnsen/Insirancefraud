import React from 'react';
import Swal from "sweetalert2";

import ian from '../Assets/pictures/Ian.png';
import sverre from '../Assets/pictures/Sverre.png';
import karl from '../Assets/pictures/Karl.png';
import thorstein from '../Assets/pictures/Thorstein.png';
import ian_rap from '../Assets/pictures/Ian_rap.png';
import sverre_rap from '../Assets/pictures/Sverre_rap.png';
import karl_rap from '../Assets/pictures/Karl_rap.png';
import thorstein_rap from '../Assets/pictures/Thorstein_rap.png';
//import global from './globalNum';

const pictures = [thorstein, sverre,  ian, karl]
const report = [thorstein_rap, sverre_rap, ian_rap, karl_rap]

interface caseProps {
    name: string;
    story: string;
    image: any;
    fraud: boolean;
}

function onClickFunction(story:string, name:string, answer:boolean, imgindex: number): void {
    Swal.fire({
            imageUrl: report[imgindex],
            imageAlt: 'A tall image',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Ikke svindler",
            denyButtonText:"Swindler!"
    }).then((result) => {
        if( result.isDenied && !answer){
            Swal.fire('Du svarte feil!', '', 'error')
        }
        else if( result.isConfirmed){
            console.log(answer);
        }
        else if ((result.isDenied === true) && (answer === true)){
            Swal.fire('Du svarte riktig!', '', 'success').then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  global.lastPage = true
                }
                })
        }
    })
}

const Case = (props: caseProps) => {
    return (
    <div className= "case" onClick={() => onClickFunction(props.story, props.name, props.fraud, props.image) }>
        <img className = "case" src={pictures[props.image]} alt="" ></img>
    </div>
    )
}

export default Case;
