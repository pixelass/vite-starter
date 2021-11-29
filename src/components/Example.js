import { createElement } from '../lib/dom.js'
import './Example.css'

export default function Example({ text }) {
  const el = createElement('section', {
    className: 'Example',
    innerText: text,
  })

  return el
}
