import ChooseCategory from './ChooseCategory'
import CatData from '../models/catData'

class TriviaApp {
  catsData: CatData[]

  constructor(catsData) {
    new ChooseCategory(catsData)
  }
}

export default TriviaApp
