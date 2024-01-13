// import React, {useState} from 'react'
// import profile from './img/profile.jpg'
// import real from './img/real.jpg'

// export default function State() {
//     const[pic,setPic] = useState(real);
//     const changeImg =  real ? profile : real;   
    
//     function change(){
//             setPic(changeImg);
//             console.log('change')
//     }

//   return (
//     <div>
//         <h1>State Management</h1>
//         <img src={changeImg} />
//         <button onClick={change}>Change</button>

//     </div>
//   )
// }
import React, {useState} from 'react'
import profile from './img/profile.jpg'
import real from './img/real.jpg'

export default function State() {
    const[pic,setPic] = useState(true);
    // const[text,setText] =useState('profile');
    // setText(
        
    // )
    const changeImg =  pic ? profile : real;   
    
    function change(){
            setPic(!pic);
            console.log('change')
    }

  return (
    <div>
        <h1>State Management</h1>
        <img src={changeImg} />
        <button onClick={change}>Change</button>

    </div>
  )
}