import { createSlice } from '@reduxjs/toolkit'

const initialBooking = {
    tower: '',
    floor: '',
    conf: '',
    day: null,
    time: '',
    comment: '',
}

export const bookingSlice = createSlice({
    name: 'booking_state',
    initialState: {
        booking: {
            ...initialBooking
        },
        isSend: false,
        isError: false,
    },
    reducers: {
        setTower(state, action) {
            state.booking.tower = action.payload
            state.isSend = false
            state.isError = false
        },
        setFloor(state, action) {
            state.booking.floor = action.payload
            state.isSend = false
            state.isError = false
        },
        setConf(state, action) {
            state.booking.conf = action.payload
            state.isSend = false
            state.isError = false
        },
        setDay(state, action) {
            state.booking.day = action.payload
            state.isSend = false
            state.isError = false
        },
        setTime(state, action) {
            state.booking.time = action.payload
            state.isSend = false
            state.isError = false
        },
        setComment(state, action) {
            state.booking.comment = action.payload
            state.isSend = false
            state.isError = false
        },
        createBooking(state) {
            for (let item in state.booking) {
                if (!state.booking[item]) {
                    state.isError = true
                }
            }

            if (!state.isError) {
                state.isSend = true
                console.log(JSON.stringify(state.booking))
                state.booking = { ...initialBooking }
            }

        },
        cleanForm(state) {
            state.isSend = false
            state.isError = false
            state.booking = { ...initialBooking }
        }
    }
})

export const { setTower, setFloor, setConf, setDay, setTime, setComment, createBooking, cleanForm } = bookingSlice.actions

export default bookingSlice.reducer