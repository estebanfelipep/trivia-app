import Modal from './Modal'
import CatData from '../models/catData'

class ChooseCategory {
  selectors = {
    form: '#chooseCat',
    playground: '#playground',
  }

  form: HTMLElement
  playground: HTMLElement

  formContent: string
  triviaInitialDifficulty: string

  // constructor(catsArray) {
  constructor(catsArray) {
    this.formContent = ''
    this.triviaInitialDifficulty = 'easy'

    this.setFormOptions(catsArray)
    this.setDomElementsVars()
    this.createForm()
    this.setEvents()
  }

  createForm() {
    this.form.innerHTML = this.formContent
  }

  setFormOptions(catsArray: CatData[]) {
    this.formContent += `
      <fieldset>
        <legend class="form__field-title">Choose a category</legend>
        <div class="form__options">
    `
    catsArray.forEach((cat) => {
      this.setrCatFormOption(cat)
    })

    this.formContent += `
      </div>
      </fieldset>
    `
  }

  setrCatFormOption(catData: CatData) {
    const optionField = `
      <div class="form__control radio"> 
        <input class="radio__input" type="radio" name="radio" id="${catData.slug}">
        <div class="radio__card card ">
          <label for="${catData.slug}" class="card__title">${catData.title}</label>
          <p class="card__subtitle">Top score: ${catData.topScore}</p>
        </div>
      </div>
    `

    this.formContent += optionField
  }

  setDomElementsVars() {
    for (const prop in this.selectors) {
      this[prop] = document.querySelector(this.selectors[prop])
    }
  }

  setEvents() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault()
      this.handleSubmit()
    })
  }

  handleSubmit() {
    Modal.open()
    // new Playground(playgroundData)
    setTimeout(() => {
      this.playground.classList.add('active')
      Modal.setContent(this.playground)
    }, 2000)
  }
}

export default ChooseCategory
