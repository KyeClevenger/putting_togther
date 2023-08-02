import React, {useState} from 'react';


const PersonCard = (props) => {
    const{lastName, firstName, age, hairColor} =props
    const[realAge, setrealAge] =useState(age)

    const anotheryear =() => {
        setrealAge(realAge + 1)
    }
return (
    <div>
        <h1 style={{color: "red"}}>Instructor {lastName}, {firstName}</h1>
        <p>Age: {realAge}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={(anotheryear)}>Happy Birthday</button>
    </div>
    );
}

export default PersonCard;