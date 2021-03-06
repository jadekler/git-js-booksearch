import { SEARCH_STARTED, SEARCH_SUCCEEDED, SEARCH_FAILED } from '../actions'

export default function search(state = [], action) {
  switch (action.type) {
  case SEARCH_STARTED:
    return state
  case SEARCH_SUCCEEDED:
    const books = action.searchResult.items.map(function(item) {
      return {
        title: item.volumeInfo.title,
        subtitle: item.volumeInfo.subtitle
      }
    })

    return books
  case SEARCH_FAILED:
    console.error('search failed:', action.searchError)
    return state
  default:
    return state
  }
}
