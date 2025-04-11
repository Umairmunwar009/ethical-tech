import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import TechInsightsPage from './pages/TechInsightsPage';
import QuizzesPage from './pages/QuizzesPage';
import AuthPage from './pages/AuthPage';
import './styles/global.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/news" component={NewsPage} />
                <Route path="/tech-insights" component={TechInsightsPage} />
                <Route path="/quizzes" component={QuizzesPage} />
                <Route path="/auth" component={AuthPage} /> {/* AuthPage handles both login and signup */}
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;