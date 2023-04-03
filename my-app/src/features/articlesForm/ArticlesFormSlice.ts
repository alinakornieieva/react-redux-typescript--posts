import { createSlice } from "@reduxjs/toolkit";



interface IArticleForm {
    title: string,
    description: string,
    id: number
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
        }
    }
})