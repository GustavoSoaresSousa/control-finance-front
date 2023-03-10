import React, { useState } from "react";
import { DashboardConteiner } from "../styles/dashboardStyle";
import { SideBar } from "../components/sidebar";
import { EvolutionCharts } from "../components/evolutionChart";
import { Doughnut } from "react-chartjs-2";
import { DoughnutChart } from "../components/doughnutChart";


export function Dashboard() {
  return (
    <DashboardConteiner>
      <SideBar />
      <div className="charts-conteiner">
        <EvolutionCharts />
        <DoughnutChart />
      </div>
    </DashboardConteiner>
  )
}