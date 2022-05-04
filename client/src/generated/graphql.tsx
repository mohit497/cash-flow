import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamptz: any;
  uuid: any;
};


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** holds roles details */
export type Roles = {
  __typename?: 'ROLES';
  /** An array relationship */
  active_roles: Array<Active_Roles>;
  /** An aggregate relationship */
  active_roles_aggregate: Active_Roles_Aggregate;
  role: Scalars['String'];
};


/** holds roles details */
export type RolesActive_RolesArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};


/** holds roles details */
export type RolesActive_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};

/** aggregated selection of "ROLES" */
export type Roles_Aggregate = {
  __typename?: 'ROLES_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "ROLES" */
export type Roles_Aggregate_Fields = {
  __typename?: 'ROLES_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};


/** aggregate fields of "ROLES" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ROLES". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: Maybe<Array<Roles_Bool_Exp>>;
  _not?: Maybe<Roles_Bool_Exp>;
  _or?: Maybe<Array<Roles_Bool_Exp>>;
  active_roles?: Maybe<Active_Roles_Bool_Exp>;
  role?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ROLES" */
export enum Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'ROLES_pkey'
}

export enum Roles_Enum {
  OrgAdmin = 'ORG_ADMIN'
}

/** Boolean expression to compare columns of type "ROLES_enum". All fields are combined with logical 'AND'. */
export type Roles_Enum_Comparison_Exp = {
  _eq?: Maybe<Roles_Enum>;
  _in?: Maybe<Array<Roles_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Roles_Enum>;
  _nin?: Maybe<Array<Roles_Enum>>;
};

/** input type for inserting data into table "ROLES" */
export type Roles_Insert_Input = {
  active_roles?: Maybe<Active_Roles_Arr_Rel_Insert_Input>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'ROLES_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'ROLES_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ROLES" */
export type Roles_Mutation_Response = {
  __typename?: 'ROLES_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "ROLES" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** on_conflict condition type for table "ROLES" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns?: Array<Roles_Update_Column>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "ROLES". */
export type Roles_Order_By = {
  active_roles_aggregate?: Maybe<Active_Roles_Aggregate_Order_By>;
  role?: Maybe<Order_By>;
};

/** primary key columns input for table: ROLES */
export type Roles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "ROLES" */
export enum Roles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "ROLES" */
export type Roles_Set_Input = {
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "ROLES" */
export enum Roles_Update_Column {
  /** column name */
  Role = 'role'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** active users with role */
export type Active_Roles = {
  __typename?: 'active_roles';
  /** An object relationship */
  ROLE: Roles;
  id: Scalars['uuid'];
  org: Scalars['uuid'];
  role: Roles_Enum;
  user: Scalars['uuid'];
  /** An object relationship */
  userByOrg: Users;
  /** An object relationship */
  userByUser: Users;
};

/** aggregated selection of "active_roles" */
export type Active_Roles_Aggregate = {
  __typename?: 'active_roles_aggregate';
  aggregate?: Maybe<Active_Roles_Aggregate_Fields>;
  nodes: Array<Active_Roles>;
};

/** aggregate fields of "active_roles" */
export type Active_Roles_Aggregate_Fields = {
  __typename?: 'active_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Active_Roles_Max_Fields>;
  min?: Maybe<Active_Roles_Min_Fields>;
};


/** aggregate fields of "active_roles" */
export type Active_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Active_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "active_roles" */
export type Active_Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Active_Roles_Max_Order_By>;
  min?: Maybe<Active_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "active_roles" */
export type Active_Roles_Arr_Rel_Insert_Input = {
  data: Array<Active_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Active_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "active_roles". All fields are combined with a logical 'AND'. */
export type Active_Roles_Bool_Exp = {
  ROLE?: Maybe<Roles_Bool_Exp>;
  _and?: Maybe<Array<Active_Roles_Bool_Exp>>;
  _not?: Maybe<Active_Roles_Bool_Exp>;
  _or?: Maybe<Array<Active_Roles_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<Roles_Enum_Comparison_Exp>;
  user?: Maybe<Uuid_Comparison_Exp>;
  userByOrg?: Maybe<Users_Bool_Exp>;
  userByUser?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "active_roles" */
export enum Active_Roles_Constraint {
  /** unique or primary key constraint */
  ActiveRolesPkey = 'active_roles_pkey'
}

/** input type for inserting data into table "active_roles" */
export type Active_Roles_Insert_Input = {
  ROLE?: Maybe<Roles_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  role?: Maybe<Roles_Enum>;
  user?: Maybe<Scalars['uuid']>;
  userByOrg?: Maybe<Users_Obj_Rel_Insert_Input>;
  userByUser?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Active_Roles_Max_Fields = {
  __typename?: 'active_roles_max_fields';
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "active_roles" */
export type Active_Roles_Max_Order_By = {
  id?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  user?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Active_Roles_Min_Fields = {
  __typename?: 'active_roles_min_fields';
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "active_roles" */
export type Active_Roles_Min_Order_By = {
  id?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  user?: Maybe<Order_By>;
};

/** response of any mutation on the table "active_roles" */
export type Active_Roles_Mutation_Response = {
  __typename?: 'active_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Active_Roles>;
};

/** on_conflict condition type for table "active_roles" */
export type Active_Roles_On_Conflict = {
  constraint: Active_Roles_Constraint;
  update_columns?: Array<Active_Roles_Update_Column>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "active_roles". */
export type Active_Roles_Order_By = {
  ROLE?: Maybe<Roles_Order_By>;
  id?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  user?: Maybe<Order_By>;
  userByOrg?: Maybe<Users_Order_By>;
  userByUser?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: active_roles */
export type Active_Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "active_roles" */
export enum Active_Roles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Org = 'org',
  /** column name */
  Role = 'role',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "active_roles" */
export type Active_Roles_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  role?: Maybe<Roles_Enum>;
  user?: Maybe<Scalars['uuid']>;
};

/** update columns of table "active_roles" */
export enum Active_Roles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Org = 'org',
  /** column name */
  Role = 'role',
  /** column name */
  User = 'user'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "ROLES" */
  delete_ROLES?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "ROLES" */
  delete_ROLES_by_pk?: Maybe<Roles>;
  /** delete data from the table: "active_roles" */
  delete_active_roles?: Maybe<Active_Roles_Mutation_Response>;
  /** delete single row from the table: "active_roles" */
  delete_active_roles_by_pk?: Maybe<Active_Roles>;
  /** delete data from the table: "orgs" */
  delete_orgs?: Maybe<Orgs_Mutation_Response>;
  /** delete single row from the table: "orgs" */
  delete_orgs_by_pk?: Maybe<Orgs>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "sales" */
  delete_sales?: Maybe<Sales_Mutation_Response>;
  /** delete single row from the table: "sales" */
  delete_sales_by_pk?: Maybe<Sales>;
  /** delete data from the table: "shops" */
  delete_shops?: Maybe<Shops_Mutation_Response>;
  /** delete single row from the table: "shops" */
  delete_shops_by_pk?: Maybe<Shops>;
  /** delete data from the table: "transactions" */
  delete_transactions?: Maybe<Transactions_Mutation_Response>;
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk?: Maybe<Transactions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "ROLES" */
  insert_ROLES?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "ROLES" */
  insert_ROLES_one?: Maybe<Roles>;
  /** insert data into the table: "active_roles" */
  insert_active_roles?: Maybe<Active_Roles_Mutation_Response>;
  /** insert a single row into the table: "active_roles" */
  insert_active_roles_one?: Maybe<Active_Roles>;
  /** insert data into the table: "orgs" */
  insert_orgs?: Maybe<Orgs_Mutation_Response>;
  /** insert a single row into the table: "orgs" */
  insert_orgs_one?: Maybe<Orgs>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "sales" */
  insert_sales?: Maybe<Sales_Mutation_Response>;
  /** insert a single row into the table: "sales" */
  insert_sales_one?: Maybe<Sales>;
  /** insert data into the table: "shops" */
  insert_shops?: Maybe<Shops_Mutation_Response>;
  /** insert a single row into the table: "shops" */
  insert_shops_one?: Maybe<Shops>;
  /** insert data into the table: "transactions" */
  insert_transactions?: Maybe<Transactions_Mutation_Response>;
  /** insert a single row into the table: "transactions" */
  insert_transactions_one?: Maybe<Transactions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "ROLES" */
  update_ROLES?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "ROLES" */
  update_ROLES_by_pk?: Maybe<Roles>;
  /** update data of the table: "active_roles" */
  update_active_roles?: Maybe<Active_Roles_Mutation_Response>;
  /** update single row of the table: "active_roles" */
  update_active_roles_by_pk?: Maybe<Active_Roles>;
  /** update data of the table: "orgs" */
  update_orgs?: Maybe<Orgs_Mutation_Response>;
  /** update single row of the table: "orgs" */
  update_orgs_by_pk?: Maybe<Orgs>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "sales" */
  update_sales?: Maybe<Sales_Mutation_Response>;
  /** update single row of the table: "sales" */
  update_sales_by_pk?: Maybe<Sales>;
  /** update data of the table: "shops" */
  update_shops?: Maybe<Shops_Mutation_Response>;
  /** update single row of the table: "shops" */
  update_shops_by_pk?: Maybe<Shops>;
  /** update data of the table: "transactions" */
  update_transactions?: Maybe<Transactions_Mutation_Response>;
  /** update single row of the table: "transactions" */
  update_transactions_by_pk?: Maybe<Transactions>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Active_RolesArgs = {
  where: Active_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Active_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OrgsArgs = {
  where: Orgs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orgs_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SalesArgs = {
  where: Sales_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sales_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ShopsArgs = {
  where: Shops_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Shops_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transactions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Active_RolesArgs = {
  objects: Array<Active_Roles_Insert_Input>;
  on_conflict?: Maybe<Active_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Active_Roles_OneArgs = {
  object: Active_Roles_Insert_Input;
  on_conflict?: Maybe<Active_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrgsArgs = {
  objects: Array<Orgs_Insert_Input>;
  on_conflict?: Maybe<Orgs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orgs_OneArgs = {
  object: Orgs_Insert_Input;
  on_conflict?: Maybe<Orgs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SalesArgs = {
  objects: Array<Sales_Insert_Input>;
  on_conflict?: Maybe<Sales_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sales_OneArgs = {
  object: Sales_Insert_Input;
  on_conflict?: Maybe<Sales_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ShopsArgs = {
  objects: Array<Shops_Insert_Input>;
  on_conflict?: Maybe<Shops_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shops_OneArgs = {
  object: Shops_Insert_Input;
  on_conflict?: Maybe<Shops_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionsArgs = {
  objects: Array<Transactions_Insert_Input>;
  on_conflict?: Maybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transactions_OneArgs = {
  object: Transactions_Insert_Input;
  on_conflict?: Maybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: Maybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: Maybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Active_RolesArgs = {
  _set?: Maybe<Active_Roles_Set_Input>;
  where: Active_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Active_Roles_By_PkArgs = {
  _set?: Maybe<Active_Roles_Set_Input>;
  pk_columns: Active_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrgsArgs = {
  _set?: Maybe<Orgs_Set_Input>;
  where: Orgs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orgs_By_PkArgs = {
  _set?: Maybe<Orgs_Set_Input>;
  pk_columns: Orgs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SalesArgs = {
  _set?: Maybe<Sales_Set_Input>;
  where: Sales_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sales_By_PkArgs = {
  _set?: Maybe<Sales_Set_Input>;
  pk_columns: Sales_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ShopsArgs = {
  _set?: Maybe<Shops_Set_Input>;
  where: Shops_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Shops_By_PkArgs = {
  _set?: Maybe<Shops_Set_Input>;
  pk_columns: Shops_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionsArgs = {
  _inc?: Maybe<Transactions_Inc_Input>;
  _set?: Maybe<Transactions_Set_Input>;
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transactions_By_PkArgs = {
  _inc?: Maybe<Transactions_Inc_Input>;
  _set?: Maybe<Transactions_Set_Input>;
  pk_columns: Transactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** holds organisation data */
export type Orgs = {
  __typename?: 'orgs';
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** An array relationship */
  sales: Array<Sales>;
  /** An aggregate relationship */
  sales_aggregate: Sales_Aggregate;
  /** An array relationship */
  shops: Array<Shops>;
  /** An aggregate relationship */
  shops_aggregate: Shops_Aggregate;
};


/** holds organisation data */
export type OrgsProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/** holds organisation data */
export type OrgsProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/** holds organisation data */
export type OrgsSalesArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
};


/** holds organisation data */
export type OrgsSales_AggregateArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
};


/** holds organisation data */
export type OrgsShopsArgs = {
  distinct_on?: Maybe<Array<Shops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shops_Order_By>>;
  where?: Maybe<Shops_Bool_Exp>;
};


/** holds organisation data */
export type OrgsShops_AggregateArgs = {
  distinct_on?: Maybe<Array<Shops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shops_Order_By>>;
  where?: Maybe<Shops_Bool_Exp>;
};

/** aggregated selection of "orgs" */
export type Orgs_Aggregate = {
  __typename?: 'orgs_aggregate';
  aggregate?: Maybe<Orgs_Aggregate_Fields>;
  nodes: Array<Orgs>;
};

/** aggregate fields of "orgs" */
export type Orgs_Aggregate_Fields = {
  __typename?: 'orgs_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Orgs_Max_Fields>;
  min?: Maybe<Orgs_Min_Fields>;
};


/** aggregate fields of "orgs" */
export type Orgs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Orgs_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "orgs". All fields are combined with a logical 'AND'. */
export type Orgs_Bool_Exp = {
  _and?: Maybe<Array<Orgs_Bool_Exp>>;
  _not?: Maybe<Orgs_Bool_Exp>;
  _or?: Maybe<Array<Orgs_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  products?: Maybe<Products_Bool_Exp>;
  sales?: Maybe<Sales_Bool_Exp>;
  shops?: Maybe<Shops_Bool_Exp>;
};

/** unique or primary key constraints on table "orgs" */
export enum Orgs_Constraint {
  /** unique or primary key constraint */
  OrgPkey = 'org_pkey'
}

/** input type for inserting data into table "orgs" */
export type Orgs_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Products_Arr_Rel_Insert_Input>;
  sales?: Maybe<Sales_Arr_Rel_Insert_Input>;
  shops?: Maybe<Shops_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Orgs_Max_Fields = {
  __typename?: 'orgs_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Orgs_Min_Fields = {
  __typename?: 'orgs_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "orgs" */
export type Orgs_Mutation_Response = {
  __typename?: 'orgs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orgs>;
};

/** input type for inserting object relation for remote table "orgs" */
export type Orgs_Obj_Rel_Insert_Input = {
  data: Orgs_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Orgs_On_Conflict>;
};

/** on_conflict condition type for table "orgs" */
export type Orgs_On_Conflict = {
  constraint: Orgs_Constraint;
  update_columns?: Array<Orgs_Update_Column>;
  where?: Maybe<Orgs_Bool_Exp>;
};

/** Ordering options when selecting data from "orgs". */
export type Orgs_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  products_aggregate?: Maybe<Products_Aggregate_Order_By>;
  sales_aggregate?: Maybe<Sales_Aggregate_Order_By>;
  shops_aggregate?: Maybe<Shops_Aggregate_Order_By>;
};

/** primary key columns input for table: orgs */
export type Orgs_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "orgs" */
export enum Orgs_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "orgs" */
export type Orgs_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "orgs" */
export enum Orgs_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** holds product information */
export type Products = {
  __typename?: 'products';
  amount: Scalars['numeric'];
  code: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  org: Scalars['uuid'];
  /** An object relationship */
  orgByOrg: Orgs;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: Maybe<Products_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Products_Max_Order_By>;
  min?: Maybe<Products_Min_Order_By>;
  stddev?: Maybe<Products_Stddev_Order_By>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Order_By>;
  sum?: Maybe<Products_Sum_Order_By>;
  var_pop?: Maybe<Products_Var_Pop_Order_By>;
  var_samp?: Maybe<Products_Var_Samp_Order_By>;
  variance?: Maybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  amount?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: Maybe<Array<Products_Bool_Exp>>;
  _not?: Maybe<Products_Bool_Exp>;
  _or?: Maybe<Array<Products_Bool_Exp>>;
  amount?: Maybe<Numeric_Comparison_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  orgByOrg?: Maybe<Orgs_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductPkey = 'product_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  amount?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  amount?: Maybe<Scalars['numeric']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  orgByOrg?: Maybe<Orgs_Obj_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  amount?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  amount?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: Maybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  amount?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  orgByOrg?: Maybe<Orgs_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Org = 'org',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  amount?: Maybe<Scalars['numeric']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  amount?: Maybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Org = 'org',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  amount?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "ROLES" */
  ROLES: Array<Roles>;
  /** fetch aggregated fields from the table: "ROLES" */
  ROLES_aggregate: Roles_Aggregate;
  /** fetch data from the table: "ROLES" using primary key columns */
  ROLES_by_pk?: Maybe<Roles>;
  /** An array relationship */
  active_roles: Array<Active_Roles>;
  /** An aggregate relationship */
  active_roles_aggregate: Active_Roles_Aggregate;
  /** fetch data from the table: "active_roles" using primary key columns */
  active_roles_by_pk?: Maybe<Active_Roles>;
  /** fetch data from the table: "orgs" */
  orgs: Array<Orgs>;
  /** fetch aggregated fields from the table: "orgs" */
  orgs_aggregate: Orgs_Aggregate;
  /** fetch data from the table: "orgs" using primary key columns */
  orgs_by_pk?: Maybe<Orgs>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** An array relationship */
  sales: Array<Sales>;
  /** An aggregate relationship */
  sales_aggregate: Sales_Aggregate;
  /** fetch data from the table: "sales" using primary key columns */
  sales_by_pk?: Maybe<Sales>;
  /** An array relationship */
  shops: Array<Shops>;
  /** An aggregate relationship */
  shops_aggregate: Shops_Aggregate;
  /** fetch data from the table: "shops" using primary key columns */
  shops_by_pk?: Maybe<Shops>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_By_PkArgs = {
  role: Scalars['String'];
};


export type Query_RootActive_RolesArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};


export type Query_RootActive_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};


export type Query_RootActive_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrgsArgs = {
  distinct_on?: Maybe<Array<Orgs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orgs_Order_By>>;
  where?: Maybe<Orgs_Bool_Exp>;
};


export type Query_RootOrgs_AggregateArgs = {
  distinct_on?: Maybe<Array<Orgs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orgs_Order_By>>;
  where?: Maybe<Orgs_Bool_Exp>;
};


export type Query_RootOrgs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSalesArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
};


export type Query_RootSales_AggregateArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
};


export type Query_RootSales_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootShopsArgs = {
  distinct_on?: Maybe<Array<Shops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shops_Order_By>>;
  where?: Maybe<Shops_Bool_Exp>;
};


export type Query_RootShops_AggregateArgs = {
  distinct_on?: Maybe<Array<Shops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shops_Order_By>>;
  where?: Maybe<Shops_Bool_Exp>;
};


export type Query_RootShops_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


export type Query_RootTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


export type Query_RootTransactions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** holds sales data */
export type Sales = {
  __typename?: 'sales';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  org: Scalars['uuid'];
  /** An object relationship */
  orgByOrg: Orgs;
  shop: Scalars['uuid'];
  /** An object relationship */
  shopByShop: Shops;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  updatedAt: Scalars['timestamptz'];
  user: Scalars['uuid'];
  /** An object relationship */
  userByUser: Users;
};


/** holds sales data */
export type SalesTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


/** holds sales data */
export type SalesTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};

/** aggregated selection of "sales" */
export type Sales_Aggregate = {
  __typename?: 'sales_aggregate';
  aggregate?: Maybe<Sales_Aggregate_Fields>;
  nodes: Array<Sales>;
};

/** aggregate fields of "sales" */
export type Sales_Aggregate_Fields = {
  __typename?: 'sales_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Sales_Max_Fields>;
  min?: Maybe<Sales_Min_Fields>;
};


/** aggregate fields of "sales" */
export type Sales_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sales_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sales" */
export type Sales_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Sales_Max_Order_By>;
  min?: Maybe<Sales_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sales" */
export type Sales_Arr_Rel_Insert_Input = {
  data: Array<Sales_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Sales_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sales". All fields are combined with a logical 'AND'. */
export type Sales_Bool_Exp = {
  _and?: Maybe<Array<Sales_Bool_Exp>>;
  _not?: Maybe<Sales_Bool_Exp>;
  _or?: Maybe<Array<Sales_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  orgByOrg?: Maybe<Orgs_Bool_Exp>;
  shop?: Maybe<Uuid_Comparison_Exp>;
  shopByShop?: Maybe<Shops_Bool_Exp>;
  transactions?: Maybe<Transactions_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Uuid_Comparison_Exp>;
  userByUser?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "sales" */
export enum Sales_Constraint {
  /** unique or primary key constraint */
  SalesPkey = 'sales_pkey'
}

/** input type for inserting data into table "sales" */
export type Sales_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  orgByOrg?: Maybe<Orgs_Obj_Rel_Insert_Input>;
  shop?: Maybe<Scalars['uuid']>;
  shopByShop?: Maybe<Shops_Obj_Rel_Insert_Input>;
  transactions?: Maybe<Transactions_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
  userByUser?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Sales_Max_Fields = {
  __typename?: 'sales_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "sales" */
export type Sales_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  shop?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Sales_Min_Fields = {
  __typename?: 'sales_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "sales" */
export type Sales_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  shop?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Order_By>;
};

/** response of any mutation on the table "sales" */
export type Sales_Mutation_Response = {
  __typename?: 'sales_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sales>;
};

/** input type for inserting object relation for remote table "sales" */
export type Sales_Obj_Rel_Insert_Input = {
  data: Sales_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Sales_On_Conflict>;
};

/** on_conflict condition type for table "sales" */
export type Sales_On_Conflict = {
  constraint: Sales_Constraint;
  update_columns?: Array<Sales_Update_Column>;
  where?: Maybe<Sales_Bool_Exp>;
};

/** Ordering options when selecting data from "sales". */
export type Sales_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  orgByOrg?: Maybe<Orgs_Order_By>;
  shop?: Maybe<Order_By>;
  shopByShop?: Maybe<Shops_Order_By>;
  transactions_aggregate?: Maybe<Transactions_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Order_By>;
  userByUser?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: sales */
export type Sales_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "sales" */
export enum Sales_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Org = 'org',
  /** column name */
  Shop = 'shop',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "sales" */
export type Sales_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** update columns of table "sales" */
export enum Sales_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Org = 'org',
  /** column name */
  Shop = 'shop',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  User = 'user'
}

/** hols shops info */
export type Shops = {
  __typename?: 'shops';
  address: Scalars['String'];
  id: Scalars['uuid'];
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  org: Scalars['uuid'];
  /** An object relationship */
  orgByOrg: Orgs;
  /** An array relationship */
  sales: Array<Sales>;
  /** An aggregate relationship */
  sales_aggregate: Sales_Aggregate;
};


/** hols shops info */
export type ShopsSalesArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
};


/** hols shops info */
export type ShopsSales_AggregateArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
};

/** aggregated selection of "shops" */
export type Shops_Aggregate = {
  __typename?: 'shops_aggregate';
  aggregate?: Maybe<Shops_Aggregate_Fields>;
  nodes: Array<Shops>;
};

/** aggregate fields of "shops" */
export type Shops_Aggregate_Fields = {
  __typename?: 'shops_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Shops_Max_Fields>;
  min?: Maybe<Shops_Min_Fields>;
};


/** aggregate fields of "shops" */
export type Shops_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Shops_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "shops" */
export type Shops_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Shops_Max_Order_By>;
  min?: Maybe<Shops_Min_Order_By>;
};

/** input type for inserting array relation for remote table "shops" */
export type Shops_Arr_Rel_Insert_Input = {
  data: Array<Shops_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Shops_On_Conflict>;
};

/** Boolean expression to filter rows from the table "shops". All fields are combined with a logical 'AND'. */
export type Shops_Bool_Exp = {
  _and?: Maybe<Array<Shops_Bool_Exp>>;
  _not?: Maybe<Shops_Bool_Exp>;
  _or?: Maybe<Array<Shops_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  orgByOrg?: Maybe<Orgs_Bool_Exp>;
  sales?: Maybe<Sales_Bool_Exp>;
};

/** unique or primary key constraints on table "shops" */
export enum Shops_Constraint {
  /** unique or primary key constraint */
  ShopsPkey = 'shops_pkey'
}

/** input type for inserting data into table "shops" */
export type Shops_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  orgByOrg?: Maybe<Orgs_Obj_Rel_Insert_Input>;
  sales?: Maybe<Sales_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Shops_Max_Fields = {
  __typename?: 'shops_max_fields';
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "shops" */
export type Shops_Max_Order_By = {
  address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Shops_Min_Fields = {
  __typename?: 'shops_min_fields';
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "shops" */
export type Shops_Min_Order_By = {
  address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
};

/** response of any mutation on the table "shops" */
export type Shops_Mutation_Response = {
  __typename?: 'shops_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Shops>;
};

/** input type for inserting object relation for remote table "shops" */
export type Shops_Obj_Rel_Insert_Input = {
  data: Shops_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Shops_On_Conflict>;
};

/** on_conflict condition type for table "shops" */
export type Shops_On_Conflict = {
  constraint: Shops_Constraint;
  update_columns?: Array<Shops_Update_Column>;
  where?: Maybe<Shops_Bool_Exp>;
};

/** Ordering options when selecting data from "shops". */
export type Shops_Order_By = {
  address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  orgByOrg?: Maybe<Orgs_Order_By>;
  sales_aggregate?: Maybe<Sales_Aggregate_Order_By>;
};

/** primary key columns input for table: shops */
export type Shops_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "shops" */
export enum Shops_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  Org = 'org'
}

/** input type for updating data in table "shops" */
export type Shops_Set_Input = {
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
};

/** update columns of table "shops" */
export enum Shops_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  Org = 'org'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "ROLES" */
  ROLES: Array<Roles>;
  /** fetch aggregated fields from the table: "ROLES" */
  ROLES_aggregate: Roles_Aggregate;
  /** fetch data from the table: "ROLES" using primary key columns */
  ROLES_by_pk?: Maybe<Roles>;
  /** An array relationship */
  active_roles: Array<Active_Roles>;
  /** An aggregate relationship */
  active_roles_aggregate: Active_Roles_Aggregate;
  /** fetch data from the table: "active_roles" using primary key columns */
  active_roles_by_pk?: Maybe<Active_Roles>;
  /** fetch data from the table: "orgs" */
  orgs: Array<Orgs>;
  /** fetch aggregated fields from the table: "orgs" */
  orgs_aggregate: Orgs_Aggregate;
  /** fetch data from the table: "orgs" using primary key columns */
  orgs_by_pk?: Maybe<Orgs>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** An array relationship */
  sales: Array<Sales>;
  /** An aggregate relationship */
  sales_aggregate: Sales_Aggregate;
  /** fetch data from the table: "sales" using primary key columns */
  sales_by_pk?: Maybe<Sales>;
  /** An array relationship */
  shops: Array<Shops>;
  /** An aggregate relationship */
  shops_aggregate: Shops_Aggregate;
  /** fetch data from the table: "shops" using primary key columns */
  shops_by_pk?: Maybe<Shops>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_By_PkArgs = {
  role: Scalars['String'];
};


export type Subscription_RootActive_RolesArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};


export type Subscription_RootActive_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};


export type Subscription_RootActive_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrgsArgs = {
  distinct_on?: Maybe<Array<Orgs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orgs_Order_By>>;
  where?: Maybe<Orgs_Bool_Exp>;
};


export type Subscription_RootOrgs_AggregateArgs = {
  distinct_on?: Maybe<Array<Orgs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orgs_Order_By>>;
  where?: Maybe<Orgs_Bool_Exp>;
};


export type Subscription_RootOrgs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSalesArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
};


export type Subscription_RootSales_AggregateArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
};


export type Subscription_RootSales_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootShopsArgs = {
  distinct_on?: Maybe<Array<Shops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shops_Order_By>>;
  where?: Maybe<Shops_Bool_Exp>;
};


export type Subscription_RootShops_AggregateArgs = {
  distinct_on?: Maybe<Array<Shops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shops_Order_By>>;
  where?: Maybe<Shops_Bool_Exp>;
};


export type Subscription_RootShops_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** holds transactions data */
export type Transactions = {
  __typename?: 'transactions';
  count: Scalars['Int'];
  id: Scalars['uuid'];
  p_code: Scalars['String'];
  sale: Scalars['uuid'];
  /** An object relationship */
  saleBySale: Sales;
};

/** aggregated selection of "transactions" */
export type Transactions_Aggregate = {
  __typename?: 'transactions_aggregate';
  aggregate?: Maybe<Transactions_Aggregate_Fields>;
  nodes: Array<Transactions>;
};

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_Fields = {
  __typename?: 'transactions_aggregate_fields';
  avg?: Maybe<Transactions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transactions_Max_Fields>;
  min?: Maybe<Transactions_Min_Fields>;
  stddev?: Maybe<Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Transactions_Sum_Fields>;
  var_pop?: Maybe<Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Transactions_Var_Samp_Fields>;
  variance?: Maybe<Transactions_Variance_Fields>;
};


/** aggregate fields of "transactions" */
export type Transactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transactions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transactions" */
export type Transactions_Aggregate_Order_By = {
  avg?: Maybe<Transactions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Transactions_Max_Order_By>;
  min?: Maybe<Transactions_Min_Order_By>;
  stddev?: Maybe<Transactions_Stddev_Order_By>;
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Order_By>;
  sum?: Maybe<Transactions_Sum_Order_By>;
  var_pop?: Maybe<Transactions_Var_Pop_Order_By>;
  var_samp?: Maybe<Transactions_Var_Samp_Order_By>;
  variance?: Maybe<Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transactions" */
export type Transactions_Arr_Rel_Insert_Input = {
  data: Array<Transactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename?: 'transactions_avg_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transactions" */
export type Transactions_Avg_Order_By = {
  count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: Maybe<Array<Transactions_Bool_Exp>>;
  _not?: Maybe<Transactions_Bool_Exp>;
  _or?: Maybe<Array<Transactions_Bool_Exp>>;
  count?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  p_code?: Maybe<String_Comparison_Exp>;
  sale?: Maybe<Uuid_Comparison_Exp>;
  saleBySale?: Maybe<Sales_Bool_Exp>;
};

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint */
  TransactionsPkey = 'transactions_pkey'
}

/** input type for incrementing numeric columns in table "transactions" */
export type Transactions_Inc_Input = {
  count?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  sale?: Maybe<Scalars['uuid']>;
  saleBySale?: Maybe<Sales_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'transactions_max_fields';
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  sale?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  sale?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'transactions_min_fields';
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  sale?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  sale?: Maybe<Order_By>;
};

/** response of any mutation on the table "transactions" */
export type Transactions_Mutation_Response = {
  __typename?: 'transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transactions>;
};

/** on_conflict condition type for table "transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint;
  update_columns?: Array<Transactions_Update_Column>;
  where?: Maybe<Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "transactions". */
export type Transactions_Order_By = {
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  sale?: Maybe<Order_By>;
  saleBySale?: Maybe<Sales_Order_By>;
};

/** primary key columns input for table: transactions */
export type Transactions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Id = 'id',
  /** column name */
  PCode = 'p_code',
  /** column name */
  Sale = 'sale'
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  sale?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Transactions_Stddev_Fields = {
  __typename?: 'transactions_stddev_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transactions" */
export type Transactions_Stddev_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename?: 'transactions_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename?: 'transactions_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Transactions_Sum_Fields = {
  __typename?: 'transactions_sum_fields';
  count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "transactions" */
export type Transactions_Sum_Order_By = {
  count?: Maybe<Order_By>;
};

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Id = 'id',
  /** column name */
  PCode = 'p_code',
  /** column name */
  Sale = 'sale'
}

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename?: 'transactions_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transactions" */
export type Transactions_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename?: 'transactions_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transactions" */
export type Transactions_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename?: 'transactions_variance_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transactions" */
export type Transactions_Variance_Order_By = {
  count?: Maybe<Order_By>;
};

/** holds user data */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  activeRolesByUser: Array<Active_Roles>;
  /** An aggregate relationship */
  activeRolesByUser_aggregate: Active_Roles_Aggregate;
  /** An array relationship */
  active_roles: Array<Active_Roles>;
  /** An aggregate relationship */
  active_roles_aggregate: Active_Roles_Aggregate;
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  pwd: Scalars['String'];
  /** An array relationship */
  sales: Array<Sales>;
  /** An aggregate relationship */
  sales_aggregate: Sales_Aggregate;
};


/** holds user data */
export type UsersActiveRolesByUserArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};


/** holds user data */
export type UsersActiveRolesByUser_AggregateArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};


/** holds user data */
export type UsersActive_RolesArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};


/** holds user data */
export type UsersActive_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};


/** holds user data */
export type UsersSalesArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
};


/** holds user data */
export type UsersSales_AggregateArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  activeRolesByUser?: Maybe<Active_Roles_Bool_Exp>;
  active_roles?: Maybe<Active_Roles_Bool_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  pwd?: Maybe<String_Comparison_Exp>;
  sales?: Maybe<Sales_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  activeRolesByUser?: Maybe<Active_Roles_Arr_Rel_Insert_Input>;
  active_roles?: Maybe<Active_Roles_Arr_Rel_Insert_Input>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pwd?: Maybe<Scalars['String']>;
  sales?: Maybe<Sales_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pwd?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pwd?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  activeRolesByUser_aggregate?: Maybe<Active_Roles_Aggregate_Order_By>;
  active_roles_aggregate?: Maybe<Active_Roles_Aggregate_Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  pwd?: Maybe<Order_By>;
  sales_aggregate?: Maybe<Sales_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Pwd = 'pwd'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pwd?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Pwd = 'pwd'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type FindproductQueryVariables = Exact<{
  _iregex?: Maybe<Scalars['String']>;
  _iregex1?: Maybe<Scalars['String']>;
}>;


export type FindproductQuery = (
  { __typename?: 'query_root' }
  & { products: Array<(
    { __typename?: 'products' }
    & Pick<Products, 'amount' | 'code' | 'createdAt' | 'id' | 'name' | 'org'>
  )> }
);

export type AddtransactionMutationVariables = Exact<{
  objects?: Maybe<Array<Transactions_Insert_Input> | Transactions_Insert_Input>;
}>;


export type AddtransactionMutation = (
  { __typename?: 'mutation_root' }
  & { insert_transactions?: Maybe<(
    { __typename?: 'transactions_mutation_response' }
    & { returning: Array<(
      { __typename?: 'transactions' }
      & Pick<Transactions, 'id'>
    )> }
  )> }
);

export type SoldMutationVariables = Exact<{
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  user?: Maybe<Scalars['uuid']>;
  data?: Maybe<Array<Transactions_Insert_Input> | Transactions_Insert_Input>;
}>;


export type SoldMutation = (
  { __typename?: 'mutation_root' }
  & { insert_sales?: Maybe<(
    { __typename?: 'sales_mutation_response' }
    & Pick<Sales_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'sales' }
      & Pick<Sales, 'id'>
    )> }
  )> }
);

export type GetsalesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetsalesQuery = (
  { __typename?: 'query_root' }
  & { sales: Array<(
    { __typename?: 'sales' }
    & Pick<Sales, 'createdAt' | 'id' | 'org'>
    & { transactions: Array<(
      { __typename?: 'transactions' }
      & Pick<Transactions, 'count' | 'id' | 'p_code'>
    )>, transactions_aggregate: (
      { __typename?: 'transactions_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'transactions_aggregate_fields' }
        & Pick<Transactions_Aggregate_Fields, 'count'>
      )> }
    ), userByUser: (
      { __typename?: 'users' }
      & Pick<Users, 'name'>
    ) }
  )> }
);

export type AddproductMutationVariables = Exact<{
  objects?: Maybe<Array<Products_Insert_Input> | Products_Insert_Input>;
}>;


export type AddproductMutation = (
  { __typename?: 'mutation_root' }
  & { insert_products?: Maybe<(
    { __typename?: 'products_mutation_response' }
    & Pick<Products_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'products' }
      & Pick<Products, 'code' | 'amount' | 'createdAt' | 'id' | 'name' | 'org' | 'updatedAt'>
    )> }
  )> }
);

export type GetshopsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetshopsQuery = (
  { __typename?: 'query_root' }
  & { shops: Array<(
    { __typename?: 'shops' }
    & Pick<Shops, 'id' | 'location' | 'org' | 'name' | 'address'>
    & { orgByOrg: (
      { __typename?: 'orgs' }
      & Pick<Orgs, 'name'>
    ) }
  )> }
);

export type AddshopMutationVariables = Exact<{
  objects?: Maybe<Array<Shops_Insert_Input> | Shops_Insert_Input>;
}>;


export type AddshopMutation = (
  { __typename?: 'mutation_root' }
  & { insert_shops?: Maybe<(
    { __typename?: 'shops_mutation_response' }
    & Pick<Shops_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'shops' }
      & Pick<Shops, 'id'>
    )> }
  )> }
);

export type GetusersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetusersQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'name'>
  )> }
);

export type GetproductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetproductsQuery = (
  { __typename?: 'query_root' }
  & { products: Array<(
    { __typename?: 'products' }
    & Pick<Products, 'amount' | 'code' | 'createdAt' | 'id' | 'name' | 'org'>
  )> }
);


export const FindproductDocument = gql`
    query findproduct($_iregex: String = "", $_iregex1: String = "") {
  products(where: {_or: {name: {_iregex: $_iregex}, code: {_iregex: $_iregex1}}}) {
    amount
    code
    createdAt
    id
    name
    org
  }
}
    `;

/**
 * __useFindproductQuery__
 *
 * To run a query within a React component, call `useFindproductQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindproductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindproductQuery({
 *   variables: {
 *      _iregex: // value for '_iregex'
 *      _iregex1: // value for '_iregex1'
 *   },
 * });
 */
export function useFindproductQuery(baseOptions?: Apollo.QueryHookOptions<FindproductQuery, FindproductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindproductQuery, FindproductQueryVariables>(FindproductDocument, options);
      }
export function useFindproductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindproductQuery, FindproductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindproductQuery, FindproductQueryVariables>(FindproductDocument, options);
        }
export type FindproductQueryHookResult = ReturnType<typeof useFindproductQuery>;
export type FindproductLazyQueryHookResult = ReturnType<typeof useFindproductLazyQuery>;
export type FindproductQueryResult = Apollo.QueryResult<FindproductQuery, FindproductQueryVariables>;
export const AddtransactionDocument = gql`
    mutation addtransaction($objects: [transactions_insert_input!] = {}) {
  insert_transactions(objects: $objects) {
    returning {
      id
    }
  }
}
    `;
export type AddtransactionMutationFn = Apollo.MutationFunction<AddtransactionMutation, AddtransactionMutationVariables>;

/**
 * __useAddtransactionMutation__
 *
 * To run a mutation, you first call `useAddtransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddtransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addtransactionMutation, { data, loading, error }] = useAddtransactionMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useAddtransactionMutation(baseOptions?: Apollo.MutationHookOptions<AddtransactionMutation, AddtransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddtransactionMutation, AddtransactionMutationVariables>(AddtransactionDocument, options);
      }
export type AddtransactionMutationHookResult = ReturnType<typeof useAddtransactionMutation>;
export type AddtransactionMutationResult = Apollo.MutationResult<AddtransactionMutation>;
export type AddtransactionMutationOptions = Apollo.BaseMutationOptions<AddtransactionMutation, AddtransactionMutationVariables>;
export const SoldDocument = gql`
    mutation sold($org: uuid = "", $shop: uuid = "", $user: uuid = "", $data: [transactions_insert_input!] = {}) {
  insert_sales(
    objects: {org: $org, shop: $shop, user: $user, transactions: {data: $data}}
  ) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type SoldMutationFn = Apollo.MutationFunction<SoldMutation, SoldMutationVariables>;

/**
 * __useSoldMutation__
 *
 * To run a mutation, you first call `useSoldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSoldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [soldMutation, { data, loading, error }] = useSoldMutation({
 *   variables: {
 *      org: // value for 'org'
 *      shop: // value for 'shop'
 *      user: // value for 'user'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSoldMutation(baseOptions?: Apollo.MutationHookOptions<SoldMutation, SoldMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SoldMutation, SoldMutationVariables>(SoldDocument, options);
      }
export type SoldMutationHookResult = ReturnType<typeof useSoldMutation>;
export type SoldMutationResult = Apollo.MutationResult<SoldMutation>;
export type SoldMutationOptions = Apollo.BaseMutationOptions<SoldMutation, SoldMutationVariables>;
export const GetsalesDocument = gql`
    query getsales($limit: Int = 2) {
  sales(order_by: {createdAt: desc}, limit: $limit) {
    createdAt
    id
    org
    transactions {
      count
      id
      p_code
    }
    transactions_aggregate(limit: $limit) {
      aggregate {
        count
      }
    }
    userByUser {
      name
    }
  }
}
    `;

/**
 * __useGetsalesQuery__
 *
 * To run a query within a React component, call `useGetsalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetsalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetsalesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetsalesQuery(baseOptions?: Apollo.QueryHookOptions<GetsalesQuery, GetsalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetsalesQuery, GetsalesQueryVariables>(GetsalesDocument, options);
      }
export function useGetsalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetsalesQuery, GetsalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetsalesQuery, GetsalesQueryVariables>(GetsalesDocument, options);
        }
export type GetsalesQueryHookResult = ReturnType<typeof useGetsalesQuery>;
export type GetsalesLazyQueryHookResult = ReturnType<typeof useGetsalesLazyQuery>;
export type GetsalesQueryResult = Apollo.QueryResult<GetsalesQuery, GetsalesQueryVariables>;
export const AddproductDocument = gql`
    mutation addproduct($objects: [products_insert_input!] = {}) {
  insert_products(objects: $objects) {
    affected_rows
    returning {
      code
      amount
      createdAt
      id
      name
      org
      updatedAt
    }
  }
}
    `;
export type AddproductMutationFn = Apollo.MutationFunction<AddproductMutation, AddproductMutationVariables>;

/**
 * __useAddproductMutation__
 *
 * To run a mutation, you first call `useAddproductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddproductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addproductMutation, { data, loading, error }] = useAddproductMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useAddproductMutation(baseOptions?: Apollo.MutationHookOptions<AddproductMutation, AddproductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddproductMutation, AddproductMutationVariables>(AddproductDocument, options);
      }
export type AddproductMutationHookResult = ReturnType<typeof useAddproductMutation>;
export type AddproductMutationResult = Apollo.MutationResult<AddproductMutation>;
export type AddproductMutationOptions = Apollo.BaseMutationOptions<AddproductMutation, AddproductMutationVariables>;
export const GetshopsDocument = gql`
    query getshops($limit: Int = 10, $offset: Int = 0) {
  shops(offset: $offset, limit: $limit) {
    id
    location
    org
    name
    address
    orgByOrg {
      name
    }
  }
}
    `;

/**
 * __useGetshopsQuery__
 *
 * To run a query within a React component, call `useGetshopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetshopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetshopsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetshopsQuery(baseOptions?: Apollo.QueryHookOptions<GetshopsQuery, GetshopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetshopsQuery, GetshopsQueryVariables>(GetshopsDocument, options);
      }
export function useGetshopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetshopsQuery, GetshopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetshopsQuery, GetshopsQueryVariables>(GetshopsDocument, options);
        }
export type GetshopsQueryHookResult = ReturnType<typeof useGetshopsQuery>;
export type GetshopsLazyQueryHookResult = ReturnType<typeof useGetshopsLazyQuery>;
export type GetshopsQueryResult = Apollo.QueryResult<GetshopsQuery, GetshopsQueryVariables>;
export const AddshopDocument = gql`
    mutation addshop($objects: [shops_insert_input!] = {}) {
  insert_shops(objects: $objects) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type AddshopMutationFn = Apollo.MutationFunction<AddshopMutation, AddshopMutationVariables>;

/**
 * __useAddshopMutation__
 *
 * To run a mutation, you first call `useAddshopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddshopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addshopMutation, { data, loading, error }] = useAddshopMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useAddshopMutation(baseOptions?: Apollo.MutationHookOptions<AddshopMutation, AddshopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddshopMutation, AddshopMutationVariables>(AddshopDocument, options);
      }
export type AddshopMutationHookResult = ReturnType<typeof useAddshopMutation>;
export type AddshopMutationResult = Apollo.MutationResult<AddshopMutation>;
export type AddshopMutationOptions = Apollo.BaseMutationOptions<AddshopMutation, AddshopMutationVariables>;
export const GetusersDocument = gql`
    query getusers {
  users {
    name
  }
}
    `;

/**
 * __useGetusersQuery__
 *
 * To run a query within a React component, call `useGetusersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetusersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetusersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetusersQuery(baseOptions?: Apollo.QueryHookOptions<GetusersQuery, GetusersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetusersQuery, GetusersQueryVariables>(GetusersDocument, options);
      }
export function useGetusersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetusersQuery, GetusersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetusersQuery, GetusersQueryVariables>(GetusersDocument, options);
        }
export type GetusersQueryHookResult = ReturnType<typeof useGetusersQuery>;
export type GetusersLazyQueryHookResult = ReturnType<typeof useGetusersLazyQuery>;
export type GetusersQueryResult = Apollo.QueryResult<GetusersQuery, GetusersQueryVariables>;
export const GetproductsDocument = gql`
    query getproducts {
  products(limit: 10, offset: 0) {
    amount
    code
    createdAt
    id
    name
    org
  }
}
    `;

/**
 * __useGetproductsQuery__
 *
 * To run a query within a React component, call `useGetproductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetproductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetproductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetproductsQuery(baseOptions?: Apollo.QueryHookOptions<GetproductsQuery, GetproductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetproductsQuery, GetproductsQueryVariables>(GetproductsDocument, options);
      }
export function useGetproductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetproductsQuery, GetproductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetproductsQuery, GetproductsQueryVariables>(GetproductsDocument, options);
        }
export type GetproductsQueryHookResult = ReturnType<typeof useGetproductsQuery>;
export type GetproductsLazyQueryHookResult = ReturnType<typeof useGetproductsLazyQuery>;
export type GetproductsQueryResult = Apollo.QueryResult<GetproductsQuery, GetproductsQueryVariables>;