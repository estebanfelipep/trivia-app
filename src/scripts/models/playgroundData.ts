import DifficultyLevels from './difficultyLevels'
export default interface PlaygroundData
  extends PlaygroundDefaultData,
    PlaygroundStartData {}

export interface PlaygroundDefaultData {
  totalAttempts: number
  availableAttempts: number
  difficultyLevels: DifficultyLevels[]
  currentDifficultyLevel: number
}

export interface PlaygroundStartData {
  catTitle: string
  catId: number
}
