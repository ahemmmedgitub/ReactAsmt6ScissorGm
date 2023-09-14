import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  padding-top: 40px;
  padding-bottom: 20px;
`
export const ScoreTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border: 1.5px solid #ffffff;
  width: 70%;
  border-radius: 8px;
  padding: 10px;
  justify-content: space-between;
  padding-right: 40px;
`
export const TextContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const ListItems = styled.li`
  font-size: 26px;
  font-weight: 700;
  font-family: 'Bree Serif';
  color: #ffffff;
  list-style-type: none;
`
export const ScoreContainer = styled(AppContainer)`
  min-height: auto;
  background-color: #ffffff;
  height: 125px;
  width: 150px;
  border-radius: 5px;
  padding-top: 20px;
`
export const ScoreText = styled.p`
  font-size: 26px;
  font-weight: 500;
  font-family: 'Bree Serif';
  color: #223a5f;
  margin-top: 0px;
  margin-bottom: 5px;
`
export const PlayImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 350px;
  align-items: center;
  width: 70%;
  margin-top: 30px;
  padding-top: 20px;
`
export const RockAndScissorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding-right: 10px;
  margin-right: 20px;
`
export const ButtonItem = styled.button`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Bree Serif';
  color: #223a5f;
  background-color: #ffffff;
  border: none;
  height: 32px;
  width: 80px;
  border-radius: 3px;
`
export const PopupContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 50px;
`
export const CloseButton = styled.button`
  align-self: flex-end;
  height: 38px;
  width: 38px;
  background-color: #bfbfbf;
  border: none;
  margin-bottom: 10px;
  font-size: 22px;
`
export const ResultContainer = styled(RockAndScissorContainer)`
  width: 550px;
  justify-content: space-between;
  margin-top: 50px;
`
export const ResultTest = styled.h1`
  font-size: 36px;
  font-weight: 700;
  font-family: 'Roboto';
  color: #ffffff;
`
export const PlayAgainBtn = styled(ButtonItem)`
  height: 36px;
  width: 120px;
`
