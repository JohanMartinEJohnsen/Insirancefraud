import React from 'react';
import Case from './Case';
import * as Cases from '/Users/a50508h/insurancefraud/src/Assets/AllCases.json';

const CaseDisplay = () => {
    
    return(
        <div className="CaseDisplay">
            <p> Finn svindleren
            </p>
            <div className="files">
            {Cases.levels[0].cases.map((val,index) => {
                return(
                    <div key={index}>
                        <Case key={index} name={val.navn} story={val.story} image={val.image} fraud={val.fraud}></Case>
                    </div>
                )
                
            })}
            </div>
            
    </div>
    )
}
export default CaseDisplay;
