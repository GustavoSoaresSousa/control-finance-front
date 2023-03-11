import React from 'react';
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
import { BarChartConteiner } from '../styles/barStyle';


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


const nameMonths: { [key: string]: string } = {
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


export function BarChartComponent() {
  const { months } = useFinance();
  const startIdx = Math.max(months.length - 12, 0)

  return (
    <BarChartConteiner>
      <div className="bar-chart">
        <h4>Evolução em detalhes</h4>
        <Bar 
          style={{width: ''}}
          data={{
          labels: months.map(month => nameMonths[month]).slice(startIdx),
          datasets: [
            {
              data: [1, 2, 3, 4],
              label: '',
              backgroundColor: '#00CCC0'
            },
            {
              data: [1, 2, 3, 4],
              label: '',
              backgroundColor: '#FF4858'
            },
            {
              data: [1, 2, 3, 4],
              label: '',
              backgroundColor: '#72F2EB'
            },
            {
              data: [1, 2, 3, 4],
              label: '',
              backgroundColor: '#1B7F79'
            },
          ],
        }}>
        </Bar>
      </div>
      <div className='details-months'>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/23</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>text</td>
              </tr>
              <tr>
                <td>02/23</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
                <td>layout</td>
              </tr>
              <tr>
                <td>03/23</td>
                <td>data</td>
                <td>rich</td>
                <td>dashboard</td>
                <td>tabular</td>
              </tr>
              <tr>
                <td>04/24</td>
                <td>information</td>
                <td>placeholder</td>
                <td>illustrative</td>
                <td>data</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </BarChartConteiner>
  )
}