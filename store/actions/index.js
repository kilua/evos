import { fork } from 'redux-saga/effects'

import {dispatchItems} from '@/Store/data_store/data_store'

export default function* rootSaga () {

  yield fork(dispatchItems)
}
