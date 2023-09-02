/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLMS = /* GraphQL */ `
  query GetLMS($id: ID!) {
    getLMS(id: $id) {
      id
      Date
      Time
      Point_1
      Point_2
      Point_3
      Point_4
      Point_5
      Point_6
      Point_7
      Point_8
      Point_9
      Point_10
      Point_11
      Point_12
      Point_13
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLMS = /* GraphQL */ `
  query ListLMS($filter: ModelLMSFilterInput, $limit: Int, $nextToken: String) {
    listLMS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Date
        Time
        Point_1
        Point_2
        Point_3
        Point_4
        Point_5
        Point_6
        Point_7
        Point_8
        Point_9
        Point_10
        Point_11
        Point_12
        Point_13
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
