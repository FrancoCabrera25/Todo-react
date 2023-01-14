import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from './pages/home/HomePage';
import { AddUpdateTodoPage } from './pages/upadd/AddUpdateTodoPage';

function App() {

  
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<AddUpdateTodoPage />} />
        <Route path="/edit/:id" element={<AddUpdateTodoPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
