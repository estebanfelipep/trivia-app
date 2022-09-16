import Modal from './Modal'
import CatData from '../models/catData'
import Playground from './Playground'
import TriviaApp from './TriviaApp'

class ChooseCategory {
  selectors = {
    form: '#chooseCat',
    playgroundContainer: '#playground',
  }

  form: HTMLElement
  playgroundContainer: HTMLElement

  formContent = ''

  constructor(catsArray: CatData[]) {
    this.setFormOptions(catsArray)
    this.setDomElementsVars()
    this.createForm()
    this.setEvents()
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
        <input class="radio__input" type="radio" name="${TriviaApp.catsFormOptionName}" id="${catData.id}" data-title="${catData.title}" >
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

  createForm() {
    this.form.innerHTML = this.formContent
  }

  setEvents() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault()
      this.handleSubmit()
    })
  }

  handleSubmit() {
    const chosenCat = this.getChosenCat()
    if (!chosenCat) return

    const playgroundStartData = {
      catId: chosenCat.id,
      catTitle: chosenCat.title,
    }

    new Playground(playgroundStartData)

    Modal.open()
    setTimeout(() => {
      this.playgroundContainer.classList.add('active')
      Modal.setContent(this.playgroundContainer)
    }, 2000)
  }

  getChosenCat() {
    const chooseCatOptions = document.getElementsByName(
      TriviaApp.catsFormOptionName,
    )
    const chosenCatData: Partial<{
      id: number
      title: string
    }> = {}

    for (let i = 0; i < chooseCatOptions.length; i++) {
      if ((chooseCatOptions[i] as HTMLInputElement).checked) {
        chosenCatData.id = +chooseCatOptions[i].id
        chosenCatData.title = chooseCatOptions[i].dataset.title
      }
    }
    if (!chosenCatData.id || !chosenCatData.title) return false
    return chosenCatData
  }
}

export default ChooseCategory
