import { useState } from "react";


function Card({id, image,info,price,name, removeTour})  {
    const[readmore,setReadmore] = useState(false);
    
    // If readmore is true, display full text, otherwise display only first 200 characters
    const description = readmore ? info :`${info.substring(0,200)}....`;
    function readmoreHandler() {
        // toggle the value of readmore
        setReadmore(!readmore);
    }


    return (
        
        /* 
            1. This is the code for each card that is displayed on the page. 
            2. It takes in the data from the tours array, and displays it on the page. 
            3. The read more button is used to display the full description of the tour, and the not interested button is used to remove the tour from the page. 
        */

<div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
        
    );
}

export default Card;