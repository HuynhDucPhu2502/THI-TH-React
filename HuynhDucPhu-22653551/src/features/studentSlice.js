import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    list: [
        { id: 1, name: "Nguyễn Văn A", class: "CTK42", age: 20 },
        { id: 2, name: "Trần Thị B", class: "CTK43", age: 21 },
    ]
};
const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.list.push(action.payload);
        },
        deleteStudent: (state, action) => {
            state.list = state.list.filter(st => st.id !== action.payload);
        },
        updateStudent: (state, action) => {
            const idx = state.list.findIndex(st => st.id === action.payload.id);
            if (idx !== -1) state.list[idx] = action.payload;
        },
        setList: (state, action) => {
            state.list = action.payload;
        }
    }
});
export const { addStudent, deleteStudent, updateStudent, setList } = studentSlice.actions;
export default studentSlice.reducer;