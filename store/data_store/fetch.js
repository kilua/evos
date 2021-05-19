import { call, put, takeEvery } from 'redux-saga/effects'
import {
  ActionsItems,
  API_ITEMS,
  failureItems,
  loadItemsSuccess,
} from './actions'

// Function Fetch Items
function* loadDataItems(params = {}) {
  try {
    const endpoint = API_ITEMS.URL,
      headers = params.payload.is_server,
      method = 'GET',
      options = { method };

      const response = yield call(fetch, endpoint, options)

    if (response.status >= 200 && response.status < 300) {
      const items = yield response.json()
      const final = items.sort()
      yield put(loadItemsSuccess(final))
    } else {
      throw response
    }
  } catch (err) {
    yield put(failureItems(err))
  }
}

export default function* rootSaga() {
  yield takeEvery(ActionsItems.GET_ITEMS, loadDataItems)
}
