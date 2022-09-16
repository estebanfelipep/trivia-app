import ChooseCategory from './ChooseCategory'
import CatData from '../models/catData'
import ApiQueryParams from '../models/apiQueryParams'

class TriviaAppClass {
  catsData: CatData[]
  apiEndPointBase = 'https://opentdb.com/api.php'
  catsFormOptionName = 'chooseCat'

  constructor() {
    //
  }

  start(catsData) {
    new ChooseCategory(catsData)
  }

  setEndPoint(queryParams: Partial<ApiQueryParams>) {
    const queryString = Object.keys(queryParams)
      .map((key) => key + '=' + queryParams[key])
      .join('&')

    const endpoint = `${this.apiEndPointBase}?${queryString}`
    console.log(endpoint)
  }
}

const TriviaApp = new TriviaAppClass()
export default TriviaApp
