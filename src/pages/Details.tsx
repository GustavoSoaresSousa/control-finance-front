import React from 'react';
import { BarChartComponent } from '../components/barChartComponent';
import { SideBar } from '../components/sidebar';

export function Details(){
  return (
    <div style={{display: 'flex'}}>
      <SideBar />
      <BarChartComponent />
    </div>
  )
}