import PlaygroundData, {
  PlaygroundDefaultData,
  PlaygroundStartData,
} from '../models/playgroundData'
// import Round from './Round'

class Playground {
  startData: PlaygroundDefaultData = {
    totalAttempts: 3,
    availableAttempts: 3,
    difficultyLevels: ['easy', 'medium', 'hard'],
    currentDifficultyLevel: 0,
  }
  data: PlaygroundData

  constructor(playgroundData: PlaygroundStartData) {
    this.data = { ...this.startData, ...playgroundData }

    console.log(this.data)

    // new Round(this)
  }
}
export default Playground
