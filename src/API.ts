/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
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

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateNoteInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelNoteConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
};

export type Note = {
  __typename: "Note",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNoteInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteNoteInput = {
  id: string,
};

export type CreateLMSInput = {
  id?: string | null,
  Date?: string | null,
  Time?: string | null,
  Point_1?: string | null,
  Point_2?: string | null,
  Point_3?: string | null,
  Point_4?: string | null,
  Point_5?: string | null,
  Point_6?: string | null,
  Point_7?: string | null,
  Point_8?: string | null,
  Point_9?: string | null,
  Point_10?: string | null,
  Point_11?: string | null,
  Point_12?: string | null,
  Point_13?: string | null,
};

export type ModelLMSConditionInput = {
  Date?: ModelStringInput | null,
  Time?: ModelStringInput | null,
  Point_1?: ModelStringInput | null,
  Point_2?: ModelStringInput | null,
  Point_3?: ModelStringInput | null,
  Point_4?: ModelStringInput | null,
  Point_5?: ModelStringInput | null,
  Point_6?: ModelStringInput | null,
  Point_7?: ModelStringInput | null,
  Point_8?: ModelStringInput | null,
  Point_9?: ModelStringInput | null,
  Point_10?: ModelStringInput | null,
  Point_11?: ModelStringInput | null,
  Point_12?: ModelStringInput | null,
  Point_13?: ModelStringInput | null,
  and?: Array< ModelLMSConditionInput | null > | null,
  or?: Array< ModelLMSConditionInput | null > | null,
  not?: ModelLMSConditionInput | null,
};

export type LMS = {
  __typename: "LMS",
  id: string,
  Date?: string | null,
  Time?: string | null,
  Point_1?: string | null,
  Point_2?: string | null,
  Point_3?: string | null,
  Point_4?: string | null,
  Point_5?: string | null,
  Point_6?: string | null,
  Point_7?: string | null,
  Point_8?: string | null,
  Point_9?: string | null,
  Point_10?: string | null,
  Point_11?: string | null,
  Point_12?: string | null,
  Point_13?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLMSInput = {
  id: string,
  Date?: string | null,
  Time?: string | null,
  Point_1?: string | null,
  Point_2?: string | null,
  Point_3?: string | null,
  Point_4?: string | null,
  Point_5?: string | null,
  Point_6?: string | null,
  Point_7?: string | null,
  Point_8?: string | null,
  Point_9?: string | null,
  Point_10?: string | null,
  Point_11?: string | null,
  Point_12?: string | null,
  Point_13?: string | null,
};

export type DeleteLMSInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
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

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
};

export type ModelLMSFilterInput = {
  id?: ModelIDInput | null,
  Date?: ModelStringInput | null,
  Time?: ModelStringInput | null,
  Point_1?: ModelStringInput | null,
  Point_2?: ModelStringInput | null,
  Point_3?: ModelStringInput | null,
  Point_4?: ModelStringInput | null,
  Point_5?: ModelStringInput | null,
  Point_6?: ModelStringInput | null,
  Point_7?: ModelStringInput | null,
  Point_8?: ModelStringInput | null,
  Point_9?: ModelStringInput | null,
  Point_10?: ModelStringInput | null,
  Point_11?: ModelStringInput | null,
  Point_12?: ModelStringInput | null,
  Point_13?: ModelStringInput | null,
  and?: Array< ModelLMSFilterInput | null > | null,
  or?: Array< ModelLMSFilterInput | null > | null,
  not?: ModelLMSFilterInput | null,
};

export type ModelLMSConnection = {
  __typename: "ModelLMSConnection",
  items:  Array<LMS | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
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

export type ModelSubscriptionNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionNoteFilterInput | null > | null,
};

export type ModelSubscriptionLMSFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Date?: ModelSubscriptionStringInput | null,
  Time?: ModelSubscriptionStringInput | null,
  Point_1?: ModelSubscriptionStringInput | null,
  Point_2?: ModelSubscriptionStringInput | null,
  Point_3?: ModelSubscriptionStringInput | null,
  Point_4?: ModelSubscriptionStringInput | null,
  Point_5?: ModelSubscriptionStringInput | null,
  Point_6?: ModelSubscriptionStringInput | null,
  Point_7?: ModelSubscriptionStringInput | null,
  Point_8?: ModelSubscriptionStringInput | null,
  Point_9?: ModelSubscriptionStringInput | null,
  Point_10?: ModelSubscriptionStringInput | null,
  Point_11?: ModelSubscriptionStringInput | null,
  Point_12?: ModelSubscriptionStringInput | null,
  Point_13?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLMSFilterInput | null > | null,
  or?: Array< ModelSubscriptionLMSFilterInput | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
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
    Point_1?: string | null,
    Point_2?: string | null,
    Point_3?: string | null,
    Point_4?: string | null,
    Point_5?: string | null,
    Point_6?: string | null,
    Point_7?: string | null,
    Point_8?: string | null,
    Point_9?: string | null,
    Point_10?: string | null,
    Point_11?: string | null,
    Point_12?: string | null,
    Point_13?: string | null,
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
    Point_1?: string | null,
    Point_2?: string | null,
    Point_3?: string | null,
    Point_4?: string | null,
    Point_5?: string | null,
    Point_6?: string | null,
    Point_7?: string | null,
    Point_8?: string | null,
    Point_9?: string | null,
    Point_10?: string | null,
    Point_11?: string | null,
    Point_12?: string | null,
    Point_13?: string | null,
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
    Point_1?: string | null,
    Point_2?: string | null,
    Point_3?: string | null,
    Point_4?: string | null,
    Point_5?: string | null,
    Point_6?: string | null,
    Point_7?: string | null,
    Point_8?: string | null,
    Point_9?: string | null,
    Point_10?: string | null,
    Point_11?: string | null,
    Point_12?: string | null,
    Point_13?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    Point_1?: string | null,
    Point_2?: string | null,
    Point_3?: string | null,
    Point_4?: string | null,
    Point_5?: string | null,
    Point_6?: string | null,
    Point_7?: string | null,
    Point_8?: string | null,
    Point_9?: string | null,
    Point_10?: string | null,
    Point_11?: string | null,
    Point_12?: string | null,
    Point_13?: string | null,
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
      Point_1?: string | null,
      Point_2?: string | null,
      Point_3?: string | null,
      Point_4?: string | null,
      Point_5?: string | null,
      Point_6?: string | null,
      Point_7?: string | null,
      Point_8?: string | null,
      Point_9?: string | null,
      Point_10?: string | null,
      Point_11?: string | null,
      Point_12?: string | null,
      Point_13?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
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
    Point_1?: string | null,
    Point_2?: string | null,
    Point_3?: string | null,
    Point_4?: string | null,
    Point_5?: string | null,
    Point_6?: string | null,
    Point_7?: string | null,
    Point_8?: string | null,
    Point_9?: string | null,
    Point_10?: string | null,
    Point_11?: string | null,
    Point_12?: string | null,
    Point_13?: string | null,
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
    Point_1?: string | null,
    Point_2?: string | null,
    Point_3?: string | null,
    Point_4?: string | null,
    Point_5?: string | null,
    Point_6?: string | null,
    Point_7?: string | null,
    Point_8?: string | null,
    Point_9?: string | null,
    Point_10?: string | null,
    Point_11?: string | null,
    Point_12?: string | null,
    Point_13?: string | null,
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
    Point_1?: string | null,
    Point_2?: string | null,
    Point_3?: string | null,
    Point_4?: string | null,
    Point_5?: string | null,
    Point_6?: string | null,
    Point_7?: string | null,
    Point_8?: string | null,
    Point_9?: string | null,
    Point_10?: string | null,
    Point_11?: string | null,
    Point_12?: string | null,
    Point_13?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
