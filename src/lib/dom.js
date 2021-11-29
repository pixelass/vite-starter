export function createElement(elementType, props, ...children) {
  const element = document.createElement(elementType)
  if (props) {
    Object.assign(element, props)
  }
  if (children) {
    element.append(...children)
  }
  return element
}

export function getByDataJs(dataJs, target = document) {
  return target.querySelector('[data-js=' + dataJs + ']')
}

export function getAllByDataJs(dataJs, target = document) {
  return target.querySelectorAll('[data-js=' + dataJs + ']')
}

export function getBySelector(selector, target = document) {
  return target.querySelector(selector)
}

export function getAllBySelector(selector, target = document) {
  return target.querySelectorAll(selector)
}
