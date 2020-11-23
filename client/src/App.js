import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './view/Chat'

import ChatContext from './context/ChatContext'

function App() {
  return (
    <ChatContext>
      <Router>
        <Switch>
          <Route exact path={'/'} component={Chat} />
        </Switch>
      </Router>
    </ChatContext>
  );
}

export default App;
