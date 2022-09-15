import 'normalize.css'
import './styles/main.scss'
import TriviaApp from './scripts/components/TriviaApp'
import CatData from './scripts/models/catData'

if (module.hot) {
  module.hot.accept()
}
console.log('log from index.ts!')

const triviaCats: CatData[] = [
  {
    id: 1,
    title: 'Computer Science',
    slug: 'science',
    topScore: 10,
  },
  {
    id: 2,
    title: 'History',
    slug: 'history',
    topScore: 20,
  },
  {
    id: 3,
    title: 'Sports',
    slug: 'sports',
    topScore: 40,
  },
  {
    id: 4,
    title: 'Politics',
    slug: 'politics',
    topScore: 20,
  },
  {
    id: 5,
    title: 'Culture',
    slug: 'culture',
    topScore: 60,
  },
  {
    id: 6,
    title: 'Music',
    slug: 'music',
    topScore: 0,
  },
  // {
  //   id: ,
  //   title: ,
  //   slug: ,
  //   topScore:
  // }
]

TriviaApp.start(triviaCats)
