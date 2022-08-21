import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./components/context/FeedbackContext";

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
};

export default App;
