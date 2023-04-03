import './App.css';
import ArticlesForm from './features/articlesForm/ArticlesForm';
import Posts from './features/posts/Posts';

function App() {
  return (
    <div className="App">
      <header>
        My Articles
      </header>
      <ArticlesForm/>
      <Posts/>
    </div>
  );
}

export default App;
