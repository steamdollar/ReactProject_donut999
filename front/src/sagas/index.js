import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import adminSaga from '././admin/adminSaga';
import adminStoreSaga from './admin/adminStoreSaga'
import adminStoreUpSaga from './admin/adminStoreUpSaga'
import adminStoreDelSaga from './admin/adminStoreDelSaga';
import adminBlackSaga from './admin/adminBlackSaga';
import adminNewBlackSaga from './admin/adminNewBlackSaga';
import adminDelBlackSaga from './admin/adminDelBlackSaga';
import adminBlackReviewSaga from './admin/adminBlackReviewSaga';
import adminReviewSaga from './admin/adminReviewSaga';
import adminDelReviewSaga from './admin/adminDelReviewSaga';
import registerSaga from './registerSaga';
import stationSaga from './stationSaga';

export default function* rootSaga() {
    yield all([
        // userSaga(),
        adminSaga(),
        adminStoreSaga(),
        adminStoreUpSaga(),
        adminStoreDelSaga(),
        adminBlackSaga(),
        adminNewBlackSaga(),
        adminDelBlackSaga(),
        adminBlackReviewSaga(),
        adminReviewSaga(),
        adminDelReviewSaga(),
        registerSaga(),
        stationSaga()
    ]);
}