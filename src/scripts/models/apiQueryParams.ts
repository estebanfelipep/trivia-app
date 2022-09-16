import DifficultyLevels from './difficultyLevels'
export default interface ApiQueryParams {
  amount: number
  category: number
  difficulty: DifficultyLevels
  type: 'multiple'
}
