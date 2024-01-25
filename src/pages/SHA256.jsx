import React,{useState,useRef} from 'react';
import {SHA256 as sha256} from 'crypto-js';

function SHA256()
{
    var [s,update]=useState("")
    var h=useRef("");
    var res=useRef("")
    var ns=useRef("");

    React.useEffect(
        ()=>{
            h.current=sha256(ns.current)
            res.current="The hash value of the string "+ns.current+" is "+h.current
            ns.current===""? document.getElementById("output").innerHTML="" : document.getElementById("output").innerHTML=res.current
        }
    )

    return(
        <>
        <h2>SHA-256 Hashing Algorithm Selected</h2>
        <b>Enter text string below:</b><br/>
        <input id='str' type='text'/>
        <button onClick={()=>{ns.current=document.getElementById("str").value;update(ns.current);}}>Submit</button><br/>
        <h3 id='output'></h3>
        </>
    )

    
}

export default SHA256;

