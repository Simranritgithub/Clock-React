import {useEffect,useState} from 'react';
let currenttime = () => {
  const[time,settime]=useState(new Date());
  useEffect(()=>{
    console.log("interval setup");
    const intervalId =setInterval(()=>{
      settime(new Date());
    },1000);
    return ()=>{
      clearInterval(intervalId);
      console.log("cancel interval");
    };
  },[]);
  return (
    <p className="lead">
      
      This is the current time {time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
};
export default currenttime;
