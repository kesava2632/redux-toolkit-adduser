// personSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Person {
    id: number;
    name: string;
}

interface PersonState {
    persons: Person[];
}

const initialState: PersonState = {
    persons: [],
};

const userSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<{ name: string }>) => {
            const newPerson = {
                id: state.persons.length + 1,
                name: action.payload.name,
            };
            return {
                ...state,
                persons: [...state.persons, newPerson],
            };
        },
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
