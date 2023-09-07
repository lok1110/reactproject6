/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSKGOPointLog = /* GraphQL */ `
  subscription OnCreateSKGOPointLog(
    $filter: ModelSubscriptionSKGOPointLogFilterInput
    $owner: String
  ) {
    onCreateSKGOPointLog(filter: $filter, owner: $owner) {
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
export const onUpdateSKGOPointLog = /* GraphQL */ `
  subscription OnUpdateSKGOPointLog(
    $filter: ModelSubscriptionSKGOPointLogFilterInput
    $owner: String
  ) {
    onUpdateSKGOPointLog(filter: $filter, owner: $owner) {
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
export const onDeleteSKGOPointLog = /* GraphQL */ `
  subscription OnDeleteSKGOPointLog(
    $filter: ModelSubscriptionSKGOPointLogFilterInput
    $owner: String
  ) {
    onDeleteSKGOPointLog(filter: $filter, owner: $owner) {
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
