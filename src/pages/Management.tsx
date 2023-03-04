import React from "react";
import { CardRegisters } from "../components/cardRegisters";
import { SideBar } from "../components/sidebar";

export function Management(){
  return(
    <>
      <SideBar />
      <CardRegisters />
    </>
  )
}