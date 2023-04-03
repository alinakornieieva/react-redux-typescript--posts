import './ArticlesForm.css'

const ArticlesForm = () => {
    return <form>
        <div>
            <input type="text" placeholder="New post"/>
        </div>
        <div>
            <input type="text" placeholder="This is a description"/>
        </div>
        <button>Add article</button>
    </form>
}

export default ArticlesForm