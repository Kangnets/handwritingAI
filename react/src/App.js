import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import But from './components/but';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Board from './pages/Board';
import Test from './pages/Test';
import './App.css';
import Intro from './pages/Intro';
import AI from './pages/AI';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='header'>
                    <h1><a href='#'>HWAI</a></h1>
                    <Nav></Nav>
                    <Routes>
                        <Route path="/">
                            <Route path="home" element={<Home />} />
                            <Route path="profile/:userId" element={<Profile />} />
                            <Route path="board" element={<Board />} />
                            <Route path="introducing" element={<Intro />} />
                        </Route>
                    </Routes>
                </div>
            
                <div class="hero">
                    <h2>WELCOME TO HWAI</h2>
                    <p>If you want to use our AI, please click this button</p>
                    <But></But>
                    <Routes>
                        <Route path="/">
                            <Route path="AI" element={<AI />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
