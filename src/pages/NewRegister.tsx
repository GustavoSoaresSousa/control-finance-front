import React from "react";
import { SideBar } from "../components/sidebar";
import { DespesasConteiner } from "../styles/newRegisterStyle";

export function NewRegisterPage() {
  return (
    <div>
      <SideBar />
      <div className="d-flex flex-column">
        <div className="d-flex flex-row p-5">
          <div className="col-sm-3 d-flex flex-column">
            <h2>Receitas</h2>

            <label>Salario</label>
            <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

            <label>Outras Receitas</label>
            <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />
          </div>

          <DespesasConteiner className="col-sm-4 d-flex flex-row">
            
            <div>
              <h2>Despesas</h2>
              <label>Condominio</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Aluguel</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Transporte</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Alimentação</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Luz</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Água</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Internet</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Academia</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />
            </div>

            <div>
              <h2>.</h2>
              <label>Saúde</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Cartão de Crédito</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Diarista</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Escola</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Empréstimo</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Celular</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Plano de Saúde</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Supermercado</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

              <label>Outros</label>
              <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />
            </div>


           
          </DespesasConteiner>

          <hr />

          <div className="col-sm-3 d-flex flex-column">
            <h2>Lazer</h2>

            <label>Alimentação</label>
            <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

            <label>Assinatura Mensais</label>
            <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

            <label>Festas ou Bares</label>
            <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

            <label>Hobbies</label>
            <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

            <label>Confraternização</label>
            <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

            <label>Outros</label>
            <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />
          </div>

          <hr />

          <div className="col-sm-3 d-flex flex-column">
            <h2>Investimentos</h2>

            <label>Educação</label>
            <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

            <label>Investimentos</label>
            <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />

            <label>Reserva de Emergência</label>
            <input className="form-control form-control-sm" style={{ width: 150 }} type="text" />
          </div>
        </div>
        <button type="button" className="btn btn-outline-secondary" style={{ width: 350, alignSelf: 'center' }}>Create</button>
      </div>
      
    </div>
  )
}