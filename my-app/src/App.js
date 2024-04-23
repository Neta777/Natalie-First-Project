import logo from './logo.svg';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear() // declarative
const newDiv = document.createElement(`div`)
newDiv.className = `App`
const theHeader = document.createElement(`header`)
theHeader.className = `App-header`
const theImg = document.createElement(`img`)
theImg.className = `App-logo`
theImg.alt = "logo"
theImg.src = logo
const edit = document.createElement(`p`)
edit.textContent = 'Edit src/App.js and save to reload.'

const theLink = document.createElement(`a`)
theLink.className = 'App-link'
theLink.href = 'https://reactjs.org'
theLink.target = '_blank'
theLink.rel = 'noopener noreferrer'
theLink.textContent = 'Learn React'

const theYear = document.createElement(`p`)
theYear.textContent = currentYear
document.body.append(newDiv)
newDiv.append(theHeader)
theHeader.append(theImg,edit,theLink,theYear)
}
//imperative
export default App;
