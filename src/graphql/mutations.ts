/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLMS = /* GraphQL */ `
  mutation CreateLMS(
    $input: CreateLMSInput!
    $condition: ModelLMSConditionInput
  ) {
    createLMS(input: $input, condition: $condition) {
      id
      Date
      Time
      Points {
        name
        value
        __typename
      }
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
      Points {
        name
        value
        __typename
      }
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
      Points {
        name
        value
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
