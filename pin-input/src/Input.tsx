import { type } from "@testing-library/user-event/dist/type"
import './App.css'
import React , {useRef} from 'react'

   type  Otp = {
    otpinput:number
   }
 
 
 export  const Input:any   = ({otpinput}:Otp)=>{
     const inpuRed = useRef<HTMLInputElement[]>([])
      console.log(inpuRed.current.values)

    return (<>
      <div    className="main">
      {new Array(otpinput).fill(1).map((_,index)=>(
       
           <input  key={index}
 onKeyUp={(e:any)=>{
         if(e.code==="Backspace"){
            if(index>0 && index<5){
            

            inpuRed.current[index-1].focus();
            inpuRed.current[index-1].select();}
         } else {
             if(index>=0 && index<4){
                console.log(index)
             inpuRed.current[index+1].focus();}
         }
     
 }}
 ref={(element)=>{
    
    if(inpuRed.current && element){
        inpuRed.current[index]=element
    }
}}  className="otp"  type={"text"} maxLength={1} />
      
  
))}
      </div>
     
    </>)
      
  }