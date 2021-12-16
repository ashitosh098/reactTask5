import { useState } from "react";
import Card from "./card";


export default function Dashboard() {

    let cardDetails =[
        {
            plan: "Earnings (Monthly)",
            color: "primary",
            currency: "$",
            value: 40000,
            icon: <i className="fas fa-calendar fa-2x text-gray-300"></i>
        },
        {
            plan: "Earnings (Annual)",
            color: "success",
            currency: "$",
            value: 215000,
            icon: <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
        },
        {
            plan: "Tasks",
            color: "info",
            value: 50,
            icon: <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
        },
        {
            plan: " Pending Requests",
            color: "warning",
            value: 18,
            icon: <i class="fas fa-comments fa-2x text-gray-300"></i>
        }
    ]
    const [cardValue,setCardValue] = useState("");
    let displayCardValue = (value)=>{
        setCardValue(value);
    }
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard </h1>
        <span
          
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
        </span>
      </div>

      <div className="row">
        {
            cardDetails.map((item)=>{
                return<Card data={item} handleCard={displayCardValue}></Card>
            })
        }
      </div>
      <h3>{cardValue}</h3>
    </>
  );
}
