import React, {useState} from "react";
import { CardConteiner } from "../styles/cardStyle";
import { myApi } from "../services/myApi";

export function CardRegisters() {
  const [finance, setFinance] = useState([])
  async function getFinance(): Promise<void>{
    const response = (await myApi.get('/finance/findAll')).data
    if(response){
      setFinance(response)
    }
  }
  return (
    <div className="d-flex flex-row p-5">

        <div className="card col-sm-2 m-3 p-2">
          <div className="card-body text-center">
            <h5 className="card-title">Mouth/Year</h5>
            <p className="card-text">See More</p>
          </div>
        </div>

        <div className="card col-sm-2 m-3 p-2">
          <div className="card-body text-center">
            <h5 className="card-title">New Register</h5>
            <p className="card-text">+</p>
          </div>
        </div>

    </div>
  )
}                                                        