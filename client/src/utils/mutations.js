import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      username
      email
      password
      createdAt
      projects {
        _id
        title
        notes
        createdAt
        updated
        projectAuthor
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_PROJECT = gql`
  mutation addProject($title: String!) {
    addProject(title: $title) {
      _id
      title
      notes
      projectAuthor
      createdAt
      updated
    }
  }
`;
