import './ArticlesForm.css'

const ArticlesForm = () => {
    return <form>
        <div className='input-div'>
            <input type="text" placeholder="New post"/>
        </div>
        <div className='input-div'>
            <input type="text" placeholder="This is a description"/>
        </div>
        <button className='add-btn'>Add article</button>
    </form>
}

export default ArticlesForm