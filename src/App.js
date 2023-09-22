import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import ImageItem from './components/ImageItem/index'

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

  getRemainingImg = id => {
    const {intialList, score} = this.state

    const opponentRandomNumber = Math.ceil(Math.random() * 3) - 1
    const opponentImageId = intialList[opponentRandomNumber].id

    const filterImage = intialList.filter(item => item.id === id)

    if (id === 'ROCK') {
      if (opponentImageId === id) {
        this.setState({
          textResult: 'IT IS DRAW',
        })
      } else if (opponentImageId === intialList[1].id) {
        this.setState({
          textResult: 'YOU WON',
          score: score + 1,
        })
      } else if (opponentImageId !== intialList[1].id) {
        this.setState({
          textResult: 'YOU LOSE',
          score: score - 1,
        })
      }
    } else if (id === 'SCISSORS') {
      if (opponentImageId === id) {
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
    } else if (id === 'PAPER') {
      if (opponentImageId === id) {
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
    }
    this.setState({
      myImage: filterImage[0].imageUrl,
      opponentImage: intialList[opponentRandomNumber].imageUrl,
      resultCart: false,
    })
  }

  playAgain = () => {
    this.setState({resultCart: true})
  }

  GameResultView = () => {
    const {myImage, opponentImage, textResult} = this.state

    return (
      <AppContainer>
        <ResultContainer>
          <PlayerNameAndImageContainer>
            <Names>You</Names>
            <ResultImage src={myImage} alt="your choice" />
          </PlayerNameAndImageContainer>
          <PlayerNameAndImageContainer>
            <Names>Opponent</Names>
            <ResultImage src={opponentImage} alt="opponent choice" />
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
            {intialList.map(eachImage => (
              <ImageItem
                getRemainingImg={this.getRemainingImg}
                eachImage={eachImage}
                key={eachImage.id}
              />
            ))}
          </RockAndScissorContainer>
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
        {resultCart ? this.playCart() : this.GameResultView()}
      </AppContainer>
    )
  }
}

export default App
