interface ApiResponse {
  responds_code: number
  results: ApiResponseQuestion[]
}

interface ApiResponseQuestion {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export default ApiResponse
