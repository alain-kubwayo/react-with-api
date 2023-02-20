import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';

const UserCard = ({avatar, first_name, last_name, employment}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return ( 
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div 
                className="bg-white rounded-md h-75 w-50" 
                onMouseEnter={()=>setIsFlipped(prevIsFlipped => !prevIsFlipped)}
            >
                <img src={avatar} alt="User Avatar" />
                <p>Name: {`${first_name} ${last_name}`}</p>
                <p>Title: {employment.title}</p>
            </div>
            <div 
                className="bg-white text-center rounded-md h-75 w-50" 
                onMouseEnter={()=>setIsFlipped(prevIsFlipped => !prevIsFlipped)}
            >
                More Information here...
            </div>
        </ReactCardFlip>
    );
}
 
export default UserCard;