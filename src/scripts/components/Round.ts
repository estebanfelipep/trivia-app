import Playground from './Playground'
import Question from './Question'

class Round {
  constructor(currentPlayground: Playground) {
    const initialEndPoint = this.getRoundData(
      currentPlayground.data.initialEndPoint,
    )
    new Question(initialEndPoint)
  }

  getRoundData(endpoint: string) {
    console.log(endpoint)
  }
}
export default Round
