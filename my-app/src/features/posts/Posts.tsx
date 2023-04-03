import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { deletePost } from '../articlesForm/ArticlesFormSlice'
import './Posts.css'

const Posts = () => {
    const {articles} = useAppSelector(state => state.form)
    const dispatch = useAppDispatch()
    return <div className='Posts'>
        {articles.map(item => <div key={item.id} className='Posts-item'>
            <div className='Posts-title'>{item.title}</div>
            <div className='Posts-div'>
                <div className='Posts-text'>{item.description}</div>
                <button onClick={() => dispatch(deletePost(item.id))} className='delete-btn'>Delete</button>
            </div>
        </div>)}
    </div>
}

export default Posts