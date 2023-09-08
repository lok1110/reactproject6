/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSKGOPointLog = /* GraphQL */ `
  subscription OnCreateSKGOPointLog(
    $filter: ModelSubscriptionSKGOPointLogFilterInput
  ) {
    onCreateSKGOPointLog(filter: $filter) {
      id
      Timestamp
      PointDetails {
        PointName
        Value
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSKGOPointLog = /* GraphQL */ `
  subscription OnUpdateSKGOPointLog(
    $filter: ModelSubscriptionSKGOPointLogFilterInput
  ) {
    onUpdateSKGOPointLog(filter: $filter) {
      id
      Timestamp
      PointDetails {
        PointName
        Value
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSKGOPointLog = /* GraphQL */ `
  subscription OnDeleteSKGOPointLog(
    $filter: ModelSubscriptionSKGOPointLogFilterInput
  ) {
    onDeleteSKGOPointLog(filter: $filter) {
      id
      Timestamp
      PointDetails {
        PointName
        Value
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
