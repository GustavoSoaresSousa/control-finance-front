import styled from 'styled-components';

export const BarChartConteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width:100%;
  .bar-chart{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 50%;
    min-width: 90%;
    margin: 22px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 8px;
  }
  .details-months{
    max-height: 50%;
    min-width: 90%;
    margin: 22px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 8px;
  }
`