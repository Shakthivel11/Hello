import * as types from "./Actiontypes"

export const loadrecordstart=()=>({
    type:types.LOAD_RECORDS_START,
})
export const addrecords=(post)=>({
    type:types.ADD_RECORDS,
    payload:post
})

export const updaterecords=(payload)=>({
    type:types.UPDATE_RECORDS,
    payload
})