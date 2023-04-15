import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      projects {
        _id
        title
        notes
        createdAt
        updated
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
    }
  }
`;
export const QUERY_PROJECTS = gql`
  query allProjects {
    projects {
      _id
      title
      notes
      createdAt
      updated
    }
  }
`;
export const QUERY_PROJECT = gql`
  query oneProject($projectId: ID!) {
    project(projectId: $projectId) {
      _id
      title
      notes
      createdAt
      updated
    }
  }
`;
