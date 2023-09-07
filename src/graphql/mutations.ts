/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSKGOPointLog = /* GraphQL */ `
  mutation CreateSKGOPointLog(
    $input: CreateSKGOPointLogInput!
    $condition: ModelSKGOPointLogConditionInput
  ) {
    createSKGOPointLog(input: $input, condition: $condition) {
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
export const updateSKGOPointLog = /* GraphQL */ `
  mutation UpdateSKGOPointLog(
    $input: UpdateSKGOPointLogInput!
    $condition: ModelSKGOPointLogConditionInput
  ) {
    updateSKGOPointLog(input: $input, condition: $condition) {
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
export const deleteSKGOPointLog = /* GraphQL */ `
  mutation DeleteSKGOPointLog(
    $input: DeleteSKGOPointLogInput!
    $condition: ModelSKGOPointLogConditionInput
  ) {
    deleteSKGOPointLog(input: $input, condition: $condition) {
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
