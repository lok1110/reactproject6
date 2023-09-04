/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLMSInput = {
  id?: string | null,
  Date?: string | null,
  Time?: string | null,
  Points?: Array< PointInput | null > | null,
};

export type PointInput = {
  name?: string | null,
  value?: string | null,
};

export type ModelLMSConditionInput = {
  Date?: ModelStringInput | null,
  Time?: ModelStringInput | null,
  and?: Array< ModelLMSConditionInput | null > | null,
  or?: Array< ModelLMSConditionInput | null > | null,
  not?: ModelLMSConditionInput | null,
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

export type LMS = {
  __typename: "LMS",
  id: string,
  Date?: string | null,
  Time?: string | null,
  Points?:  Array<Point | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type Point = {
  __typename: "Point",
  name?: string | null,
  value?: string | null,
};

export type UpdateLMSInput = {
  id: string,
  Date?: string | null,
  Time?: string | null,
  Points?: Array< PointInput | null > | null,
};

export type DeleteLMSInput = {
  id: string,
};

export type ModelLMSFilterInput = {
  id?: ModelIDInput | null,
  Date?: ModelStringInput | null,
  Time?: ModelStringInput | null,
  and?: Array< ModelLMSFilterInput | null > | null,
  or?: Array< ModelLMSFilterInput | null > | null,
  not?: ModelLMSFilterInput | null,
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

export type ModelLMSConnection = {
  __typename: "ModelLMSConnection",
  items:  Array<LMS | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionLMSFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Date?: ModelSubscriptionStringInput | null,
  Time?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLMSFilterInput | null > | null,
  or?: Array< ModelSubscriptionLMSFilterInput | null > | null,
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

export type CreateLMSMutationVariables = {
  input: CreateLMSInput,
  condition?: ModelLMSConditionInput | null,
};

export type CreateLMSMutation = {
  createLMS?:  {
    __typename: "LMS",
    id: string,
    Date?: string | null,
    Time?: string | null,
    Points?:  Array< {
      __typename: "Point",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLMSMutationVariables = {
  input: UpdateLMSInput,
  condition?: ModelLMSConditionInput | null,
};

export type UpdateLMSMutation = {
  updateLMS?:  {
    __typename: "LMS",
    id: string,
    Date?: string | null,
    Time?: string | null,
    Points?:  Array< {
      __typename: "Point",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLMSMutationVariables = {
  input: DeleteLMSInput,
  condition?: ModelLMSConditionInput | null,
};

export type DeleteLMSMutation = {
  deleteLMS?:  {
    __typename: "LMS",
    id: string,
    Date?: string | null,
    Time?: string | null,
    Points?:  Array< {
      __typename: "Point",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLMSQueryVariables = {
  id: string,
};

export type GetLMSQuery = {
  getLMS?:  {
    __typename: "LMS",
    id: string,
    Date?: string | null,
    Time?: string | null,
    Points?:  Array< {
      __typename: "Point",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLMSQueryVariables = {
  filter?: ModelLMSFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLMSQuery = {
  listLMS?:  {
    __typename: "ModelLMSConnection",
    items:  Array< {
      __typename: "LMS",
      id: string,
      Date?: string | null,
      Time?: string | null,
      Points?:  Array< {
        __typename: "Point",
        name?: string | null,
        value?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLMSSubscriptionVariables = {
  filter?: ModelSubscriptionLMSFilterInput | null,
};

export type OnCreateLMSSubscription = {
  onCreateLMS?:  {
    __typename: "LMS",
    id: string,
    Date?: string | null,
    Time?: string | null,
    Points?:  Array< {
      __typename: "Point",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLMSSubscriptionVariables = {
  filter?: ModelSubscriptionLMSFilterInput | null,
};

export type OnUpdateLMSSubscription = {
  onUpdateLMS?:  {
    __typename: "LMS",
    id: string,
    Date?: string | null,
    Time?: string | null,
    Points?:  Array< {
      __typename: "Point",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLMSSubscriptionVariables = {
  filter?: ModelSubscriptionLMSFilterInput | null,
};

export type OnDeleteLMSSubscription = {
  onDeleteLMS?:  {
    __typename: "LMS",
    id: string,
    Date?: string | null,
    Time?: string | null,
    Points?:  Array< {
      __typename: "Point",
      name?: string | null,
      value?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
