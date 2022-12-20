import React from 'react'

const Welcome=(props)=>{
    return(
<>
<p>Name:{props.name}</p>
<p>Age:{props.age}</p>
<img width={250} height={250} src={props.img} alt={props.name} />
{/* <p>Hobbies: {props.hobbies.map((hobby) => {

    return <span key={hobby}>{props.hobby} </span>
})
} 
</p> */}
</>
    )
}

export default Welcome