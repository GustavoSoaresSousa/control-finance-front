export interface Receitas {
  salario: number;
  outrasReceitas: number | null;
}

export interface Despesas {
  condominio: number | null;
  aluguel: number | null;
  transporte: number;
  alimentacao: number;
  luz: number;
  agua: number;
  internet: number;
  academia: number | null;
  saude: number | null;
  cartaoDeCredito: number | null;
  diarista: number | null;
  escola : number | null;
  emprestimo: number | null;
  celular: number | null;
  planoDeSaude: number | null;
  supermercado: number;
  outros: number | null;
}

export interface Lazer {
  alimentacao: number | null;
  assinaturasMensais: number | null;
  festasOuBares: number | null;
  hobbies: number | null;
  confraternizacao: number | null;
  outros: number | null;
}

export interface Investimentos {
  educacao: number | null;
  investimentos: number | null;
  reservaDeEmergencia: number | null;
}

export interface IFinance {
  receitas?: Receitas[]
  despesas?: Despesas[]
  lazer?: Lazer[]
  investimentos?: Investimentos[]
}
