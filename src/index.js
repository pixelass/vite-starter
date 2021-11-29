import Example from './components/Example'
import { getBySelector } from './lib/dom'
import './styles/index.css'

const example = Example('Vite Starter')

getBySelector('#app').append(example)
