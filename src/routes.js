import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  UserListContainer, SignUpContainer, SignInContainer, QuizContainer, PropertyListContainer,
  PropertyContainer, ProfileSettingsContainer, ProfileContainer, HomePageContainer,
} from './pages/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route path="/signup" component={SignUpContainer} />
      <Route path="/signin" component={SignInContainer} />
      <Route path="/looking" component={UserListContainer} />
      <Route path="/profile" component={ProfileContainer} />
      <Route path="/flatmates/:id" component={ProfileContainer} />
      <Route path="/settings/" component={ProfileSettingsContainer} />
      <Route path="/advertising" component={PropertyListContainer} />
      <Route path="/property" component={PropertyContainer} />
      <Route path="/personality-assessment" component={QuizContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
