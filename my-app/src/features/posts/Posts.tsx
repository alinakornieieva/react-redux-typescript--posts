import './Posts.css'

const Posts = () => {
    return <div className='Posts'>
        <div className='Posts-item'>
            <div className='Posts-title'>Post 1</div>
            <div className='Posts-div'>
                <div className='Posts-text'>It is purpose-built to solve the use case of data fetching and caching, supplying a compact, but powerful toolset to define an API interface layer</div>
                <button className='delete-btn'>Delete</button>
            </div>
        </div>
    </div>
}

export default Posts