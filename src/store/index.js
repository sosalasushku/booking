import { configureStore } from '@reduxjs/toolkit'
import bookingSlice from './bookingSlice'

export default configureStore({
    reducer: {
        booking_state: bookingSlice,
    }
})