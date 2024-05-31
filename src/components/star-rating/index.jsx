import { useState } from "react"
import {FaStar} from 'react-icons/fa'
import'./styles.css'

export default function StarRating({noOfStars=5}){
   
   const [rating, setrating] = useState(0);
   const [hover,setHover] = useState(0);
  
   function handleClick(getCurrentIndex){
    console.log(getCurrentIndex)
    setrating(getCurrentIndex)

   }
   function handleMouseEnter(getCurrentIndex){
    console.log(getCurrentIndex)
    setrating(getCurrentIndex)
   }
   function handleMouseleave(){
    
    setrating(rating)

   }



   return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_,index) => {
                index +=1
                return <FaStar
                key={index}
                className={index <= (hover || rating) ? 'active' : 'inactive'}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseleave()}
                size={40}
                />
            })
}
    </div>
}