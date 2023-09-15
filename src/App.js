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
  PlayerNameAndImageContainer,
  Names,
  ButtonImage,
  ResultImage,
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
    const {intialList, score} = this.state
    const opponentRandomNumber = Math.ceil(Math.random() * 3) - 1

    const opponentImageId = intialList[opponentRandomNumber].imageUrl

    if (opponentImageId === intialList[0].imageUrl) {
      this.setState({
        textResult: 'IT IS DRAW',
      })
    } else if (opponentImageId === intialList[1].imageUrl) {
      this.setState({
        textResult: 'YOU WON',
        score: score + 1,
      })
    } else if (opponentImageId !== intialList[1].imageUrl) {
      this.setState({
        textResult: 'YOU LOSE',
        score: score - 1,
      })
    }

    this.setState({
      myImage: intialList[0].imageUrl,
      opponentImage: opponentImageId,
      resultCart: false,
    })
  }

  onClickScissorBtn = () => {
    const {intialList, score} = this.state
    const opponentRandomNumber = Math.ceil(Math.random() * 3) - 1

    const opponentImageId = intialList[opponentRandomNumber].imageUrl

    if (opponentImageId === intialList[1].imageUrl) {
      this.setState({
        textResult: 'IT IS DRAW',
      })
    } else if (opponentImageId === intialList[2].imageUrl) {
      this.setState({
        textResult: 'YOU WON',
        score: score + 1,
      })
    } else if (opponentImageId !== intialList[2].imageUrl) {
      this.setState({
        textResult: 'YOU LOSE',
        score: score - 1,
      })
    }

    this.setState({
      myImage: intialList[1].imageUrl,
      opponentImage: opponentImageId,
      resultCart: false,
    })
  }

  onClickPaperBtn = () => {
    const {intialList, score} = this.state
    const opponentRandomNumber = Math.ceil(Math.random() * 3) - 1

    const opponentImageId = intialList[opponentRandomNumber].imageUrl

    if (opponentImageId === intialList[2].imageUrl) {
      this.setState({
        textResult: 'IT IS DRAW',
      })
    } else if (opponentImageId === intialList[0].imageUrl) {
      this.setState({
        textResult: 'YOU WON',
        score: score + 1,
      })
    } else if (opponentImageId !== intialList[0].imageUrl) {
      this.setState({
        textResult: 'YOU LOSE',
        score: score - 1,
      })
    }

    this.setState({
      myImage: intialList[2].imageUrl,
      opponentImage: opponentImageId,
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
          <PlayerNameAndImageContainer>
            <Names>You</Names>
            <ResultImage
              src={myImage}
              alt="your choice"
              className="image-result"
            />
          </PlayerNameAndImageContainer>
          <PlayerNameAndImageContainer>
            <Names>Opponent</Names>
            <ResultImage
              src={opponentImage}
              alt="opponent choice"
              className="image-result"
            />
          </PlayerNameAndImageContainer>
        </ResultContainer>
        <ResultTest>{textResult}</ResultTest>
        <PlayAgainBtn type="button" onClick={this.playAgain}>
          PLAY AGAIN
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
            <ButtonImage
              onClick={this.getTwoRandomResults}
              data-testid="rockButton"
            >
              <img
                src={intialList[0].imageUrl}
                alt={intialList[0].id}
                className="image-css"
              />
            </ButtonImage>
            <ButtonImage
              onClick={this.onClickScissorBtn}
              data-testid="scissorsButton"
            >
              <img
                src={intialList[1].imageUrl}
                alt={intialList[1].id}
                className="image-css"
              />
            </ButtonImage>
          </RockAndScissorContainer>
          <ButtonImage onClick={this.onClickPaperBtn} data-testid="paperButton">
            <img
              src={intialList[2].imageUrl}
              alt={intialList[2].id}
              className="paper-img"
            />
          </ButtonImage>
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
            <ListItems>Rock Paper Scissors</ListItems>
          </TextContainer>
          <ScoreContainer>
            <ScoreText fontFamily="Bree Serif">Score</ScoreText>
            <ScoreText fontFamily="Roboto">{score}</ScoreText>
          </ScoreContainer>
        </ScoreTextContainer>
        {resultCart ? this.playCart() : this.displayResultCart()}
      </AppContainer>
    )
  }
}

export default App
