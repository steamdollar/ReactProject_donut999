import { Action } from "history"
import { createAction, handleActions } from "redux-actions"

const initialState = { metadata : { loading : false, error : null }, 
    data: [], update:null }

/* get review */
const review_REQUEST = 'REVIEW/REQUEST'
const review_SUCCESS = 'REVIEW/SUCCESS'
const review_FAILURE = 'REVIEW/FAILURE'

export const review_request = createAction(review_REQUEST)
export const review_success = createAction(review_SUCCESS)
export const review_failure = createAction(review_FAILURE)

/* delete review */
const review_delete_REQUEST = 'REVIEW_DELETE/REQUEST'
const review_delete_SUCCESS = 'REVIEW_DELETE/SUCCESS'
const review_delete_FAILURE = 'REVIEW_DELETE/FAILURE'

export const review_delete_request = createAction(review_delete_REQUEST)
export const review_delete_success = createAction(review_delete_SUCCESS)
export const review_delete_failure = createAction(review_delete_FAILURE)

/* update review */

const review_update_START = 'REVIEW_UPDATE/START'
const review_update_PROCEED = 'REVIEW_UPDATE/PROCEED'
const review_update_REQUEST = 'REVIEW_UPDATE/REQUEST'
const review_update_SUCCESS = 'REVIEW_UPDATE/SUCCESS'
const review_update_FAILURE = 'REVIEW_UPDATE/FAILURE'

export const review_update_start = createAction(review_update_START)
export const review_update_proceed = createAction(review_update_PROCEED)
export const review_update_request = createAction(review_update_REQUEST)
export const review_update_success = createAction(review_update_SUCCESS)
export const review_update_failure = createAction(review_update_FAILURE)

/* update review */


/* reducer */
const review = (state=initialState, action) => {
    switch (action.type) {
        case review_REQUEST :
            return {
                ...initialState,
                metadata : {
                    ...state.metadata,
                    loading:true,
                    error: null
                }
            }
        case review_SUCCESS :
            return {
                ...initialState,
                data : [
                    ...state.data,
                    ...action.payload
                ],
                metadata : {
                    ...state.metadata,
                    loading:false,
                    error: null
                },
                test:'test'
            }
        case review_FAILURE :
            console.log('req failed')
            return {
                ...state,
                metadata : {
                    ...state.metadata,
                    loading:false,
                    error: true
                }
            }

        /* review delete */
        case review_delete_REQUEST :
            return {
                ...state,
                metadata : {
                    ...state.metadata,
                    loading:true,
                    error: null
                }
            }
        case review_delete_SUCCESS :
            const idx = action.payload.idx
            return {
                ...state,
                data: [...state.data.filter(v => v.idx != idx)],
                metadata : {
                    ...state.metadata,
                    loading:false,
                    error: null
                },
            }    
        case review_delete_FAILURE :
            return {
                ...state,
                metadata : {
                    ...state.metadata,
                    loading:false,
                    error: null
                },
            }

        /* update review */
        case review_update_START :
            return {
                ...state,
                update: action.payload.upidx
            }
        case review_update_PROCEED :
            console.log(action.payload)
            return {
                ...state,
                data : [...state.data ]
            }

        case review_update_REQUEST :
            return {
                ...state,
                metadata : {
                    ...state.metadata,
                    loading:true,
                    error: null
                }
            }
        case review_update_SUCCESS :
            // const idx = action.payload.idx
            return {
                ...state,
                data: [...state.data.filter(v => v.idx != idx)],
                metadata : {
                    ...state.metadata,
                    loading:false,
                    error: null
                },
            }    
        case review_update_FAILURE :
            return {
                ...state,
                metadata : {
                    ...state.metadata,
                    loading:false,
                    error: null
                },
            }
        default :
            return state
    }
}

export default review;