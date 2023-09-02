/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createLMS = /* GraphQL */ `
  mutation CreateLMS(
    $input: CreateLMSInput!
    $condition: ModelLMSConditionInput
  ) {
    createLMS(input: $input, condition: $condition) {
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
export const updateLMS = /* GraphQL */ `
  mutation UpdateLMS(
    $input: UpdateLMSInput!
    $condition: ModelLMSConditionInput
  ) {
    updateLMS(input: $input, condition: $condition) {
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
export const deleteLMS = /* GraphQL */ `
  mutation DeleteLMS(
    $input: DeleteLMSInput!
    $condition: ModelLMSConditionInput
  ) {
    deleteLMS(input: $input, condition: $condition) {
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
