import './styles/main.scss'
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept()
}

const chooseCatForm = document.querySelector('#chooseCat')

chooseCatForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('test')
})

console.log('log from index.ts!')
