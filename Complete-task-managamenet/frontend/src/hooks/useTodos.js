import {useDispatch, useSelector}from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { deleteTodos, getTodos, postTodos, updateTodos } from '../store/slices/TaskSlice';
function useTodos() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allTodos = useSelector(state => state.task.todos)
    const tasksLoading = useSelector(state => state.task.loadingStates.getTodos)
    const updateLoading = useSelector(state => state.task.loadingStates.updateTodos);

    const getTodosHandler = () => {
        dispatch(getTodos()).then(unwrapResult).then(res => {
            console.log("todoSlicetodoSlice",res)
        })
    }

    const postTodosHandler = (payload,url) => {
        dispatch(postTodos(payload)).then(unwrapResult).then(res => {
            if (res) {
                navigate(url)
            }
            console.log(res);
        })
    }

    const deleteTodosHandler = (payload) => {
        dispatch(deleteTodos(payload)).then(unwrapResult).then(res => {
            console.log(res);
            getTodosHandler();
        })
    }

    const updateTodosHandler = (id, payload, url) => {
        console.log(url);
        dispatch(updateTodos({ id, data: payload })).then(unwrapResult).then(res => {
            if (res) {
                navigate(url)
              }
            getTodosHandler();
        })
    }



  return {updateLoading,allTodos,tasksLoading,deleteTodosHandler,updateTodosHandler,getTodosHandler,postTodosHandler}
}

export default useTodos
