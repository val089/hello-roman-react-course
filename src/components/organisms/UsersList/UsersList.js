import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper.styled';
import { StyledList, StyledTitle } from './UsersList.styles';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <ViewWrapper>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </ViewWrapper>
    </>
  );
};

export default UsersList;
