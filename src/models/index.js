import ArticalStore from './Article'
export function stateChanger(state, action) {
  switch (action.type) {
    case 'UPDATE_ARTICLE_DETAIL':
      state.state.articelDetail = action.payload
      break
    case 'UPDATE_ARTICLE_LIST':
      state.state.articleList = action.payload
      break
    default:
      break
  }
}

function createStore(state, stateChanger) {
  const listeners = []
  const getState = () => state
  const subscribe = (listener) => {
    listeners.push(listener)
  }
  const dispatch = (action) => {
    stateChanger(state, action)
    listeners.forEach(listener => {
      listener()

    });
  }

  return { getState, dispatch, subscribe }
}

const store = createStore(ArticalStore, stateChanger)
store.subscribe(() => {
  render(store.getState())
})

const render = (state) => {
  console.log("render -> state", state)
  // document.body.innerHTML += (`<p>${JSON.stringify(state)}</p>`)
}
// render(store.getState())
export { store }