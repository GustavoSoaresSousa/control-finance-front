import React, {useState} from "react";
import { CardConteiner } from "../styles/cardStyle";
import { myApi } from "../services/myApi";
import { useNavigate } from 'react-router-dom';
import { useFinance } from "../hooks/useFinance";
import { IFinance } from "../interface/IFinance";

export function CardRegisters() {
  const navigate = useNavigate();
  const { finance } = useFinance();
  console.log(finance)
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', justifyContent: "center"}} className="">

      { 
        finance.map((finance: IFinance) => {
          return <div key={finance._id} className="card col-sm-8 m-3 p-2">
            <div className="card-body text-center">
              <h5 className="card-title">{finance.mes}/{finance.ano}</h5>
              <p className="card-text">See More</p>
            </div>
          </div>
        })
      } 

        <div style={{cursor: 'pointer'}} onClick={() => navigate('/newRegister')} className="card col-sm-8 m-3 p-2">
          <div className="card-body text-center">
            <h5 className="card-title">New Register</h5>
            <p className="card-text">+</p>
          </div>
        </div>

    </div>
  )
}                                                        