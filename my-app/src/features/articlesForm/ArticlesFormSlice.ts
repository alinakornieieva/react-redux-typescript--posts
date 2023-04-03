import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        setPost(state, action: PayloadAction<IArticleForm>) {
            state.articles.push(action.payload)
        },
        deletePost(state, action: PayloadAction<string>) {
            state.articles = state.articles.filter((post) => post.id !== action.payload)
        }
    }
})

const {reducer, actions} = ArticlesFormSlice
export default reducer
export const {setPost, deletePost} = actions