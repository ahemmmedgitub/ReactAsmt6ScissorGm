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
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
  margin-left: 30px;

  @media (max-width: 576px) {
    width: 90px;
  }
`

export const ListItems = styled.h1`
  font-size: 26px;
  font-weight: 700;
  font-family: 'Bree Serif';
  color: #ffffff;

  @media (max-width: 576px) {
    font-size: 20px;
    padding-bottom: 5px;
  }
`
export const ScoreContainer = styled(AppContainer)`
  min-height: auto;
  background-color: #ffffff;
  height: 125px;
  width: 150px;
  border-radius: 5px;
  padding-top: 20px;

  @media (max-width: 576px) {
    height: 100px;
    width: 110px;
    padding-top: 8px;
  }
`
export const ScoreText = styled.p`
  font-size: 26px;
  font-weight: 500;
  font-family: ${props => props.fontFamily};
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
  margin-top: 80px;
  padding-top: 20px;
`
export const RockAndScissorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 550px;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    width: 350px;
  }
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

  @media (max-width: 576px) {
    width: 100%;
  }
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
export const ResultContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 70px;

  @media (max-width: 576px) {
    width: 420px;
  }
`
export const ResultTest = styled.p`
  font-size: 36px;
  font-weight: 700;
  font-family: 'Roboto';
  color: #ffffff;

  @media (max-width: 576px) {
    font-size: 24px;
  }
`
export const PlayAgainBtn = styled(ButtonItem)`
  height: 36px;
  width: 120px;
`
export const PlayerNameAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 200px;
`
export const Names = styled(ScoreText)`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 10px;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`

export const ResultImage = styled.img`
  width: 62%;

  @media (max-width: 576px) {
    width: 60%;
  }
`
export const ButtonImage = styled.button`
  border: none;
  background-color: transparent;
`

export const ClickedImage = styled.img`
  height: 180px;
  width: 180px;

  @media (max-width: 576px) {
    height: 130px;
    width: 130px;
  }
`
