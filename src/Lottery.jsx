import { useState } from "react";
import {genTicket,sum} from "./helper"
import Ticket from "./Ticket.jsx"

export default function Lottery({n=3,winningSum=15}){
    let[ticket,setTicket]=useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum

let buyTicket =()=>{
    setTicket(genTicket(n))
}

    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br></br>
            <button style={{backgroundColor:" #FF474C"}} onClick={buyTicket}>Buy new ticket</button>
            &nbsp;
            &nbsp;
            <h3>{isWinning && "Congratulations, you won"}</h3>
        </div>
    )
}