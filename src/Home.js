import { useState } from "react";

const Home = () => {

       // let name = 'mario';

       const [name, setName] = useState('mario');
       canst [AbstractRange, setAge] = useState(25);

        const handleClick = ()=> {
                setName("Luigi");
                setAge(30);
        }


        return ( 
                <div className="home">
                        <h2>HomePage</h2>
                        <p>{name} is {age} years old</p>
                        <button onClick={handleClick}>Click Me</button> 
                </div>
         );
} 
 
export default Home;