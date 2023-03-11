import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { useFinance } from "../hooks/useFinance";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const nameMonths: { [key: string]: string } =  {
  '01': 'Jan',
  '02': 'Fev',
  '03': 'Mar',
  '04': 'Abr',
  '05': 'Mai',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Ago',
  '09': 'Set',
  '10': 'Out',
  '11': 'Nov',
  '12': 'Dez'
}



export function EvolutionCharts() {
  const {revenues, expenses, leisures, investments, months} = useFinance();
  const startIdx = Math.max(months.length - 12, 0)

  return (
    <div className="evolution-chart">
      <div className="line-chart">
        <h4>Receita X Despesas</h4>
        <Line
          options={{

          }}
          data={{
            labels: months.map(month => nameMonths[month]).slice(startIdx),
            datasets: [
              {
                label: 'Receita',
                data: revenues.slice(startIdx),
                fill: true,
                borderColor: '#0F0AA6',
              },
              {
                label: 'Despesa',
                data: expenses.slice(startIdx),
                fill: true,
                borderColor: '#F50600',
                backgroundColor: '#ff0400a7'
              }
            ]
          }}>
        </Line>
      </div>

      <div className="vertical-bar-chart-and-linear-scale-chart">
        <div className="vertical-bar-chart">
          <Bar data={{
            labels: months.map(month => nameMonths[month]).slice(startIdx),
            datasets: [
              {
                data: revenues.slice(startIdx),
                label: 'Receitas',
                backgroundColor: '#00CCC0'
              },
              {
                data: expenses.slice(startIdx),
                label: 'Despesas',
                backgroundColor: '#FF4858'
              },
              {
                data: leisures.slice(startIdx),
                label: 'Lazer',
                backgroundColor: '#72F2EB'
              },
              {
                data: investments.slice(startIdx),
                label: 'Investimestos',
                backgroundColor: '#1B7F79'
              },
            ],

          }}>

          </Bar>
        </div>
      </div>
    </div>

  )
}