export interface Receitas {
  salario: number;
  outrasReceitas: number;
}

export interface Despesas {
  condominio: number;
  aluguel: number;
  transporte: number;
  alimentacao: number;
  luz: number;
  agua: number;
  internet: number;
  academia: number;
  saude: number;
  cartaoDeCredito: number;
  diarista: number;
  escola : number;
  emprestimo: number;
  celular: number;
  planoDeSaude: number;
  supermercado: number;
  outros: number;
}

export interface Lazer {
  alimentacao: number;
  assinaturasMensais: number;
  festasOuBares: number;
  hobbies: number;
  confraternizacao: number;
  outros: number;
}

export interface Investimentos {
  educacao: number;
  investimentos: number;
  reservaDeEmergencia: number;
}

export interface IFinance {

  _id?: string;
  receitas: Receitas[]
  despesas: Despesas[]
  lazer: Lazer[]
  investimentos: Investimentos[]
  mes: MES
  ano: number
  user: string;
}


export enum MES {
  JAN = '01',
  FEV = '02',
  MAR = '03',
  ABR = '04',
  MAI = '05',
  JUN = '06',
  JUL = '07',
  AGO = '08',
  SET = '09',
  OUT = '10',
  NOV = '11',
  DEZ = '12'
}
