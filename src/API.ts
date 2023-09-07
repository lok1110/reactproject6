/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSKGOPointLogInput = {
  id?: string | null,
  Timestamp: string,
  PointDetails?: Array< PointDetailInput | null > | null,
};

export type PointDetailInput = {
  PointName: string,
  Value?: string | null,
};

export type ModelSKGOPointLogConditionInput = {
  Timestamp?: ModelStringInput | null,
  and?: Array< ModelSKGOPointLogConditionInput | null > | null,
  or?: Array< ModelSKGOPointLogConditionInput | null > | null,
  not?: ModelSKGOPointLogConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type SKGOPointLog = {
  __typename: "SKGOPointLog",
  id: string,
  Timestamp: string,
  PointDetails?:  Array<PointDetail | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type PointDetail = {
  __typename: "PointDetail",
  PointName: string,
  Value?: string | null,
};

export type UpdateSKGOPointLogInput = {
  id: string,
  Timestamp?: string | null,
  PointDetails?: Array< PointDetailInput | null > | null,
};

export type DeleteSKGOPointLogInput = {
  id: string,
};

export type ModelSKGOPointLogFilterInput = {
  id?: ModelIDInput | null,
  Timestamp?: ModelStringInput | null,
  and?: Array< ModelSKGOPointLogFilterInput | null > | null,
  or?: Array< ModelSKGOPointLogFilterInput | null > | null,
  not?: ModelSKGOPointLogFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSKGOPointLogConnection = {
  __typename: "ModelSKGOPointLogConnection",
  items:  Array<SKGOPointLog | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionSKGOPointLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Timestamp?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSKGOPointLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionSKGOPointLogFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateSKGOPointLogMutationVariables = {
  input: CreateSKGOPointLogInput,
  condition?: ModelSKGOPointLogConditionInput | null,
};

export type CreateSKGOPointLogMutation = {
  createSKGOPointLog?:  {
    __typename: "SKGOPointLog",
    id: string,
    Timestamp: string,
    PointDetails?:  Array< {
      __typename: "PointDetail",
      PointName: string,
      Value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSKGOPointLogMutationVariables = {
  input: UpdateSKGOPointLogInput,
  condition?: ModelSKGOPointLogConditionInput | null,
};

export type UpdateSKGOPointLogMutation = {
  updateSKGOPointLog?:  {
    __typename: "SKGOPointLog",
    id: string,
    Timestamp: string,
    PointDetails?:  Array< {
      __typename: "PointDetail",
      PointName: string,
      Value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSKGOPointLogMutationVariables = {
  input: DeleteSKGOPointLogInput,
  condition?: ModelSKGOPointLogConditionInput | null,
};

export type DeleteSKGOPointLogMutation = {
  deleteSKGOPointLog?:  {
    __typename: "SKGOPointLog",
    id: string,
    Timestamp: string,
    PointDetails?:  Array< {
      __typename: "PointDetail",
      PointName: string,
      Value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSKGOPointLogQueryVariables = {
  id: string,
};

export type GetSKGOPointLogQuery = {
  getSKGOPointLog?:  {
    __typename: "SKGOPointLog",
    id: string,
    Timestamp: string,
    PointDetails?:  Array< {
      __typename: "PointDetail",
      PointName: string,
      Value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSKGOPointLogsQueryVariables = {
  filter?: ModelSKGOPointLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSKGOPointLogsQuery = {
  listSKGOPointLogs?:  {
    __typename: "ModelSKGOPointLogConnection",
    items:  Array< {
      __typename: "SKGOPointLog",
      id: string,
      Timestamp: string,
      PointDetails?:  Array< {
        __typename: "PointDetail",
        PointName: string,
        Value?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSKGOPointLogSubscriptionVariables = {
  filter?: ModelSubscriptionSKGOPointLogFilterInput | null,
};

export type OnCreateSKGOPointLogSubscription = {
  onCreateSKGOPointLog?:  {
    __typename: "SKGOPointLog",
    id: string,
    Timestamp: string,
    PointDetails?:  Array< {
      __typename: "PointDetail",
      PointName: string,
      Value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSKGOPointLogSubscriptionVariables = {
  filter?: ModelSubscriptionSKGOPointLogFilterInput | null,
};

export type OnUpdateSKGOPointLogSubscription = {
  onUpdateSKGOPointLog?:  {
    __typename: "SKGOPointLog",
    id: string,
    Timestamp: string,
    PointDetails?:  Array< {
      __typename: "PointDetail",
      PointName: string,
      Value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSKGOPointLogSubscriptionVariables = {
  filter?: ModelSubscriptionSKGOPointLogFilterInput | null,
};

export type OnDeleteSKGOPointLogSubscription = {
  onDeleteSKGOPointLog?:  {
    __typename: "SKGOPointLog",
    id: string,
    Timestamp: string,
    PointDetails?:  Array< {
      __typename: "PointDetail",
      PointName: string,
      Value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
