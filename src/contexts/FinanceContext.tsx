import React, { ReactNode, createContext, useEffect, useState } from "react";
import { IDataTransformed } from "../interface/IDataTransformed";
import { IFinance } from "../interface/IFinance";
import { ISumOfAllExpenses, ISumOfAllInvestiments, ISumOfAllLeisure, ISumOfAllRevenues } from "../interface/ISumOfRegisters";
import { myApi } from "../services/myApi";

export const FinanceContext = createContext<FinanceType>({} as FinanceType)

export interface FinanceType {
  finance: IFinance[];
  setFinance: (data: IFinance[]) => void;

  revenues: number[];
  expenses: number[];
  leisures: number[];
  investments: number[];
  months: string[];

  sumOfAllRevenues: ISumOfAllRevenues;
  sumOfAllExpenses: ISumOfAllExpenses;
  sumOfAllLeisure: ISumOfAllLeisure;
  sumOfAllInvestments: ISumOfAllInvestiments;
}

type FinanceContextProviderProps = {
  children: ReactNode;
}

export function FinanceContextProvider(props: FinanceContextProviderProps){
  const [ finance, setFinance ] = useState<IFinance[]>([])

  const [revenues, setRevenues] = useState<number[]>([]);
  const [expenses, setExpenses] = useState<number[]>([]);
  const [leisures, setLeisures] = useState<number[]>([]);
  const [investments, setInvestments] = useState<number[]>([]);
  const [months, setMonths] = useState<string[]>([]);

  const [sumOfAllRevenues, setSumOfAllRevenues] = useState<ISumOfAllRevenues>({ somaSalario: 0, somaOutrasReceitas: 0 })
  const [sumOfAllExpenses, setSumOfAllExpenses] = useState<ISumOfAllExpenses>({
    somaCondominio: 0, somaAluguel: 0, somaTransporte: 0, somaAlimentacaoDespesa: 0,
    somaLuz: 0, somaAgua: 0, somaInternet: 0,
    somaAcademia: 0, somaSaude: 0, somaCartao: 0,
    somaDiarista: 0, somaEscola: 0, somaEmprestimo: 0,
    somaCelular: 0, somaPlanoDeSaude: 0, somaSupermercado: 0,
    somaOutrosDespesas: 0
  })
  const [sumOfAllLeisure, setSumOfAllLeisure] = useState<ISumOfAllLeisure>({
    somaAlimentacao: 0, somaAssinatura: 0,
    somaConfraternizacao: 0, somaFesta: 0,
    somaHobbies: 0, somaOutros: 0
  })
  const [sumOfAllInvestments, setSumOfAllInvestments] = useState<ISumOfAllInvestiments>({
    somaEducacao: 0,
    somaInvestimentos: 0,
    somaReserva: 0
  });

  
  
  useEffect(() => {
    async function getAllFinanceInDatabase(): Promise<void> {
      const response = (await myApi.get('/finance/findAll')).data
      if(response){
        setFinance(response)
      }
    }
    getAllFinanceInDatabase()
  }, [])


  useEffect(() => {
    function transformedData() {
      const data: IDataTransformed[] = finance.map((data: IFinance) => {
        return {
          totalReceitas: data.receitas[0].salario + data.receitas[0].outrasReceitas,
          totalDespesas: data.despesas[0].condominio + data.despesas[0].aluguel +
            data.despesas[0].transporte + data.despesas[0].alimentacao +
            data.despesas[0].luz + data.despesas[0].agua + data.despesas[0].internet +
            data.despesas[0].academia + data.despesas[0].saude + data.despesas[0].cartaoDeCredito +
            data.despesas[0].diarista + data.despesas[0].escola + data.despesas[0].escola +
            data.despesas[0].emprestimo + data.despesas[0].celular + data.despesas[0].planoDeSaude +
            data.despesas[0].supermercado + data.despesas[0].outros,
          totalLazer: data.lazer[0].alimentacao + data.lazer[0].assinaturasMensais + data.lazer[0].festasOuBares + data.lazer[0].hobbies + data.lazer[0].outros,
          totalInvestimentos: data.investimentos[0].educacao + data.investimentos[0].investimentos + data.investimentos[0].reservaDeEmergencia,
          mes: data.mes
        }
      })
      let allRevenues = [];
      let allExpenses = [];
      let allLeisure = [];
      let allinvestments = [];
      let allMonths = [];

      for (let index in data) {
        allRevenues.push(data[index].totalReceitas)
        allExpenses.push(data[index].totalDespesas)
        allLeisure.push(data[index].totalLazer)
        allinvestments.push(data[index].totalInvestimentos)
        allMonths.push(data[index].mes)
      }
      setRevenues(allRevenues);
      setExpenses(allExpenses);
      setLeisures(allLeisure);
      setInvestments(allinvestments);
      setMonths(allMonths)
    }

    function averageOfAttributes() {

      let salario: number[] = []
      let outrasReceitas: number[] = [];

      let condominio: number[] = []
      let aluguel: number[] = []
      let transporte: number[] = []
      let alimentacaoDespesa: number[] = []
      let luz: number[] = []
      let agua: number[] = []
      let internet: number[] = []
      let academia: number[] = []
      let saude: number[] = []
      let cartao: number[] = []
      let diarista: number[] = []
      let escola: number[] = []
      let emprestimo: number[] = []
      let celular: number[] = []
      let planoDeSaude: number[] = []
      let supermercado: number[] = []
      let outrosDespesas: number[] = []

      let alimentacaoLazer: number[] = [];
      let assinaturas: number[] = [];
      let festas: number[] = [];
      let hobbies: number[] = [];
      let confraternizacao: number[] = [];
      let outrosLazeres: number[] = [];

      let educacao: number[] = []
      let investimentos: number[] = []
      let reserva: number[] = []


      const data = finance.map((data) => {
        for (let index in data.receitas) {
          salario.push(data.receitas[index].salario)
          outrasReceitas.push(data.receitas[index].outrasReceitas)
        }

        for (let index in data.despesas) {
          condominio.push(data.despesas[index].condominio)
          aluguel.push(data.despesas[index].aluguel)
          transporte.push(data.despesas[index].transporte)
          alimentacaoDespesa.push(data.despesas[index].alimentacao)
          luz.push(data.despesas[index].luz)
          agua.push(data.despesas[index].agua)
          internet.push(data.despesas[index].internet)
          academia.push(data.despesas[index].academia)
          saude.push(data.despesas[index].saude)
          cartao.push(data.despesas[index].cartaoDeCredito)
          diarista.push(data.despesas[index].diarista)
          escola.push(data.despesas[index].escola)
          emprestimo.push(data.despesas[index].emprestimo)
          celular.push(data.despesas[index].celular)
          planoDeSaude.push(data.despesas[index].planoDeSaude)
          supermercado.push(data.despesas[index].supermercado)
          outrosDespesas.push(data.despesas[index].outros)
        }

        for (let index in data.lazer) {
          alimentacaoLazer.push(data.lazer[index].alimentacao)
          assinaturas.push(data.lazer[index].assinaturasMensais);
          festas.push(data.lazer[index].festasOuBares);
          hobbies.push(data.lazer[index].hobbies);
          confraternizacao.push(data.lazer[index].confraternizacao);
          outrosLazeres.push(data.lazer[index].outros)
        }

        for (let index in data.investimentos) {
          educacao.push(data.investimentos[index].educacao)
          investimentos.push(data.investimentos[index].investimentos)
          reserva.push(data.investimentos[index].reservaDeEmergencia)
        }
      })

      let somaSalario = 0
      let somaOutrasReceitas = 0

      let somaCondominio = 0;
      let somaAluguel = 0;
      let somaTransporte = 0;
      let somaAlimentacaoDespesa = 0;
      let somaLuz = 0;
      let somaAgua = 0;
      let somaInternet = 0;
      let somaAcademia = 0;
      let somaSaude = 0;
      let somaCartao = 0;
      let somaDiarista = 0;
      let somaEscola = 0;
      let somaEmprestimo = 0;
      let somaCelular = 0;
      let somaPlanoDeSaude = 0;
      let somaSupermercado = 0;
      let somaOutrosDespesas = 0;

      let somaAlimentacao = 0;
      let somaAssinatura = 0;
      let somaFesta = 0;
      let somaHobbies = 0;
      let somaConfraternizacao = 0;
      let somaOutros = 0;

      let somaEducacao = 0;
      let somaInvestimentos = 0;
      let somaReserva = 0;

      for (let index in salario) {
        somaSalario += salario[index];
        somaOutrasReceitas += outrasReceitas[index];
      }

      for (let index in condominio) {
        somaCondominio += condominio[index];
        somaAluguel += aluguel[index];
        somaTransporte += transporte[index];
        somaAlimentacaoDespesa += alimentacaoDespesa[index];
        somaLuz += luz[index];
        somaAgua += agua[index];
        somaInternet += internet[index];
        somaAcademia += academia[index];
        somaSaude += saude[index];
        somaCartao += cartao[index];
        somaDiarista += diarista[index];
        somaEscola += escola[index];
        somaEmprestimo += emprestimo[index];
        somaCelular += celular[index];
        somaPlanoDeSaude += planoDeSaude[index];
        somaSupermercado += supermercado[index];
        somaOutrosDespesas += outrosDespesas[index];
      }

      for (let index in alimentacaoLazer) {
        somaAlimentacao += alimentacaoLazer[index];
        somaAssinatura += assinaturas[index];
        somaFesta += festas[index];
        somaHobbies += hobbies[index];
        somaConfraternizacao += confraternizacao[index];
        somaOutros += outrosLazeres[index];
      }

      for (let index in educacao) {
        somaEducacao += educacao[index];
        somaInvestimentos += investimentos[index];
        somaReserva += reserva[index];
      }
      setSumOfAllRevenues({
        somaSalario,
        somaOutrasReceitas
      });

      setSumOfAllExpenses({
        somaCondominio,
        somaAluguel,
        somaTransporte,
        somaAlimentacaoDespesa,
        somaLuz,
        somaAgua,
        somaInternet,
        somaAcademia,
        somaSaude,
        somaCartao,
        somaDiarista,
        somaEscola,
        somaEmprestimo,
        somaCelular,
        somaPlanoDeSaude,
        somaSupermercado,
        somaOutrosDespesas,
      })

      setSumOfAllLeisure({
        somaAlimentacao,
        somaAssinatura,
        somaFesta,
        somaHobbies,
        somaConfraternizacao,
        somaOutros
      });

      setSumOfAllInvestments({
        somaEducacao,
        somaInvestimentos,
        somaReserva
      })
    }
    transformedData();
    averageOfAttributes();
  }, [finance])

  return(
    <FinanceContext.Provider value={{
      finance, setFinance, revenues, 
      expenses, leisures, investments,
      months, sumOfAllRevenues, sumOfAllExpenses, 
      sumOfAllLeisure, sumOfAllInvestments
    }}>
      {props.children}
    </FinanceContext.Provider>
  )
}