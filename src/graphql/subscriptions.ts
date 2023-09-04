/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLMS = /* GraphQL */ `
  subscription OnCreateLMS($filter: ModelSubscriptionLMSFilterInput) {
    onCreateLMS(filter: $filter) {
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
export const onUpdateLMS = /* GraphQL */ `
  subscription OnUpdateLMS($filter: ModelSubscriptionLMSFilterInput) {
    onUpdateLMS(filter: $filter) {
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
export const onDeleteLMS = /* GraphQL */ `
  subscription OnDeleteLMS($filter: ModelSubscriptionLMSFilterInput) {
    onDeleteLMS(filter: $filter) {
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
