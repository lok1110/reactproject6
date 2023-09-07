/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSKGOPointLog = /* GraphQL */ `
  query GetSKGOPointLog($id: ID!) {
    getSKGOPointLog(id: $id) {
      id
      Timestamp
      PointDetails {
        PointName
        Value
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listSKGOPointLogs = /* GraphQL */ `
  query ListSKGOPointLogs(
    $filter: ModelSKGOPointLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSKGOPointLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Timestamp
        PointDetails {
          PointName
          Value
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
