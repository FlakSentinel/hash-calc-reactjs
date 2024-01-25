import React,{useState,useRef} from 'react';
import {MD5 as md5} from 'crypto-js';

function MD5()
{
    var [s,update]=useState("")
    var h=useRef("");
    var res=useRef("")
    var ns=useRef("");

    React.useEffect(
        ()=>{
            h.current=md5(ns.current)
            res.current="The hash value of the string "+ns.current+" is "+h.current
            console.log(res.current)
            ns.current===""? document.getElementById("output").innerHTML="" : document.getElementById("output").innerHTML=res.current
        }
    )

    return(
        <>
        <h2>MD5 Hashing Algorithm Selected</h2>
        <b>Enter text string below:</b><br/>
        <input id='str' type='text'/>
        <button onClick={()=>{ns.current=document.getElementById("str").value;update(ns.current);}}>Submit</button><br/>
        <h3 id='output'></h3>
        </>
    )

    
}

export default MD5;

