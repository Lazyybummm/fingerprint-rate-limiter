import FingerprintJS from '@fingerprintjs/fingerprintjs';
import axios from 'axios'
import { useEffect, useRef } from 'react';


function App(){
  const printRef=useRef();

  useEffect(()=>{
    async function bleh(){
    const fp=await FingerprintJS.load();
    const result=await fp.get()
    console.log(result.visitorId);
   printRef.current=result.visitorId
    };
    bleh()
  },[])

  async function sendreq(){
    if(!printRef.current){
      console.log("missing key")
    }
    const resp=await axios.post("http://localhost:3000/",{
      key:printRef.current
    })
  }
  return <>
  <button onClick={()=>{sendreq()}}>click to send a request</button></>
}

export default App;