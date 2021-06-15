import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import Form from 'components/organisms/Form/Form';
import SideBar from 'components/organisms/SideBar/SideBar';
import { users as usersData } from 'data/users';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues, //wrzucamy wszystkie poprzednie wartości formularza
      [e.target.name]: e.target.value, // jeśli dochodzi do zmiany w jakimś polu naszego formularza to ta zmiana zostanie przypisana do klucza w naszym obiekcie
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]); //dodajemy usera na początku
    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <SideBar />
          <Switch>
            {/* rodzeństwo nie może przekazywać sobie propsów tak jak poniżej */}
            <Route path="/add-user">
              <Form handleInputChange={handleInputChange} handleAddUser={handleAddUser} formValues={formValues} />
            </Route>
            <Route path="/">
              <UsersList users={users} deleteUser={deleteUser} />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
