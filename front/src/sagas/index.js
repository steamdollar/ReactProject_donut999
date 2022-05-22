import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import adminSaga from '././admin/adminSaga';
import adminStoreSaga from './admin/adminStoreSaga'
import adminStoreUpSaga from './admin/adminStoreUpSaga'
import adminStoreDelSaga from './admin/adminStoreDelSaga';
import adminBlackSaga from './admin/adminBlackSaga';
import adminNewBlackSaga from './admin/adminNewBlackSaga';
import registerSaga from './registerSaga';
import stationSaga from './stationSaga';

/*  review CRUD  */
import reviewSaga from './reviewSaga.js'
import createReviewSaga from './review/createReviewSaga.js';
import deleteReviewSaga from './review/deleteReviewSaga.js'



export default function* rootSaga() {

    yield all([
        // userSaga(),
        adminSaga(),
        adminStoreSaga(),
        adminStoreUpSaga(),
        adminStoreDelSaga(),
        adminBlackSaga(),
        adminNewBlackSaga(),
        registerSaga(),
        reviewSaga(),
        createReviewSaga(),
        deleteReviewSaga(),
        stationSaga()
    ]);
    
}