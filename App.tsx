
import React, { useState } from 'react';
import WelcomeScreen from "./Screen/WelcomeScreen/welcomeScreen"
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import TabNavigate from "./src/Component/Navigation/TabNavigate/tabNavigate"
function App(): JSX.Element {
  const [showWelcomeScreen,setShowWelcomeScreen]=useState<Boolean>(true)
  setInterval(hideWelcomeScreen,2000)
  function hideWelcomeScreen(){
     setShowWelcomeScreen(false)
  }
  return (
    <Provider store={store}>
     {showWelcomeScreen? <WelcomeScreen/>: <TabNavigate/> }
    </Provider>
  );
}

export default App;
