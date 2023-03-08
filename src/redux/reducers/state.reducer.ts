import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { HexInt, Note } from '../../model'

type Focus = {
  hex: HexInt;
  note: Note
}

type InitialState = {
  focus: HexInt
}

const initialState = {
  focus: {
    hex: {
      q: -1,
      r: -1,
      height: 0
    },
    note: {
      pc: 0,
      name: 'C',
      octave: 0
    }
  }
}

const stateSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setFocus(state, action: PayloadAction<Focus>) {
      state.focus = action.payload
    }
  }
}
);


export const {
  setFocus
} = stateSlice.actions;
export default stateSlice.reducer;