import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		create: (state, action) => {
			state.push(action.payload)
		},
	},
})

export const employeesList = (state) => state.employees
export const { create } = employeesSlice.actions
export default employeesSlice.reducer
