import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import './App.css'
import {
  AppContainer,
  ScoreTextContainer,
  TextContainer,
  ListItems,
  ScoreContainer,
  ScoreText,
  PlayImagesContainer,
  RockAndScissorContainer,
  ButtonContainer,
  ButtonItem,
  PopupContainer,
  CloseButton,
  ResultContainer,
  ResultTest,
  PlayAgainBtn,
} from './StyledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    intialList: choicesList,
    showPopup: true,
    myImage: '',
    opponentImage: '',
    score: 0,
    textResult: '',
    resultCart: true,
  }

  onClickCloseButton = () => {
    this.setState(prevState => ({showPopup: !prevState.showPopup}))
  }

  getTwoRandomResults = () => {
    const {intialList} = this.state
    const opponentRandomNumber = Math.ceil(Math.random() * 3) - 1

    const opponentImageId = intialList[opponentRandomNumber].id

    if (opponentImageId === intialList[0].id) {
      this.setState({
        textResult: 'IT IS DRAW',
      })
    } else if (opponentImageId === intialList[1].id) {
      this.setState(prevState => ({
        textResult: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        textResult: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }

    this.setState({
      myImage: intialList[0].imageUrl,
      opponentImage: intialList[opponentRandomNumber].imageUrl,
      resultCart: false,
    })
  }

  onClickScissorBtn = () => {
    const {intialList} = this.state
    const opponentRandomNumber = Math.ceil(Math.random() * 3) - 1

    const opponentImageId = intialList[opponentRandomNumber].id

    if (opponentImageId === intialList[1].id) {
      this.setState({
        textResult: 'IT IS DRAW',
      })
    } else if (opponentImageId === intialList[2].id) {
      this.setState(prevState => ({
        textResult: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        textResult: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }

    this.setState({
      myImage: intialList[1].imageUrl,
      opponentImage: intialList[opponentRandomNumber].imageUrl,
      resultCart: false,
    })
  }

  onClickPaperBtn = () => {
    const {intialList} = this.state
    const opponentRandomNumber = Math.ceil(Math.random() * 3) - 1

    const opponentImageId = intialList[opponentRandomNumber].id

    if (opponentImageId === intialList[2].id) {
      this.setState({
        textResult: 'IT IS DRAW',
      })
    } else if (opponentImageId === intialList[0].id) {
      this.setState(prevState => ({
        textResult: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        textResult: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }

    this.setState({
      myImage: intialList[2].imageUrl,
      opponentImage: intialList[opponentRandomNumber].imageUrl,
      resultCart: false,
    })
  }

  playAgain = () => {
    this.setState({resultCart: true})
  }

  displayResultCart = () => {
    const {myImage, opponentImage, textResult} = this.state

    return (
      <AppContainer>
        <ResultContainer>
          <img src={myImage} alt="my" className="image-result" />
          <img src={opponentImage} alt="opponent" className="image-result" />
        </ResultContainer>
        <ResultTest>{textResult}</ResultTest>
        <PlayAgainBtn type="button" onClick={this.playAgain}>
          Play Again
        </PlayAgainBtn>
      </AppContainer>
    )
  }

  playCart = () => {
    const {intialList, showPopup} = this.state
    return (
      <>
        <PlayImagesContainer>
          <RockAndScissorContainer>
            <img
              src={intialList[0].imageUrl}
              alt={intialList[0].id}
              className="image-css"
              onClick={this.getTwoRandomResults}
            />
            <img
              src={intialList[1].imageUrl}
              alt={intialList[1].id}
              className="image-css"
              onClick={this.onClickScissorBtn}
            />
          </RockAndScissorContainer>
          <img
            src={intialList[2].imageUrl}
            alt={intialList[2].id}
            className="paper-img"
            onClick={this.onClickPaperBtn}
          />
        </PlayImagesContainer>
        <ButtonContainer>
          <Popup
            position="top right"
            modal={showPopup}
            trigger={<ButtonItem type="button">Rules</ButtonItem>}
          >
            {close => (
              <>
                <PopupContainer>
                  <CloseButton onClick={() => close()} type="button">
                    <RiCloseLine />
                  </CloseButton>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="popup-img"
                  />
                </PopupContainer>
              </>
            )}
          </Popup>
        </ButtonContainer>
      </>
    )
  }

  render() {
    const {score, resultCart} = this.state
    return (
      <AppContainer>
        <ScoreTextContainer>
          <TextContainer>
            <ListItems>Rock</ListItems>
            <ListItems>Paper</ListItems>
            <ListItems>Scissors</ListItems>
          </TextContainer>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreText>{score}</ScoreText>
          </ScoreContainer>
        </ScoreTextContainer>
        {resultCart ? this.playCart() : this.displayResultCart()}
      </AppContainer>
    )
  }
}

export default App
