//export { default } from './product'
//export { default } from './auth'

import { all, fork } from "@redux-saga/core/effects";
import productSaga from './product'
import authSaga from './auth'

const rootSagasCurrent = [
    fork(productSaga),
    fork(authSaga),
];


export default function* rootSaga() {
    yield all([
        ...rootSagasCurrent

    ])
}
/* export default function* rootSaga () {
    yield all([
        fork(productSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(authSaga)
    ]);
} */