import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import AddBlog from "./addBlog";
import {Footer} from "./Footer";
import Apropos from "./Apropos";
import BlogDetail from "./BlogDetail";
import NotFound from "./NotFound";

function App() {
  return (
      <>
              <Router>
                  <Navbar/>
                  <Routes>
                      <Route exact path='/' element={<Home/>}/>
                      <Route path='creerBlog' element={<AddBlog/>}/>
                      <Route path='a-propos' element={<Apropos/>}/>
                      <Route path={'/blog/:id'} element={<BlogDetail/>}/>
                      <Route path={'*'} element={<NotFound/>}/>
                  </Routes>
              </Router>
                  <Footer/>
      </>
  );
}

export default App;
