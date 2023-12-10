import { createSlice } from '@reduxjs/toolkit'
import mock from '../utils/mock'

const initialState = mock

const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		create: (state, action) => {
			state.unshift(action.payload)
		},
	},
})

export const employeesList = (state) => state.employees
export const { create } = employeesSlice.actions
export default employeesSlice.reducer
