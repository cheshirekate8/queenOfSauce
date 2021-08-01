import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import LoginFormPage from "./components/LoginFormPage";
import Navigation from './components/Navigation';
import Splash from './components/Splash';
import KitchenComponent from './components/KitchenComponent';
import * as sessionActions from './store/session';
import * as kitchenActions from './store/kitchen'
import { Modal } from './context/Modal';
import SVme from './media/images/pnMe.png'


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const sessionUser = useSelector(state => state.session.user);

  // const sessionUserId = useSelector(state => state.session?.user?.id);

  // useEffect(() => {
  //   dispatch(kitchenActions.getFridges(sessionUserId))
  // }, [dispatch, sessionUserId])

  // console.log(sessionUser?.id)

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <img src={SVme} onClick={() => setShowModal(true)} id='aboutMeImg'/>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Project By:</h2>
          <h1>Kathleen Young</h1>
          {/* <i class="fab fa-github"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-angellist"></i>
          <i class="fas fa-file"></i> */}

        </Modal>
      )}
      {isLoaded && (
        <Switch>
          <Route path="/" exact >
            <Splash />
          </Route>
          <Route path="/kitchen">
            <KitchenComponent />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
