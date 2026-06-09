import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';


const About: React.FC = () => {
    const [searchParams] = useSearchParams();

    useEffect(()=>{
        // try the url with about?q=react&lang=en
        console.log(searchParams.get('q'));
        console.log(searchParams.get('lang'));
    },[])
 return (
   <div>
     <h1>About Page</h1>
     <p>Learn more about us on this page.</p>
   </div>
 );
};


export default About;
