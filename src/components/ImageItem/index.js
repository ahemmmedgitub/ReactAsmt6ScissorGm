import {ButtonImage, ClickedImage} from '../../StyledComponents'

const ImageItem = props => {
  const {eachImage, getRemainingImg} = props
  const {imageUrl, id} = eachImage

  let dataTestId = 'rockButton'

  if (id === 'ROCK') {
    dataTestId = 'rockButton'
  } else if (id === 'SCISSORS') {
    dataTestId = 'scissorsButton'
  } else if (id === 'PAPER') {
    dataTestId = 'paperButton'
  }

  const sendClickedImgId = () => {
    getRemainingImg(id, dataTestId)
  }

  return (
    <ButtonImage onClick={sendClickedImgId} data-testid={dataTestId}>
      <ClickedImage src={imageUrl} alt={id} />
    </ButtonImage>
  )
}

export default ImageItem
