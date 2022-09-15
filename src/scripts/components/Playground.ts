import PlaygroundData from '../models/playgroundData'
import Round from './Round'

class Playground {
  data: PlaygroundData

  constructor(playgroundData: PlaygroundData) {
    this.data = playgroundData
    new Round(this)
  }
}
export default Playground
