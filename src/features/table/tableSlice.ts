import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '../../store'

export interface TableState {
  n: number
  m: number
  rowValues: number[]
  isEditable: boolean
}

interface RowEdit {
  index: number
  value: number
}

const initialState: TableState = {
  n: 0,
  m: 0,
  rowValues: Array.from({ length: 10 }, (_, i) => i + 1),
  isEditable: true
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    incrementN: (state) => {
      if (state.n >= 0 && state.n < 10) {
        state.n += 1
        if (state.m < state.n) state.m = state.n;
        else if (state.m > state.n * 2) state.m = state.n * 2;
      }
    },
    decrementN: (state) => {
      if (state.n > 0 && state.n <= 10) {
        state.n -= 1
        if (state.m < state.n) state.m = state.n;
        else if (state.m > state.n * 2) state.m = state.n * 2;
      }
    },
    setN: (state, action: PayloadAction<number>) => {
      if (action.payload <= 10 && action.payload >= 0) {
        state.n = action.payload;
        if (state.m < action.payload) state.m = action.payload;
        else if (state.m > action.payload * 2) state.m = action.payload;
      }
    },
    setM: (state, action: PayloadAction<number>) => {
      if (action.payload >= state.n && action.payload <= 2 * state.n)
        state.m = action.payload;
    },
    editRow: (state, action: PayloadAction<RowEdit>) => {
      const { index, value } = action.payload;
      if (index >= 0 && index < state.rowValues.length)
        state.rowValues[index] = value;
    },
    deleteRow: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0 && action.payload < state.rowValues.length)
        state.rowValues.splice(action.payload, 1);
    },
    addRow: (state) => {
      const len = state.rowValues.length
      if (state.rowValues.length < 10) {
        if (len > 0)
          state.rowValues.push(state.rowValues[len - 1] + 1)
        else state.rowValues.push(1)
      }
    },
    setIsEditable: (state) => {
      state.isEditable = !state.isEditable
    },
    resetDefault: (state) => {
      state.rowValues = Array.from({ length: 10 }, (_, i) => i + 1)
      state.n = 0
      state.m = 0
    }
  },
})

export const {
  incrementN,
  decrementN,
  setN,
  setM,
  setIsEditable,
  editRow,
  deleteRow,
  addRow,
  resetDefault,
} = tableSlice.actions

export const selectN = (state: AppState): number => state.table.n;
export const selectM = (state: AppState): number => state.table.m;
export const selectRows = (state: AppState): number[] => state.table.rowValues;
export const selectIsEditable = (state: AppState): boolean => state.table.isEditable;

export default tableSlice.reducer
