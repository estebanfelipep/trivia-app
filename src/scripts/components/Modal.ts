class ModalClass {
  selectors = {
    domBody: 'body',
    modal: '.modal',
    background: '.modal__background',
    container: '.modal__container',
    loadingModule: '.modal__loading',
    closeButton: '.modal__close',
  }

  domBody: HTMLElement
  modal: HTMLElement
  background: HTMLElement
  container: HTMLElement
  loadingModule: HTMLElement
  closeButton: HTMLElement

  constructor() {
    this.setDomElementsVars()
    this.setEvents()
  }

  setDomElementsVars() {
    for (const prop in this.selectors) {
      this[prop] = document.querySelector(this.selectors[prop])
    }
  }

  setEvents() {
    this.closeButton.addEventListener('click', () => {
      alert('Are you sure? Progress in current round will be lost')
      this.close()
    })
  }

  open() {
    this.domBody.classList.add('noscroll')
    this.modal.classList.add('active')
    this.startLoading()
  }

  close() {
    this.domBody.classList.remove('noscroll')
    this.modal.classList.remove('active')
    this.clearContent()
  }

  startLoading() {
    this.clearContent()
    this.loadingModule.classList.remove('inactive')
    this.appendContent(this.loadingModule)
  }

  stopLoading() {
    this.loadingModule.classList.add('inactive')
  }

  clearContent() {
    this.container.innerHTML = ''
  }

  appendContent(nodeElement: HTMLElement) {
    this.container.appendChild(nodeElement)
  }

  setContent(nodeElement: HTMLElement) {
    this.clearContent()
    this.appendContent(nodeElement)
  }
}

const Modal = new ModalClass()
export default Modal
