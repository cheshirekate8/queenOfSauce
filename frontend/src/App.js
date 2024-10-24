import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import KitchenComponent from "./components/KitchenComponent";
import * as sessionActions from "./store/session";
import { Modal } from "./context/Modal";
import SVme from "./media/images/pnMe.png";
import speechBubble from "./media/images/pixel-speech-bubble.png";
import { ExternalLink } from "react-external-link";
import LinksComponent from "./components/LinksComponent";
import RecipesComponent from "./components/RecipesComponent";
import IngredientsComponent from "./components/IngredientsComponent";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <LinksComponent />
      <img
        src={SVme}
        onClick={() => setShowModal(true)}
        id="aboutMeImg"
        alt="Stardew Valley sprite of Kathleen Young"
      />
      <img
        src={speechBubble}
        onClick={() => setShowModal(true)}
        id="speechBubble"
        alt="Speech bubble saying click me!"
      />
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Project By:</h2>
          <h1>Kathleen Young</h1>
          <div id="aboutMeLinks">
            <ExternalLink href="https://github.com/cheshirekate8/">
              <i className="fab fa-github folioIcons"></i>
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/dev-kathleen-young">
              <i className="fab fa-linkedin-in folioIcons"></i>
            </ExternalLink>
            <ExternalLink href="https://angel.co/u/kathleen-young-3">
              <i className="fab fa-angellist folioIcons"></i>
            </ExternalLink>
            {/* <i className="fas fa-file"></i> */}
          </div>
        </Modal>
      )}
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <Splash />
          </Route>
          <Route path="/kitchen">
            <KitchenComponent />
          </Route>
          <Route path="/recipes">
            <RecipesComponent />
          </Route>
          <Route path="/ingredients">
            <IngredientsComponent />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="*">
            <h1>404 Bud.</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
