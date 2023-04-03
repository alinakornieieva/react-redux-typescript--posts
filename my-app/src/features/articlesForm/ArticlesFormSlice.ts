import { createSlice } from "@reduxjs/toolkit";

interface IArticleForm {
    title: string,
    description: string,
    id: string
}

type InitialStateType = {
    articles: Array<IArticleForm>
}

const initialState: InitialStateType = {
    articles: []
}

const ArticlesFormSlice = createSlice({
    name: 'form', 
    initialState,
    reducers: {
        setPost(state, action) {
            state.articles.push(action.payload)
        }
    }
})

const {reducer, actions} = ArticlesFormSlice
export default reducer
export const {setPost} = actions