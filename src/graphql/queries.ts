/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLMS = /* GraphQL */ `
  query GetLMS($id: ID!) {
    getLMS(id: $id) {
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
export const listLMS = /* GraphQL */ `
  query ListLMS($filter: ModelLMSFilterInput, $limit: Int, $nextToken: String) {
    listLMS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
