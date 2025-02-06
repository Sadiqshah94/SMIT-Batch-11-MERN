import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Delete, Get, Post, Put } from "../../api/requests";

const initialState = {
    todos: [],
    loadingStates: {
        getTodos: false,
        updateTodos:false,
    }
}

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
    const response = await Get('tasks');
    return response
})

export const postTodos = createAsyncThunk("todos/postTodos", async (payload) => {
    const response = await Post('tasks/add',payload)
    return response;
})

export const deleteTodos = createAsyncThunk("todos/deleteTodos", async (payload) => {
    console.log(payload);
    const response = await Delete(`tasks/delete/${payload}`)
    return response;
})

export const updateTodos = createAsyncThunk('todos/updateTodos', async ({id,data}) => {
    const response = await Put(`tasks/update/${id}`, data);
    return response;
})

const TodoSlice = createSlice({
  name: "todos",
  initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state) => {
          state.loadingStates.getTodos = true
        }).addCase(getTodos.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loadingStates.getTodos = false
            state.todos = action.payload?.data
        })
       
    
  }
  
});

// export const { getTaskList,addTask,deleteTask } = TodoSlice.actions;
export default TodoSlice.reducer;
