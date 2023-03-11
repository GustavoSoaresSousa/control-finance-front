import React from "react";
import { useFinance } from "../hooks/useFinance";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useNavigate } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);


export function DoughnutChart() {
  const {sumOfAllRevenues, sumOfAllExpenses, sumOfAllLeisure, sumOfAllInvestments, months} = useFinance();
  const navigate  = useNavigate();

  return (
    <div className="doughnut-charts-conteiner">
      <div className="doughnut-chart">
        <h4>Média de cada Receita</h4>
        <Doughnut 
          onClick={() => navigate('/details')}
          options={{
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    return;
                  }
                }
              }
            }
          }}
          data={{
            labels: ['Salario', 'Outras Receitas'],
            datasets: [
              {
                data: 
                [
                  sumOfAllRevenues.somaSalario / months.length,
                  sumOfAllRevenues.somaOutrasReceitas / months.length
                ],
                backgroundColor:
                  [
                    '#00E3CC',
                    '#32A89C',
                  ],
              }
            ]
          }}>
        </Doughnut>
      </div>

      <div className="doughnut-chart">
        <h4>Média de cada Despesa</h4>
        <Doughnut
          onClick={() => navigate('/details')}
          options={{
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    return;
                  }
                }
              }
            }
          }}

          data={{
            labels: ['Condominio', 'Aluguel', 'Transporte',
              'Alimentação', 'Luz', 'Agua', 'Internet',
              'Academia', 'Saude', 'Cartão',
              'Diarista', 'Escola', 'Empréstimo',
              'Celular', 'Plano de Saúde', 'Supermercado', 'Outros'],
            datasets: [
              {
                data: [
                sumOfAllExpenses.somaCondominio / months.length, sumOfAllExpenses.somaAluguel / months.length, sumOfAllExpenses.somaTransporte / months.length,
                sumOfAllExpenses.somaAlimentacaoDespesa / months.length, sumOfAllExpenses.somaLuz / months.length, sumOfAllExpenses.somaAgua / months.length,
                sumOfAllExpenses.somaInternet / months.length, sumOfAllExpenses.somaAcademia / months.length, sumOfAllExpenses.somaSaude / months.length,
                sumOfAllExpenses.somaCartao / months.length, sumOfAllExpenses.somaDiarista / months.length, sumOfAllExpenses.somaEscola / months.length,
                sumOfAllExpenses.somaEmprestimo / months.length, sumOfAllExpenses.somaCelular / months.length, sumOfAllExpenses.somaPlanoDeSaude / months.length,
                sumOfAllExpenses.somaSupermercado / months.length, sumOfAllExpenses.somaOutrosDespesas / months.length
                ],
                backgroundColor:
                  [
                    '#00E3CC',
                    '#32A89C',
                    '#0b302c',
                    '#00635A',
                    '#182625',
                    '#28403D',
                    '#2F3D40',
                    '#3D5A73',
                    '#105057',
                    '#898C8B',
                    '#FF81D0',
                    '#400036',
                    '#919151',
                    '#0FC2C0',
                    '#023535',
                    '#008F8C',
                    '#015958'
                  ],
              }
            ]
          }}>
        </Doughnut>
      </div>

      <div className="doughnut-chart">
        <h4>Média de gastos em Lazer</h4>
        <Doughnut
          onClick={() => navigate('/details')}
          options={{
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    return;
                  }
                }
              }
            }
          }}
          data={{
            labels: ['Aliment.', 'Assinaturas', 'Festas/Bares', 'Hobbies', 'Confraternização', 'Outros'],
            datasets: [
              {
                data: 
                [
                  sumOfAllLeisure?.somaAlimentacao / months.length, sumOfAllLeisure?.somaAssinatura / months.length,
                  sumOfAllLeisure?.somaFesta / months.length, sumOfAllLeisure?.somaHobbies / months.length,
                  sumOfAllLeisure?.somaConfraternizacao / months.length, sumOfAllLeisure?.somaOutros / months.length
                ],
                backgroundColor:
                  [
                    '#00E3CC',
                    '#32A89C',
                    '#0b302c',
                    '#00635A',
                    '#024059',
                    '#000000',
                  ],
              }
            ]
          }}>
        </Doughnut>
      </div>
      <div className="doughnut-chart">
        <h4>Total de Investimentos</h4>
        <Doughnut
          onClick={() => navigate('/details')}
          options={{
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    return;
                  },

                }
              }
            }
          }}
          data={{
            labels: ['Educação', 'Investimentos', 'Reserva De Emergência'],
            datasets: [
              {
                data: [sumOfAllInvestments.somaEducacao, sumOfAllInvestments.somaInvestimentos, sumOfAllInvestments.somaReserva],
                backgroundColor:
                  [
                    '#00E3CC',
                    '#32A89C',
                    '#0b302c',
                    '#00635A'
                  ],
              }
            ]
          }}>
        </Doughnut>
      </div>
    </div>
  )
}