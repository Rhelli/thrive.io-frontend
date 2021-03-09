import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  UserListContainer, SignUpContainer, SignInContainer, QuizContainer, PropertyListContainer,
  PropertyContainer, ProfileSettingsContainer, FlatmateProfileContainer, HomePageContainer,
  UserProfileContainer,
} from './pages/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route path="/signup" component={SignUpContainer} />
      <Route path="/signin" component={SignInContainer} />
      <Route path="/looking" component={UserListContainer} />
      <Route path="/profile" component={UserProfileContainer} />
      <Route path="/flatmates/:id" component={FlatmateProfileContainer} />
      <Route path="/settings/" component={ProfileSettingsContainer} />
      <Route path="/advertising" component={PropertyListContainer} />
      <Route path="/property" component={PropertyContainer} />
      <Route path="/personality-assessment" component={QuizContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
