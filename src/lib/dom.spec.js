import {
  createElement,
  getAllBySelector,
  getByDataJs,
  getBySelector,
} from './dom'
import { JSDOM } from 'jsdom'

describe('dom', () => {
  describe('createElement', () => {
    it('creates an element with className', () => {
      const el = createElement('p', { className: 'foo' })
      expect(el.constructor).toBe(HTMLParagraphElement)
      expect(el.classList[0]).toBe('foo')
    })
    it('creates an element with children', () => {
      const el = createElement(
        'ul',
        null,
        createElement('li', null, 'One'),
        createElement('li', null, 'Two')
      )
      expect(el.constructor).toBe(HTMLUListElement)
      expect(el.children[0].constructor).toBe(HTMLLIElement)
      expect(el.children[0].textContent).toBe('One')
      expect(el.children[1].textContent).toBe('Two')
    })
  })

  describe('getBy*, getAllBy*', () => {
    const dom = new JSDOM(`
      <!doctype html>
      <h1 class="heading">JSDOM is a DOM for node</h1>
      <ul data-js="list">
        <li class="one">One</li>
        <li class="two">Two</li>
      </ul>
    `)
    it('getBySelector returns the first found element by selector', () => {
      expect(getBySelector('li', dom.window.document).textContent).toBe('One')
      expect(getBySelector('.two', dom.window.document).textContent).toBe('Two')
    })

    it('getAllBySelector returns all found elements by selector', () => {
      expect(getAllBySelector('li', dom.window.document)).toHaveLength(2)
      expect(getAllBySelector('[class]', dom.window.document)).toHaveLength(3)
    })

    it('getByDataJs first element with [data-js=???]', () => {
      expect(getByDataJs('list', dom.window.document).children).toHaveLength(2)
    })
  })
})
