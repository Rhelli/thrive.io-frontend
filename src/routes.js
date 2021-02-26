import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  UserListContainer, SignUpContainer, SignInContainer, QuizContainer, PropertyListContainer,
  PropertyContainer, ProfileSettingsContainer, ProfileContainer, HomePageContainer
} from './pages/index';


const Routes = () => {
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePageContainer} />
      <Route path='/signup' component={SignUpContainer} />
      <Route path='/signin' component={SignInContainer} />
      <Route path='/looking' component={UserListContainer} />
      <Route path='/profile/:id' component={ProfileContainer} />
      <Route path='/profile/:id/settings' component={ProfileSettingsContainer} />
      <Route path='/advertising' component={PropertyListContainer} />
      <Route path='/property/:id' component={PropertyContainer} />
      <Route path='/personality-assessment/:user_id' component={QuizContainer} />
    </Switch>
  </BrowserRouter>
}

export default Routes;