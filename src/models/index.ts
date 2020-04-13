import ArticalStore from './Article'
export function dispatch(action: any) {
  switch (action.type) {
    case 'UPDATE_ARTICLE_DETAIL':
      ArticalStore.state.articelDetail = action.payload
      break
    case 'UPDATE_ARTICLE_LIST':
      ArticalStore.state.articleList = action.payload
      break
    default:
      break
  }
}