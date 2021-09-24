import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
// import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';

const Root = () => {
  //dobrą praktyką jest przekazywanie propsów maksymalnie przez dwa komponenty
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              {/* rodzeństwo nie może przekazywać sobie propsów */}
              <Route exact path="/">
                <Redirect to="/group" />
              </Route>
              {/* <Route path="/add-user">
                <AddUser />
              </Route> */}
              {/* :id dla react routera oznacza zmienną; ustawiamy także id jako opcjonalne dodając ?*/}
              <Route path="/group/:id?">
                <Dashboard />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
