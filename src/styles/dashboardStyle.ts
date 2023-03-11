import styled from "styled-components";

export const DashboardConteiner = styled.div`
  display: flex;
  max-width: 80vw;
  .charts-conteiner{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 18px;

    .evolution-chart{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center; 
      width: 100%;
      height: 50vh;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
      border-radius: 8px;
      padding: 18px;

      .line-chart{
        width: 50%;
        padding: 12px;
      }

      .vertical-bar-chart-and-linear-scale-chart{
        width: 50%;
        padding: 12px;
        .vertical-bar-chart{
          
        }
      }
 
    }    
    .doughnut-charts-conteiner{
      display: flex;
      justify-content: space-between;

      .doughnut-chart{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: 12px;
        padding: 8px;

        min-height: 40vh;
        max-height: 100%;
        width: 40vw;

        box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        border-radius: 8px;
      }

      .doughnut-chart:hover{
        cursor: pointer;
      }
    }
  }
`