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
  bigint: any;
  date: any;
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

/**
 * holds roles details
 *
 *
 * columns and relationships of "ROLES"
 */
export type Roles = {
  __typename?: 'ROLES';
  /** fetch data from the table: "active_roles" */
  active_roles: Array<Active_Roles>;
  /** An aggregate relationship */
  active_roles_aggregate: Active_Roles_Aggregate;
  role: Scalars['String'];
};


/**
 * holds roles details
 *
 *
 * columns and relationships of "ROLES"
 */
export type RolesActive_RolesArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};


/**
 * holds roles details
 *
 *
 * columns and relationships of "ROLES"
 */
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
  /** on conflict condition */
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** on conflict condition type for table "ROLES" */
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

/**
 * active users with role
 *
 *
 * columns and relationships of "active_roles"
 */
export type Active_Roles = {
  __typename?: 'active_roles';
  /** An object relationship */
  ROLE: Roles;
  id: Scalars['uuid'];
  org: Scalars['uuid'];
  /** An object relationship */
  orgByOrg: Orgs;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  role: Scalars['String'];
  /** An array relationship */
  sales: Array<Sales>;
  /** An aggregate relationship */
  sales_aggregate: Sales_Aggregate;
  user: Scalars['uuid'];
  /** An object relationship */
  userByUser: Users;
};


/**
 * active users with role
 *
 *
 * columns and relationships of "active_roles"
 */
export type Active_RolesProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/**
 * active users with role
 *
 *
 * columns and relationships of "active_roles"
 */
export type Active_RolesProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/**
 * active users with role
 *
 *
 * columns and relationships of "active_roles"
 */
export type Active_RolesSalesArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
};


/**
 * active users with role
 *
 *
 * columns and relationships of "active_roles"
 */
export type Active_RolesSales_AggregateArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
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
  /** on conflict condition */
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
  orgByOrg?: Maybe<Orgs_Bool_Exp>;
  products?: Maybe<Products_Bool_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  sales?: Maybe<Sales_Bool_Exp>;
  user?: Maybe<Uuid_Comparison_Exp>;
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
  orgByOrg?: Maybe<Orgs_Obj_Rel_Insert_Input>;
  products?: Maybe<Products_Arr_Rel_Insert_Input>;
  role?: Maybe<Scalars['String']>;
  sales?: Maybe<Sales_Arr_Rel_Insert_Input>;
  user?: Maybe<Scalars['uuid']>;
  userByUser?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Active_Roles_Max_Fields = {
  __typename?: 'active_roles_max_fields';
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "active_roles" */
export type Active_Roles_Max_Order_By = {
  id?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  user?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Active_Roles_Min_Fields = {
  __typename?: 'active_roles_min_fields';
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "active_roles" */
export type Active_Roles_Min_Order_By = {
  id?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
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

/** input type for inserting object relation for remote table "active_roles" */
export type Active_Roles_Obj_Rel_Insert_Input = {
  data: Active_Roles_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Active_Roles_On_Conflict>;
};

/** on conflict condition type for table "active_roles" */
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
  orgByOrg?: Maybe<Orgs_Order_By>;
  products_aggregate?: Maybe<Products_Aggregate_Order_By>;
  role?: Maybe<Order_By>;
  sales_aggregate?: Maybe<Sales_Aggregate_Order_By>;
  user?: Maybe<Order_By>;
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
  role?: Maybe<Scalars['String']>;
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


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "daily_sales" */
export type Daily_Sales = {
  __typename?: 'daily_sales';
  daily?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "daily_sales" */
export type Daily_Sales_Aggregate = {
  __typename?: 'daily_sales_aggregate';
  aggregate?: Maybe<Daily_Sales_Aggregate_Fields>;
  nodes: Array<Daily_Sales>;
};

/** aggregate fields of "daily_sales" */
export type Daily_Sales_Aggregate_Fields = {
  __typename?: 'daily_sales_aggregate_fields';
  avg?: Maybe<Daily_Sales_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Daily_Sales_Max_Fields>;
  min?: Maybe<Daily_Sales_Min_Fields>;
  stddev?: Maybe<Daily_Sales_Stddev_Fields>;
  stddev_pop?: Maybe<Daily_Sales_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Daily_Sales_Stddev_Samp_Fields>;
  sum?: Maybe<Daily_Sales_Sum_Fields>;
  var_pop?: Maybe<Daily_Sales_Var_Pop_Fields>;
  var_samp?: Maybe<Daily_Sales_Var_Samp_Fields>;
  variance?: Maybe<Daily_Sales_Variance_Fields>;
};


/** aggregate fields of "daily_sales" */
export type Daily_Sales_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Daily_Sales_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Daily_Sales_Avg_Fields = {
  __typename?: 'daily_sales_avg_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "daily_sales". All fields are combined with a logical 'AND'. */
export type Daily_Sales_Bool_Exp = {
  _and?: Maybe<Array<Daily_Sales_Bool_Exp>>;
  _not?: Maybe<Daily_Sales_Bool_Exp>;
  _or?: Maybe<Array<Daily_Sales_Bool_Exp>>;
  daily?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  shop?: Maybe<Uuid_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
  total_cost?: Maybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Daily_Sales_Max_Fields = {
  __typename?: 'daily_sales_max_fields';
  daily?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Daily_Sales_Min_Fields = {
  __typename?: 'daily_sales_min_fields';
  daily?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "daily_sales". */
export type Daily_Sales_Order_By = {
  daily?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  shop?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  total_cost?: Maybe<Order_By>;
};

/** select columns of table "daily_sales" */
export enum Daily_Sales_Select_Column {
  /** column name */
  Daily = 'daily',
  /** column name */
  Name = 'name',
  /** column name */
  Org = 'org',
  /** column name */
  Shop = 'shop',
  /** column name */
  Total = 'total',
  /** column name */
  TotalCost = 'total_cost'
}

/** aggregate stddev on columns */
export type Daily_Sales_Stddev_Fields = {
  __typename?: 'daily_sales_stddev_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Daily_Sales_Stddev_Pop_Fields = {
  __typename?: 'daily_sales_stddev_pop_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Daily_Sales_Stddev_Samp_Fields = {
  __typename?: 'daily_sales_stddev_samp_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Daily_Sales_Sum_Fields = {
  __typename?: 'daily_sales_sum_fields';
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Daily_Sales_Var_Pop_Fields = {
  __typename?: 'daily_sales_var_pop_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Daily_Sales_Var_Samp_Fields = {
  __typename?: 'daily_sales_var_samp_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Daily_Sales_Variance_Fields = {
  __typename?: 'daily_sales_variance_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/**
 * holds product inventory
 *
 *
 * columns and relationships of "inventory"
 */
export type Inventory = {
  __typename?: 'inventory';
  count: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  p_code: Scalars['String'];
  p_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  product?: Maybe<Products>;
  role_id?: Maybe<Scalars['uuid']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "inventory" */
export type Inventory_Aggregate = {
  __typename?: 'inventory_aggregate';
  aggregate?: Maybe<Inventory_Aggregate_Fields>;
  nodes: Array<Inventory>;
};

/** aggregate fields of "inventory" */
export type Inventory_Aggregate_Fields = {
  __typename?: 'inventory_aggregate_fields';
  avg?: Maybe<Inventory_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Inventory_Max_Fields>;
  min?: Maybe<Inventory_Min_Fields>;
  stddev?: Maybe<Inventory_Stddev_Fields>;
  stddev_pop?: Maybe<Inventory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Inventory_Stddev_Samp_Fields>;
  sum?: Maybe<Inventory_Sum_Fields>;
  var_pop?: Maybe<Inventory_Var_Pop_Fields>;
  var_samp?: Maybe<Inventory_Var_Samp_Fields>;
  variance?: Maybe<Inventory_Variance_Fields>;
};


/** aggregate fields of "inventory" */
export type Inventory_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Inventory_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "inventory" */
export type Inventory_Aggregate_Order_By = {
  avg?: Maybe<Inventory_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Inventory_Max_Order_By>;
  min?: Maybe<Inventory_Min_Order_By>;
  stddev?: Maybe<Inventory_Stddev_Order_By>;
  stddev_pop?: Maybe<Inventory_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Inventory_Stddev_Samp_Order_By>;
  sum?: Maybe<Inventory_Sum_Order_By>;
  var_pop?: Maybe<Inventory_Var_Pop_Order_By>;
  var_samp?: Maybe<Inventory_Var_Samp_Order_By>;
  variance?: Maybe<Inventory_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "inventory" */
export type Inventory_Arr_Rel_Insert_Input = {
  data: Array<Inventory_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Inventory_On_Conflict>;
};

/** aggregate avg on columns */
export type Inventory_Avg_Fields = {
  __typename?: 'inventory_avg_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "inventory" */
export type Inventory_Avg_Order_By = {
  count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "inventory". All fields are combined with a logical 'AND'. */
export type Inventory_Bool_Exp = {
  _and?: Maybe<Array<Inventory_Bool_Exp>>;
  _not?: Maybe<Inventory_Bool_Exp>;
  _or?: Maybe<Array<Inventory_Bool_Exp>>;
  count?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  p_code?: Maybe<String_Comparison_Exp>;
  p_id?: Maybe<Uuid_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  role_id?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "inventory" */
export enum Inventory_Constraint {
  /** unique or primary key constraint */
  InventoryPkey = 'inventory_pkey'
}

/** input type for incrementing numeric columns in table "inventory" */
export type Inventory_Inc_Input = {
  count?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "inventory" */
export type Inventory_Insert_Input = {
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  p_id?: Maybe<Scalars['uuid']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  role_id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Inventory_Max_Fields = {
  __typename?: 'inventory_max_fields';
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  p_id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "inventory" */
export type Inventory_Max_Order_By = {
  count?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  p_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Inventory_Min_Fields = {
  __typename?: 'inventory_min_fields';
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  p_id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "inventory" */
export type Inventory_Min_Order_By = {
  count?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  p_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "inventory" */
export type Inventory_Mutation_Response = {
  __typename?: 'inventory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Inventory>;
};

/** on conflict condition type for table "inventory" */
export type Inventory_On_Conflict = {
  constraint: Inventory_Constraint;
  update_columns?: Array<Inventory_Update_Column>;
  where?: Maybe<Inventory_Bool_Exp>;
};

/** Ordering options when selecting data from "inventory". */
export type Inventory_Order_By = {
  count?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  p_id?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  role_id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: inventory */
export type Inventory_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "inventory" */
export enum Inventory_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PCode = 'p_code',
  /** column name */
  PId = 'p_id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "inventory" */
export type Inventory_Set_Input = {
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  p_id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Inventory_Stddev_Fields = {
  __typename?: 'inventory_stddev_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "inventory" */
export type Inventory_Stddev_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Inventory_Stddev_Pop_Fields = {
  __typename?: 'inventory_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "inventory" */
export type Inventory_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Inventory_Stddev_Samp_Fields = {
  __typename?: 'inventory_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "inventory" */
export type Inventory_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Inventory_Sum_Fields = {
  __typename?: 'inventory_sum_fields';
  count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "inventory" */
export type Inventory_Sum_Order_By = {
  count?: Maybe<Order_By>;
};

/** update columns of table "inventory" */
export enum Inventory_Update_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PCode = 'p_code',
  /** column name */
  PId = 'p_id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Inventory_Var_Pop_Fields = {
  __typename?: 'inventory_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "inventory" */
export type Inventory_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Inventory_Var_Samp_Fields = {
  __typename?: 'inventory_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "inventory" */
export type Inventory_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Inventory_Variance_Fields = {
  __typename?: 'inventory_variance_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "inventory" */
export type Inventory_Variance_Order_By = {
  count?: Maybe<Order_By>;
};

/** columns and relationships of "monthly_sales" */
export type Monthly_Sales = {
  __typename?: 'monthly_sales';
  monthly?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "monthly_sales" */
export type Monthly_Sales_Aggregate = {
  __typename?: 'monthly_sales_aggregate';
  aggregate?: Maybe<Monthly_Sales_Aggregate_Fields>;
  nodes: Array<Monthly_Sales>;
};

/** aggregate fields of "monthly_sales" */
export type Monthly_Sales_Aggregate_Fields = {
  __typename?: 'monthly_sales_aggregate_fields';
  avg?: Maybe<Monthly_Sales_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Monthly_Sales_Max_Fields>;
  min?: Maybe<Monthly_Sales_Min_Fields>;
  stddev?: Maybe<Monthly_Sales_Stddev_Fields>;
  stddev_pop?: Maybe<Monthly_Sales_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Monthly_Sales_Stddev_Samp_Fields>;
  sum?: Maybe<Monthly_Sales_Sum_Fields>;
  var_pop?: Maybe<Monthly_Sales_Var_Pop_Fields>;
  var_samp?: Maybe<Monthly_Sales_Var_Samp_Fields>;
  variance?: Maybe<Monthly_Sales_Variance_Fields>;
};


/** aggregate fields of "monthly_sales" */
export type Monthly_Sales_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Monthly_Sales_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Monthly_Sales_Avg_Fields = {
  __typename?: 'monthly_sales_avg_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "monthly_sales". All fields are combined with a logical 'AND'. */
export type Monthly_Sales_Bool_Exp = {
  _and?: Maybe<Array<Monthly_Sales_Bool_Exp>>;
  _not?: Maybe<Monthly_Sales_Bool_Exp>;
  _or?: Maybe<Array<Monthly_Sales_Bool_Exp>>;
  monthly?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  shop?: Maybe<Uuid_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
  total_cost?: Maybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Monthly_Sales_Max_Fields = {
  __typename?: 'monthly_sales_max_fields';
  monthly?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Monthly_Sales_Min_Fields = {
  __typename?: 'monthly_sales_min_fields';
  monthly?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "monthly_sales". */
export type Monthly_Sales_Order_By = {
  monthly?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  shop?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  total_cost?: Maybe<Order_By>;
};

/** select columns of table "monthly_sales" */
export enum Monthly_Sales_Select_Column {
  /** column name */
  Monthly = 'monthly',
  /** column name */
  Name = 'name',
  /** column name */
  Org = 'org',
  /** column name */
  Shop = 'shop',
  /** column name */
  Total = 'total',
  /** column name */
  TotalCost = 'total_cost'
}

/** aggregate stddev on columns */
export type Monthly_Sales_Stddev_Fields = {
  __typename?: 'monthly_sales_stddev_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Monthly_Sales_Stddev_Pop_Fields = {
  __typename?: 'monthly_sales_stddev_pop_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Monthly_Sales_Stddev_Samp_Fields = {
  __typename?: 'monthly_sales_stddev_samp_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Monthly_Sales_Sum_Fields = {
  __typename?: 'monthly_sales_sum_fields';
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Monthly_Sales_Var_Pop_Fields = {
  __typename?: 'monthly_sales_var_pop_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Monthly_Sales_Var_Samp_Fields = {
  __typename?: 'monthly_sales_var_samp_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Monthly_Sales_Variance_Fields = {
  __typename?: 'monthly_sales_variance_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

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
  /** delete data from the table: "inventory" */
  delete_inventory?: Maybe<Inventory_Mutation_Response>;
  /** delete single row from the table: "inventory" */
  delete_inventory_by_pk?: Maybe<Inventory>;
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
  /** insert data into the table: "inventory" */
  insert_inventory?: Maybe<Inventory_Mutation_Response>;
  /** insert a single row into the table: "inventory" */
  insert_inventory_one?: Maybe<Inventory>;
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
  /** update data of the table: "inventory" */
  update_inventory?: Maybe<Inventory_Mutation_Response>;
  /** update single row of the table: "inventory" */
  update_inventory_by_pk?: Maybe<Inventory>;
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
export type Mutation_RootDelete_InventoryArgs = {
  where: Inventory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Inventory_By_PkArgs = {
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
export type Mutation_RootInsert_InventoryArgs = {
  objects: Array<Inventory_Insert_Input>;
  on_conflict?: Maybe<Inventory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inventory_OneArgs = {
  object: Inventory_Insert_Input;
  on_conflict?: Maybe<Inventory_On_Conflict>;
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
export type Mutation_RootUpdate_InventoryArgs = {
  _inc?: Maybe<Inventory_Inc_Input>;
  _set?: Maybe<Inventory_Set_Input>;
  where: Inventory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Inventory_By_PkArgs = {
  _inc?: Maybe<Inventory_Inc_Input>;
  _set?: Maybe<Inventory_Set_Input>;
  pk_columns: Inventory_Pk_Columns_Input;
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

/**
 * holds organisation data
 *
 *
 * columns and relationships of "orgs"
 */
export type Orgs = {
  __typename?: 'orgs';
  /** fetch data from the table: "active_roles" */
  active_roles: Array<Active_Roles>;
  /** An aggregate relationship */
  active_roles_aggregate: Active_Roles_Aggregate;
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


/**
 * holds organisation data
 *
 *
 * columns and relationships of "orgs"
 */
export type OrgsActive_RolesArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};


/**
 * holds organisation data
 *
 *
 * columns and relationships of "orgs"
 */
export type OrgsActive_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};


/**
 * holds organisation data
 *
 *
 * columns and relationships of "orgs"
 */
export type OrgsProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/**
 * holds organisation data
 *
 *
 * columns and relationships of "orgs"
 */
export type OrgsProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/**
 * holds organisation data
 *
 *
 * columns and relationships of "orgs"
 */
export type OrgsSalesArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
};


/**
 * holds organisation data
 *
 *
 * columns and relationships of "orgs"
 */
export type OrgsSales_AggregateArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
};


/**
 * holds organisation data
 *
 *
 * columns and relationships of "orgs"
 */
export type OrgsShopsArgs = {
  distinct_on?: Maybe<Array<Shops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shops_Order_By>>;
  where?: Maybe<Shops_Bool_Exp>;
};


/**
 * holds organisation data
 *
 *
 * columns and relationships of "orgs"
 */
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
  active_roles?: Maybe<Active_Roles_Bool_Exp>;
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
  active_roles?: Maybe<Active_Roles_Arr_Rel_Insert_Input>;
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
  /** on conflict condition */
  on_conflict?: Maybe<Orgs_On_Conflict>;
};

/** on conflict condition type for table "orgs" */
export type Orgs_On_Conflict = {
  constraint: Orgs_Constraint;
  update_columns?: Array<Orgs_Update_Column>;
  where?: Maybe<Orgs_Bool_Exp>;
};

/** Ordering options when selecting data from "orgs". */
export type Orgs_Order_By = {
  active_roles_aggregate?: Maybe<Active_Roles_Aggregate_Order_By>;
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

/**
 * holds product information
 *
 *
 * columns and relationships of "products"
 */
export type Products = {
  __typename?: 'products';
  /** An object relationship */
  active_role?: Maybe<Active_Roles>;
  added_by?: Maybe<Scalars['uuid']>;
  amount: Scalars['numeric'];
  code: Scalars['String'];
  cost_price?: Maybe<Scalars['numeric']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  inventories: Array<Inventory>;
  /** An aggregate relationship */
  inventories_aggregate: Inventory_Aggregate;
  name: Scalars['String'];
  org: Scalars['uuid'];
  /** An object relationship */
  orgByOrg: Orgs;
  /** An object relationship */
  products_to_sold?: Maybe<Products_Sold_Till_Date>;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  updatedAt: Scalars['timestamptz'];
};


/**
 * holds product information
 *
 *
 * columns and relationships of "products"
 */
export type ProductsInventoriesArgs = {
  distinct_on?: Maybe<Array<Inventory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Order_By>>;
  where?: Maybe<Inventory_Bool_Exp>;
};


/**
 * holds product information
 *
 *
 * columns and relationships of "products"
 */
export type ProductsInventories_AggregateArgs = {
  distinct_on?: Maybe<Array<Inventory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Order_By>>;
  where?: Maybe<Inventory_Bool_Exp>;
};


/**
 * holds product information
 *
 *
 * columns and relationships of "products"
 */
export type ProductsTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


/**
 * holds product information
 *
 *
 * columns and relationships of "products"
 */
export type ProductsTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
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
  /** on conflict condition */
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  cost_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  amount?: Maybe<Order_By>;
  cost_price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: Maybe<Array<Products_Bool_Exp>>;
  _not?: Maybe<Products_Bool_Exp>;
  _or?: Maybe<Array<Products_Bool_Exp>>;
  active_role?: Maybe<Active_Roles_Bool_Exp>;
  added_by?: Maybe<Uuid_Comparison_Exp>;
  amount?: Maybe<Numeric_Comparison_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  cost_price?: Maybe<Numeric_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  inventories?: Maybe<Inventory_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  orgByOrg?: Maybe<Orgs_Bool_Exp>;
  products_to_sold?: Maybe<Products_Sold_Till_Date_Bool_Exp>;
  transactions?: Maybe<Transactions_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductPkey = 'product_pkey',
  /** unique or primary key constraint */
  ProductsCodeKey = 'products_code_key'
}

/** columns and relationships of "products_in_store" */
export type Products_In_Store = {
  __typename?: 'products_in_store';
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  /** An object relationship */
  sold_products?: Maybe<Products_Sold_Till_Date>;
  total_products?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "products_in_store" */
export type Products_In_Store_Aggregate = {
  __typename?: 'products_in_store_aggregate';
  aggregate?: Maybe<Products_In_Store_Aggregate_Fields>;
  nodes: Array<Products_In_Store>;
};

/** aggregate fields of "products_in_store" */
export type Products_In_Store_Aggregate_Fields = {
  __typename?: 'products_in_store_aggregate_fields';
  avg?: Maybe<Products_In_Store_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_In_Store_Max_Fields>;
  min?: Maybe<Products_In_Store_Min_Fields>;
  stddev?: Maybe<Products_In_Store_Stddev_Fields>;
  stddev_pop?: Maybe<Products_In_Store_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_In_Store_Stddev_Samp_Fields>;
  sum?: Maybe<Products_In_Store_Sum_Fields>;
  var_pop?: Maybe<Products_In_Store_Var_Pop_Fields>;
  var_samp?: Maybe<Products_In_Store_Var_Samp_Fields>;
  variance?: Maybe<Products_In_Store_Variance_Fields>;
};


/** aggregate fields of "products_in_store" */
export type Products_In_Store_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_In_Store_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Products_In_Store_Avg_Fields = {
  __typename?: 'products_in_store_avg_fields';
  total_products?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "products_in_store". All fields are combined with a logical 'AND'. */
export type Products_In_Store_Bool_Exp = {
  _and?: Maybe<Array<Products_In_Store_Bool_Exp>>;
  _not?: Maybe<Products_In_Store_Bool_Exp>;
  _or?: Maybe<Array<Products_In_Store_Bool_Exp>>;
  name?: Maybe<String_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  p_code?: Maybe<String_Comparison_Exp>;
  sold_products?: Maybe<Products_Sold_Till_Date_Bool_Exp>;
  total_products?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Products_In_Store_Max_Fields = {
  __typename?: 'products_in_store_max_fields';
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  total_products?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Products_In_Store_Min_Fields = {
  __typename?: 'products_in_store_min_fields';
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  total_products?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "products_in_store". */
export type Products_In_Store_Order_By = {
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  sold_products?: Maybe<Products_Sold_Till_Date_Order_By>;
  total_products?: Maybe<Order_By>;
};

/** select columns of table "products_in_store" */
export enum Products_In_Store_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Org = 'org',
  /** column name */
  PCode = 'p_code',
  /** column name */
  TotalProducts = 'total_products'
}

/** aggregate stddev on columns */
export type Products_In_Store_Stddev_Fields = {
  __typename?: 'products_in_store_stddev_fields';
  total_products?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Products_In_Store_Stddev_Pop_Fields = {
  __typename?: 'products_in_store_stddev_pop_fields';
  total_products?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Products_In_Store_Stddev_Samp_Fields = {
  __typename?: 'products_in_store_stddev_samp_fields';
  total_products?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Products_In_Store_Sum_Fields = {
  __typename?: 'products_in_store_sum_fields';
  total_products?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Products_In_Store_Var_Pop_Fields = {
  __typename?: 'products_in_store_var_pop_fields';
  total_products?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Products_In_Store_Var_Samp_Fields = {
  __typename?: 'products_in_store_var_samp_fields';
  total_products?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Products_In_Store_Variance_Fields = {
  __typename?: 'products_in_store_variance_fields';
  total_products?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  amount?: Maybe<Scalars['numeric']>;
  cost_price?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  active_role?: Maybe<Active_Roles_Obj_Rel_Insert_Input>;
  added_by?: Maybe<Scalars['uuid']>;
  amount?: Maybe<Scalars['numeric']>;
  code?: Maybe<Scalars['String']>;
  cost_price?: Maybe<Scalars['numeric']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  inventories?: Maybe<Inventory_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  orgByOrg?: Maybe<Orgs_Obj_Rel_Insert_Input>;
  products_to_sold?: Maybe<Products_Sold_Till_Date_Obj_Rel_Insert_Input>;
  transactions?: Maybe<Transactions_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  added_by?: Maybe<Scalars['uuid']>;
  amount?: Maybe<Scalars['numeric']>;
  code?: Maybe<Scalars['String']>;
  cost_price?: Maybe<Scalars['numeric']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  added_by?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  cost_price?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  added_by?: Maybe<Scalars['uuid']>;
  amount?: Maybe<Scalars['numeric']>;
  code?: Maybe<Scalars['String']>;
  cost_price?: Maybe<Scalars['numeric']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  added_by?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  cost_price?: Maybe<Order_By>;
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

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** on conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: Maybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  active_role?: Maybe<Active_Roles_Order_By>;
  added_by?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  cost_price?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventories_aggregate?: Maybe<Inventory_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  orgByOrg?: Maybe<Orgs_Order_By>;
  products_to_sold?: Maybe<Products_Sold_Till_Date_Order_By>;
  transactions_aggregate?: Maybe<Transactions_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  AddedBy = 'added_by',
  /** column name */
  Amount = 'amount',
  /** column name */
  Code = 'code',
  /** column name */
  CostPrice = 'cost_price',
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
  added_by?: Maybe<Scalars['uuid']>;
  amount?: Maybe<Scalars['numeric']>;
  code?: Maybe<Scalars['String']>;
  cost_price?: Maybe<Scalars['numeric']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "products_sold_till_date" */
export type Products_Sold_Till_Date = {
  __typename?: 'products_sold_till_date';
  amount?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "products_sold_till_date" */
export type Products_Sold_Till_Date_Aggregate = {
  __typename?: 'products_sold_till_date_aggregate';
  aggregate?: Maybe<Products_Sold_Till_Date_Aggregate_Fields>;
  nodes: Array<Products_Sold_Till_Date>;
};

/** aggregate fields of "products_sold_till_date" */
export type Products_Sold_Till_Date_Aggregate_Fields = {
  __typename?: 'products_sold_till_date_aggregate_fields';
  avg?: Maybe<Products_Sold_Till_Date_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Sold_Till_Date_Max_Fields>;
  min?: Maybe<Products_Sold_Till_Date_Min_Fields>;
  stddev?: Maybe<Products_Sold_Till_Date_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Sold_Till_Date_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Sold_Till_Date_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sold_Till_Date_Sum_Fields>;
  var_pop?: Maybe<Products_Sold_Till_Date_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Sold_Till_Date_Var_Samp_Fields>;
  variance?: Maybe<Products_Sold_Till_Date_Variance_Fields>;
};


/** aggregate fields of "products_sold_till_date" */
export type Products_Sold_Till_Date_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Sold_Till_Date_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Products_Sold_Till_Date_Avg_Fields = {
  __typename?: 'products_sold_till_date_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "products_sold_till_date". All fields are combined with a logical 'AND'. */
export type Products_Sold_Till_Date_Bool_Exp = {
  _and?: Maybe<Array<Products_Sold_Till_Date_Bool_Exp>>;
  _not?: Maybe<Products_Sold_Till_Date_Bool_Exp>;
  _or?: Maybe<Array<Products_Sold_Till_Date_Bool_Exp>>;
  amount?: Maybe<Numeric_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  p_code?: Maybe<String_Comparison_Exp>;
  sold?: Maybe<Bigint_Comparison_Exp>;
};

/** input type for inserting data into table "products_sold_till_date" */
export type Products_Sold_Till_Date_Insert_Input = {
  amount?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Products_Sold_Till_Date_Max_Fields = {
  __typename?: 'products_sold_till_date_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Products_Sold_Till_Date_Min_Fields = {
  __typename?: 'products_sold_till_date_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['bigint']>;
};

/** input type for inserting object relation for remote table "products_sold_till_date" */
export type Products_Sold_Till_Date_Obj_Rel_Insert_Input = {
  data: Products_Sold_Till_Date_Insert_Input;
};

/** Ordering options when selecting data from "products_sold_till_date". */
export type Products_Sold_Till_Date_Order_By = {
  amount?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** select columns of table "products_sold_till_date" */
export enum Products_Sold_Till_Date_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Name = 'name',
  /** column name */
  Org = 'org',
  /** column name */
  PCode = 'p_code',
  /** column name */
  Sold = 'sold'
}

/** aggregate stddev on columns */
export type Products_Sold_Till_Date_Stddev_Fields = {
  __typename?: 'products_sold_till_date_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Products_Sold_Till_Date_Stddev_Pop_Fields = {
  __typename?: 'products_sold_till_date_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Products_Sold_Till_Date_Stddev_Samp_Fields = {
  __typename?: 'products_sold_till_date_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Products_Sold_Till_Date_Sum_Fields = {
  __typename?: 'products_sold_till_date_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  sold?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Products_Sold_Till_Date_Var_Pop_Fields = {
  __typename?: 'products_sold_till_date_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Products_Sold_Till_Date_Var_Samp_Fields = {
  __typename?: 'products_sold_till_date_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Products_Sold_Till_Date_Variance_Fields = {
  __typename?: 'products_sold_till_date_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  cost_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  cost_price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  cost_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  cost_price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  cost_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  cost_price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  cost_price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  cost_price?: Maybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  AddedBy = 'added_by',
  /** column name */
  Amount = 'amount',
  /** column name */
  Code = 'code',
  /** column name */
  CostPrice = 'cost_price',
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
  cost_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  cost_price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  cost_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  cost_price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  cost_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  amount?: Maybe<Order_By>;
  cost_price?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "ROLES" */
  ROLES: Array<Roles>;
  /** fetch aggregated fields from the table: "ROLES" */
  ROLES_aggregate: Roles_Aggregate;
  /** fetch data from the table: "ROLES" using primary key columns */
  ROLES_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "active_roles" */
  active_roles: Array<Active_Roles>;
  /** An aggregate relationship */
  active_roles_aggregate: Active_Roles_Aggregate;
  /** fetch data from the table: "active_roles" using primary key columns */
  active_roles_by_pk?: Maybe<Active_Roles>;
  /** fetch data from the table: "daily_sales" */
  daily_sales: Array<Daily_Sales>;
  /** fetch aggregated fields from the table: "daily_sales" */
  daily_sales_aggregate: Daily_Sales_Aggregate;
  /** fetch data from the table: "inventory" */
  inventory: Array<Inventory>;
  /** fetch aggregated fields from the table: "inventory" */
  inventory_aggregate: Inventory_Aggregate;
  /** fetch data from the table: "inventory" using primary key columns */
  inventory_by_pk?: Maybe<Inventory>;
  /** fetch data from the table: "monthly_sales" */
  monthly_sales: Array<Monthly_Sales>;
  /** fetch aggregated fields from the table: "monthly_sales" */
  monthly_sales_aggregate: Monthly_Sales_Aggregate;
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
  /** fetch data from the table: "products_in_store" */
  products_in_store: Array<Products_In_Store>;
  /** fetch aggregated fields from the table: "products_in_store" */
  products_in_store_aggregate: Products_In_Store_Aggregate;
  /** fetch data from the table: "products_sold_till_date" */
  products_sold_till_date: Array<Products_Sold_Till_Date>;
  /** fetch aggregated fields from the table: "products_sold_till_date" */
  products_sold_till_date_aggregate: Products_Sold_Till_Date_Aggregate;
  /** An array relationship */
  sales: Array<Sales>;
  /** An aggregate relationship */
  sales_aggregate: Sales_Aggregate;
  /** fetch data from the table: "sales" using primary key columns */
  sales_by_pk?: Maybe<Sales>;
  /** fetch data from the table: "sales_by_shop" */
  sales_by_shop: Array<Sales_By_Shop>;
  /** fetch aggregated fields from the table: "sales_by_shop" */
  sales_by_shop_aggregate: Sales_By_Shop_Aggregate;
  /** fetch data from the table: "shop_sales_by_date" */
  shop_sales_by_date: Array<Shop_Sales_By_Date>;
  /** fetch aggregated fields from the table: "shop_sales_by_date" */
  shop_sales_by_date_aggregate: Shop_Sales_By_Date_Aggregate;
  /** An array relationship */
  shops: Array<Shops>;
  /** An aggregate relationship */
  shops_aggregate: Shops_Aggregate;
  /** fetch data from the table: "shops" using primary key columns */
  shops_by_pk?: Maybe<Shops>;
  /** fetch data from the table: "top_products_daily" */
  top_products_daily: Array<Top_Products_Daily>;
  /** fetch aggregated fields from the table: "top_products_daily" */
  top_products_daily_aggregate: Top_Products_Daily_Aggregate;
  /** fetch data from the table: "total_sales_by_shop" */
  total_sales_by_shop: Array<Total_Sales_By_Shop>;
  /** fetch aggregated fields from the table: "total_sales_by_shop" */
  total_sales_by_shop_aggregate: Total_Sales_By_Shop_Aggregate;
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
  /** fetch data from the table: "weekly_sales" */
  weekly_sales: Array<Weekly_Sales>;
  /** fetch aggregated fields from the table: "weekly_sales" */
  weekly_sales_aggregate: Weekly_Sales_Aggregate;
  /** fetch data from the table: "yearly_sales" */
  yearly_sales: Array<Yearly_Sales>;
  /** fetch aggregated fields from the table: "yearly_sales" */
  yearly_sales_aggregate: Yearly_Sales_Aggregate;
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


export type Query_RootDaily_SalesArgs = {
  distinct_on?: Maybe<Array<Daily_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Daily_Sales_Order_By>>;
  where?: Maybe<Daily_Sales_Bool_Exp>;
};


export type Query_RootDaily_Sales_AggregateArgs = {
  distinct_on?: Maybe<Array<Daily_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Daily_Sales_Order_By>>;
  where?: Maybe<Daily_Sales_Bool_Exp>;
};


export type Query_RootInventoryArgs = {
  distinct_on?: Maybe<Array<Inventory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Order_By>>;
  where?: Maybe<Inventory_Bool_Exp>;
};


export type Query_RootInventory_AggregateArgs = {
  distinct_on?: Maybe<Array<Inventory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Order_By>>;
  where?: Maybe<Inventory_Bool_Exp>;
};


export type Query_RootInventory_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMonthly_SalesArgs = {
  distinct_on?: Maybe<Array<Monthly_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Monthly_Sales_Order_By>>;
  where?: Maybe<Monthly_Sales_Bool_Exp>;
};


export type Query_RootMonthly_Sales_AggregateArgs = {
  distinct_on?: Maybe<Array<Monthly_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Monthly_Sales_Order_By>>;
  where?: Maybe<Monthly_Sales_Bool_Exp>;
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


export type Query_RootProducts_In_StoreArgs = {
  distinct_on?: Maybe<Array<Products_In_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_In_Store_Order_By>>;
  where?: Maybe<Products_In_Store_Bool_Exp>;
};


export type Query_RootProducts_In_Store_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_In_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_In_Store_Order_By>>;
  where?: Maybe<Products_In_Store_Bool_Exp>;
};


export type Query_RootProducts_Sold_Till_DateArgs = {
  distinct_on?: Maybe<Array<Products_Sold_Till_Date_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Sold_Till_Date_Order_By>>;
  where?: Maybe<Products_Sold_Till_Date_Bool_Exp>;
};


export type Query_RootProducts_Sold_Till_Date_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Sold_Till_Date_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Sold_Till_Date_Order_By>>;
  where?: Maybe<Products_Sold_Till_Date_Bool_Exp>;
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


export type Query_RootSales_By_ShopArgs = {
  distinct_on?: Maybe<Array<Sales_By_Shop_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_By_Shop_Order_By>>;
  where?: Maybe<Sales_By_Shop_Bool_Exp>;
};


export type Query_RootSales_By_Shop_AggregateArgs = {
  distinct_on?: Maybe<Array<Sales_By_Shop_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_By_Shop_Order_By>>;
  where?: Maybe<Sales_By_Shop_Bool_Exp>;
};


export type Query_RootShop_Sales_By_DateArgs = {
  distinct_on?: Maybe<Array<Shop_Sales_By_Date_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Sales_By_Date_Order_By>>;
  where?: Maybe<Shop_Sales_By_Date_Bool_Exp>;
};


export type Query_RootShop_Sales_By_Date_AggregateArgs = {
  distinct_on?: Maybe<Array<Shop_Sales_By_Date_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Sales_By_Date_Order_By>>;
  where?: Maybe<Shop_Sales_By_Date_Bool_Exp>;
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


export type Query_RootTop_Products_DailyArgs = {
  distinct_on?: Maybe<Array<Top_Products_Daily_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Top_Products_Daily_Order_By>>;
  where?: Maybe<Top_Products_Daily_Bool_Exp>;
};


export type Query_RootTop_Products_Daily_AggregateArgs = {
  distinct_on?: Maybe<Array<Top_Products_Daily_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Top_Products_Daily_Order_By>>;
  where?: Maybe<Top_Products_Daily_Bool_Exp>;
};


export type Query_RootTotal_Sales_By_ShopArgs = {
  distinct_on?: Maybe<Array<Total_Sales_By_Shop_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Total_Sales_By_Shop_Order_By>>;
  where?: Maybe<Total_Sales_By_Shop_Bool_Exp>;
};


export type Query_RootTotal_Sales_By_Shop_AggregateArgs = {
  distinct_on?: Maybe<Array<Total_Sales_By_Shop_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Total_Sales_By_Shop_Order_By>>;
  where?: Maybe<Total_Sales_By_Shop_Bool_Exp>;
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


export type Query_RootWeekly_SalesArgs = {
  distinct_on?: Maybe<Array<Weekly_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Weekly_Sales_Order_By>>;
  where?: Maybe<Weekly_Sales_Bool_Exp>;
};


export type Query_RootWeekly_Sales_AggregateArgs = {
  distinct_on?: Maybe<Array<Weekly_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Weekly_Sales_Order_By>>;
  where?: Maybe<Weekly_Sales_Bool_Exp>;
};


export type Query_RootYearly_SalesArgs = {
  distinct_on?: Maybe<Array<Yearly_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Yearly_Sales_Order_By>>;
  where?: Maybe<Yearly_Sales_Bool_Exp>;
};


export type Query_RootYearly_Sales_AggregateArgs = {
  distinct_on?: Maybe<Array<Yearly_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Yearly_Sales_Order_By>>;
  where?: Maybe<Yearly_Sales_Bool_Exp>;
};

/**
 * holds sales data
 *
 *
 * columns and relationships of "sales"
 */
export type Sales = {
  __typename?: 'sales';
  /** An object relationship */
  active_role?: Maybe<Active_Roles>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  org: Scalars['uuid'];
  /** An object relationship */
  orgByOrg: Orgs;
  role_id?: Maybe<Scalars['uuid']>;
  shop: Scalars['uuid'];
  /** An object relationship */
  shopByShop: Shops;
  /** An array relationship */
  transactions: Array<Transactions>;
  /** An aggregate relationship */
  transactions_aggregate: Transactions_Aggregate;
  updatedAt: Scalars['timestamptz'];
  user: Scalars['uuid'];
};


/**
 * holds sales data
 *
 *
 * columns and relationships of "sales"
 */
export type SalesTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


/**
 * holds sales data
 *
 *
 * columns and relationships of "sales"
 */
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
  /** on conflict condition */
  on_conflict?: Maybe<Sales_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sales". All fields are combined with a logical 'AND'. */
export type Sales_Bool_Exp = {
  _and?: Maybe<Array<Sales_Bool_Exp>>;
  _not?: Maybe<Sales_Bool_Exp>;
  _or?: Maybe<Array<Sales_Bool_Exp>>;
  active_role?: Maybe<Active_Roles_Bool_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  orgByOrg?: Maybe<Orgs_Bool_Exp>;
  role_id?: Maybe<Uuid_Comparison_Exp>;
  shop?: Maybe<Uuid_Comparison_Exp>;
  shopByShop?: Maybe<Shops_Bool_Exp>;
  transactions?: Maybe<Transactions_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Uuid_Comparison_Exp>;
};

/** columns and relationships of "sales_by_shop" */
export type Sales_By_Shop = {
  __typename?: 'sales_by_shop';
  amount?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  /** An object relationship */
  sales_to_shop?: Maybe<Shops>;
  shop?: Maybe<Scalars['uuid']>;
  sold?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "sales_by_shop" */
export type Sales_By_Shop_Aggregate = {
  __typename?: 'sales_by_shop_aggregate';
  aggregate?: Maybe<Sales_By_Shop_Aggregate_Fields>;
  nodes: Array<Sales_By_Shop>;
};

/** aggregate fields of "sales_by_shop" */
export type Sales_By_Shop_Aggregate_Fields = {
  __typename?: 'sales_by_shop_aggregate_fields';
  avg?: Maybe<Sales_By_Shop_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sales_By_Shop_Max_Fields>;
  min?: Maybe<Sales_By_Shop_Min_Fields>;
  stddev?: Maybe<Sales_By_Shop_Stddev_Fields>;
  stddev_pop?: Maybe<Sales_By_Shop_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sales_By_Shop_Stddev_Samp_Fields>;
  sum?: Maybe<Sales_By_Shop_Sum_Fields>;
  var_pop?: Maybe<Sales_By_Shop_Var_Pop_Fields>;
  var_samp?: Maybe<Sales_By_Shop_Var_Samp_Fields>;
  variance?: Maybe<Sales_By_Shop_Variance_Fields>;
};


/** aggregate fields of "sales_by_shop" */
export type Sales_By_Shop_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sales_By_Shop_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sales_by_shop" */
export type Sales_By_Shop_Aggregate_Order_By = {
  avg?: Maybe<Sales_By_Shop_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Sales_By_Shop_Max_Order_By>;
  min?: Maybe<Sales_By_Shop_Min_Order_By>;
  stddev?: Maybe<Sales_By_Shop_Stddev_Order_By>;
  stddev_pop?: Maybe<Sales_By_Shop_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Sales_By_Shop_Stddev_Samp_Order_By>;
  sum?: Maybe<Sales_By_Shop_Sum_Order_By>;
  var_pop?: Maybe<Sales_By_Shop_Var_Pop_Order_By>;
  var_samp?: Maybe<Sales_By_Shop_Var_Samp_Order_By>;
  variance?: Maybe<Sales_By_Shop_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "sales_by_shop" */
export type Sales_By_Shop_Arr_Rel_Insert_Input = {
  data: Array<Sales_By_Shop_Insert_Input>;
};

/** aggregate avg on columns */
export type Sales_By_Shop_Avg_Fields = {
  __typename?: 'sales_by_shop_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "sales_by_shop" */
export type Sales_By_Shop_Avg_Order_By = {
  amount?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sales_by_shop". All fields are combined with a logical 'AND'. */
export type Sales_By_Shop_Bool_Exp = {
  _and?: Maybe<Array<Sales_By_Shop_Bool_Exp>>;
  _not?: Maybe<Sales_By_Shop_Bool_Exp>;
  _or?: Maybe<Array<Sales_By_Shop_Bool_Exp>>;
  amount?: Maybe<Numeric_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  p_code?: Maybe<String_Comparison_Exp>;
  sales_to_shop?: Maybe<Shops_Bool_Exp>;
  shop?: Maybe<Uuid_Comparison_Exp>;
  sold?: Maybe<Bigint_Comparison_Exp>;
};

/** input type for inserting data into table "sales_by_shop" */
export type Sales_By_Shop_Insert_Input = {
  amount?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  sales_to_shop?: Maybe<Shops_Obj_Rel_Insert_Input>;
  shop?: Maybe<Scalars['uuid']>;
  sold?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Sales_By_Shop_Max_Fields = {
  __typename?: 'sales_by_shop_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  shop?: Maybe<Scalars['uuid']>;
  sold?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "sales_by_shop" */
export type Sales_By_Shop_Max_Order_By = {
  amount?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  shop?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Sales_By_Shop_Min_Fields = {
  __typename?: 'sales_by_shop_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  shop?: Maybe<Scalars['uuid']>;
  sold?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "sales_by_shop" */
export type Sales_By_Shop_Min_Order_By = {
  amount?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  shop?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "sales_by_shop". */
export type Sales_By_Shop_Order_By = {
  amount?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  sales_to_shop?: Maybe<Shops_Order_By>;
  shop?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** select columns of table "sales_by_shop" */
export enum Sales_By_Shop_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Name = 'name',
  /** column name */
  Org = 'org',
  /** column name */
  PCode = 'p_code',
  /** column name */
  Shop = 'shop',
  /** column name */
  Sold = 'sold'
}

/** aggregate stddev on columns */
export type Sales_By_Shop_Stddev_Fields = {
  __typename?: 'sales_by_shop_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "sales_by_shop" */
export type Sales_By_Shop_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sales_By_Shop_Stddev_Pop_Fields = {
  __typename?: 'sales_by_shop_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "sales_by_shop" */
export type Sales_By_Shop_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sales_By_Shop_Stddev_Samp_Fields = {
  __typename?: 'sales_by_shop_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "sales_by_shop" */
export type Sales_By_Shop_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Sales_By_Shop_Sum_Fields = {
  __typename?: 'sales_by_shop_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  sold?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "sales_by_shop" */
export type Sales_By_Shop_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Sales_By_Shop_Var_Pop_Fields = {
  __typename?: 'sales_by_shop_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "sales_by_shop" */
export type Sales_By_Shop_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sales_By_Shop_Var_Samp_Fields = {
  __typename?: 'sales_by_shop_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "sales_by_shop" */
export type Sales_By_Shop_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Sales_By_Shop_Variance_Fields = {
  __typename?: 'sales_by_shop_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "sales_by_shop" */
export type Sales_By_Shop_Variance_Order_By = {
  amount?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** unique or primary key constraints on table "sales" */
export enum Sales_Constraint {
  /** unique or primary key constraint */
  SalesPkey = 'sales_pkey'
}

/** input type for inserting data into table "sales" */
export type Sales_Insert_Input = {
  active_role?: Maybe<Active_Roles_Obj_Rel_Insert_Input>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  orgByOrg?: Maybe<Orgs_Obj_Rel_Insert_Input>;
  role_id?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  shopByShop?: Maybe<Shops_Obj_Rel_Insert_Input>;
  transactions?: Maybe<Transactions_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Sales_Max_Fields = {
  __typename?: 'sales_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "sales" */
export type Sales_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
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
  role_id?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "sales" */
export type Sales_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
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
  /** on conflict condition */
  on_conflict?: Maybe<Sales_On_Conflict>;
};

/** on conflict condition type for table "sales" */
export type Sales_On_Conflict = {
  constraint: Sales_Constraint;
  update_columns?: Array<Sales_Update_Column>;
  where?: Maybe<Sales_Bool_Exp>;
};

/** Ordering options when selecting data from "sales". */
export type Sales_Order_By = {
  active_role?: Maybe<Active_Roles_Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  orgByOrg?: Maybe<Orgs_Order_By>;
  role_id?: Maybe<Order_By>;
  shop?: Maybe<Order_By>;
  shopByShop?: Maybe<Shops_Order_By>;
  transactions_aggregate?: Maybe<Transactions_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<Order_By>;
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
  RoleId = 'role_id',
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
  role_id?: Maybe<Scalars['uuid']>;
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
  RoleId = 'role_id',
  /** column name */
  Shop = 'shop',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  User = 'user'
}

/** columns and relationships of "shop_sales_by_date" */
export type Shop_Sales_By_Date = {
  __typename?: 'shop_sales_by_date';
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  shop_name?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "shop_sales_by_date" */
export type Shop_Sales_By_Date_Aggregate = {
  __typename?: 'shop_sales_by_date_aggregate';
  aggregate?: Maybe<Shop_Sales_By_Date_Aggregate_Fields>;
  nodes: Array<Shop_Sales_By_Date>;
};

/** aggregate fields of "shop_sales_by_date" */
export type Shop_Sales_By_Date_Aggregate_Fields = {
  __typename?: 'shop_sales_by_date_aggregate_fields';
  avg?: Maybe<Shop_Sales_By_Date_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Shop_Sales_By_Date_Max_Fields>;
  min?: Maybe<Shop_Sales_By_Date_Min_Fields>;
  stddev?: Maybe<Shop_Sales_By_Date_Stddev_Fields>;
  stddev_pop?: Maybe<Shop_Sales_By_Date_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Shop_Sales_By_Date_Stddev_Samp_Fields>;
  sum?: Maybe<Shop_Sales_By_Date_Sum_Fields>;
  var_pop?: Maybe<Shop_Sales_By_Date_Var_Pop_Fields>;
  var_samp?: Maybe<Shop_Sales_By_Date_Var_Samp_Fields>;
  variance?: Maybe<Shop_Sales_By_Date_Variance_Fields>;
};


/** aggregate fields of "shop_sales_by_date" */
export type Shop_Sales_By_Date_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Shop_Sales_By_Date_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Shop_Sales_By_Date_Avg_Fields = {
  __typename?: 'shop_sales_by_date_avg_fields';
  total?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "shop_sales_by_date". All fields are combined with a logical 'AND'. */
export type Shop_Sales_By_Date_Bool_Exp = {
  _and?: Maybe<Array<Shop_Sales_By_Date_Bool_Exp>>;
  _not?: Maybe<Shop_Sales_By_Date_Bool_Exp>;
  _or?: Maybe<Array<Shop_Sales_By_Date_Bool_Exp>>;
  date?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  shop_name?: Maybe<String_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Shop_Sales_By_Date_Max_Fields = {
  __typename?: 'shop_sales_by_date_max_fields';
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  shop_name?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Shop_Sales_By_Date_Min_Fields = {
  __typename?: 'shop_sales_by_date_min_fields';
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  shop_name?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "shop_sales_by_date". */
export type Shop_Sales_By_Date_Order_By = {
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  shop_name?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** select columns of table "shop_sales_by_date" */
export enum Shop_Sales_By_Date_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Org = 'org',
  /** column name */
  ShopName = 'shop_name',
  /** column name */
  Total = 'total'
}

/** aggregate stddev on columns */
export type Shop_Sales_By_Date_Stddev_Fields = {
  __typename?: 'shop_sales_by_date_stddev_fields';
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Shop_Sales_By_Date_Stddev_Pop_Fields = {
  __typename?: 'shop_sales_by_date_stddev_pop_fields';
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Shop_Sales_By_Date_Stddev_Samp_Fields = {
  __typename?: 'shop_sales_by_date_stddev_samp_fields';
  total?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Shop_Sales_By_Date_Sum_Fields = {
  __typename?: 'shop_sales_by_date_sum_fields';
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Shop_Sales_By_Date_Var_Pop_Fields = {
  __typename?: 'shop_sales_by_date_var_pop_fields';
  total?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Shop_Sales_By_Date_Var_Samp_Fields = {
  __typename?: 'shop_sales_by_date_var_samp_fields';
  total?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Shop_Sales_By_Date_Variance_Fields = {
  __typename?: 'shop_sales_by_date_variance_fields';
  total?: Maybe<Scalars['Float']>;
};

/**
 * hols shops info
 *
 *
 * columns and relationships of "shops"
 */
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
  products_sold: Array<Sales_By_Shop>;
  /** An aggregate relationship */
  products_sold_aggregate: Sales_By_Shop_Aggregate;
  /** An array relationship */
  sales: Array<Sales>;
  /** An aggregate relationship */
  sales_aggregate: Sales_Aggregate;
};


/**
 * hols shops info
 *
 *
 * columns and relationships of "shops"
 */
export type ShopsProducts_SoldArgs = {
  distinct_on?: Maybe<Array<Sales_By_Shop_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_By_Shop_Order_By>>;
  where?: Maybe<Sales_By_Shop_Bool_Exp>;
};


/**
 * hols shops info
 *
 *
 * columns and relationships of "shops"
 */
export type ShopsProducts_Sold_AggregateArgs = {
  distinct_on?: Maybe<Array<Sales_By_Shop_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_By_Shop_Order_By>>;
  where?: Maybe<Sales_By_Shop_Bool_Exp>;
};


/**
 * hols shops info
 *
 *
 * columns and relationships of "shops"
 */
export type ShopsSalesArgs = {
  distinct_on?: Maybe<Array<Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_Order_By>>;
  where?: Maybe<Sales_Bool_Exp>;
};


/**
 * hols shops info
 *
 *
 * columns and relationships of "shops"
 */
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
  /** on conflict condition */
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
  products_sold?: Maybe<Sales_By_Shop_Bool_Exp>;
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
  products_sold?: Maybe<Sales_By_Shop_Arr_Rel_Insert_Input>;
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
  /** on conflict condition */
  on_conflict?: Maybe<Shops_On_Conflict>;
};

/** on conflict condition type for table "shops" */
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
  products_sold_aggregate?: Maybe<Sales_By_Shop_Aggregate_Order_By>;
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
  /** fetch data from the table: "active_roles" */
  active_roles: Array<Active_Roles>;
  /** An aggregate relationship */
  active_roles_aggregate: Active_Roles_Aggregate;
  /** fetch data from the table: "active_roles" using primary key columns */
  active_roles_by_pk?: Maybe<Active_Roles>;
  /** fetch data from the table: "daily_sales" */
  daily_sales: Array<Daily_Sales>;
  /** fetch aggregated fields from the table: "daily_sales" */
  daily_sales_aggregate: Daily_Sales_Aggregate;
  /** fetch data from the table: "inventory" */
  inventory: Array<Inventory>;
  /** fetch aggregated fields from the table: "inventory" */
  inventory_aggregate: Inventory_Aggregate;
  /** fetch data from the table: "inventory" using primary key columns */
  inventory_by_pk?: Maybe<Inventory>;
  /** fetch data from the table: "monthly_sales" */
  monthly_sales: Array<Monthly_Sales>;
  /** fetch aggregated fields from the table: "monthly_sales" */
  monthly_sales_aggregate: Monthly_Sales_Aggregate;
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
  /** fetch data from the table: "products_in_store" */
  products_in_store: Array<Products_In_Store>;
  /** fetch aggregated fields from the table: "products_in_store" */
  products_in_store_aggregate: Products_In_Store_Aggregate;
  /** fetch data from the table: "products_sold_till_date" */
  products_sold_till_date: Array<Products_Sold_Till_Date>;
  /** fetch aggregated fields from the table: "products_sold_till_date" */
  products_sold_till_date_aggregate: Products_Sold_Till_Date_Aggregate;
  /** An array relationship */
  sales: Array<Sales>;
  /** An aggregate relationship */
  sales_aggregate: Sales_Aggregate;
  /** fetch data from the table: "sales" using primary key columns */
  sales_by_pk?: Maybe<Sales>;
  /** fetch data from the table: "sales_by_shop" */
  sales_by_shop: Array<Sales_By_Shop>;
  /** fetch aggregated fields from the table: "sales_by_shop" */
  sales_by_shop_aggregate: Sales_By_Shop_Aggregate;
  /** fetch data from the table: "shop_sales_by_date" */
  shop_sales_by_date: Array<Shop_Sales_By_Date>;
  /** fetch aggregated fields from the table: "shop_sales_by_date" */
  shop_sales_by_date_aggregate: Shop_Sales_By_Date_Aggregate;
  /** An array relationship */
  shops: Array<Shops>;
  /** An aggregate relationship */
  shops_aggregate: Shops_Aggregate;
  /** fetch data from the table: "shops" using primary key columns */
  shops_by_pk?: Maybe<Shops>;
  /** fetch data from the table: "top_products_daily" */
  top_products_daily: Array<Top_Products_Daily>;
  /** fetch aggregated fields from the table: "top_products_daily" */
  top_products_daily_aggregate: Top_Products_Daily_Aggregate;
  /** fetch data from the table: "total_sales_by_shop" */
  total_sales_by_shop: Array<Total_Sales_By_Shop>;
  /** fetch aggregated fields from the table: "total_sales_by_shop" */
  total_sales_by_shop_aggregate: Total_Sales_By_Shop_Aggregate;
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
  /** fetch data from the table: "weekly_sales" */
  weekly_sales: Array<Weekly_Sales>;
  /** fetch aggregated fields from the table: "weekly_sales" */
  weekly_sales_aggregate: Weekly_Sales_Aggregate;
  /** fetch data from the table: "yearly_sales" */
  yearly_sales: Array<Yearly_Sales>;
  /** fetch aggregated fields from the table: "yearly_sales" */
  yearly_sales_aggregate: Yearly_Sales_Aggregate;
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


export type Subscription_RootDaily_SalesArgs = {
  distinct_on?: Maybe<Array<Daily_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Daily_Sales_Order_By>>;
  where?: Maybe<Daily_Sales_Bool_Exp>;
};


export type Subscription_RootDaily_Sales_AggregateArgs = {
  distinct_on?: Maybe<Array<Daily_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Daily_Sales_Order_By>>;
  where?: Maybe<Daily_Sales_Bool_Exp>;
};


export type Subscription_RootInventoryArgs = {
  distinct_on?: Maybe<Array<Inventory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Order_By>>;
  where?: Maybe<Inventory_Bool_Exp>;
};


export type Subscription_RootInventory_AggregateArgs = {
  distinct_on?: Maybe<Array<Inventory_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inventory_Order_By>>;
  where?: Maybe<Inventory_Bool_Exp>;
};


export type Subscription_RootInventory_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMonthly_SalesArgs = {
  distinct_on?: Maybe<Array<Monthly_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Monthly_Sales_Order_By>>;
  where?: Maybe<Monthly_Sales_Bool_Exp>;
};


export type Subscription_RootMonthly_Sales_AggregateArgs = {
  distinct_on?: Maybe<Array<Monthly_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Monthly_Sales_Order_By>>;
  where?: Maybe<Monthly_Sales_Bool_Exp>;
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


export type Subscription_RootProducts_In_StoreArgs = {
  distinct_on?: Maybe<Array<Products_In_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_In_Store_Order_By>>;
  where?: Maybe<Products_In_Store_Bool_Exp>;
};


export type Subscription_RootProducts_In_Store_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_In_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_In_Store_Order_By>>;
  where?: Maybe<Products_In_Store_Bool_Exp>;
};


export type Subscription_RootProducts_Sold_Till_DateArgs = {
  distinct_on?: Maybe<Array<Products_Sold_Till_Date_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Sold_Till_Date_Order_By>>;
  where?: Maybe<Products_Sold_Till_Date_Bool_Exp>;
};


export type Subscription_RootProducts_Sold_Till_Date_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Sold_Till_Date_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Sold_Till_Date_Order_By>>;
  where?: Maybe<Products_Sold_Till_Date_Bool_Exp>;
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


export type Subscription_RootSales_By_ShopArgs = {
  distinct_on?: Maybe<Array<Sales_By_Shop_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_By_Shop_Order_By>>;
  where?: Maybe<Sales_By_Shop_Bool_Exp>;
};


export type Subscription_RootSales_By_Shop_AggregateArgs = {
  distinct_on?: Maybe<Array<Sales_By_Shop_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sales_By_Shop_Order_By>>;
  where?: Maybe<Sales_By_Shop_Bool_Exp>;
};


export type Subscription_RootShop_Sales_By_DateArgs = {
  distinct_on?: Maybe<Array<Shop_Sales_By_Date_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Sales_By_Date_Order_By>>;
  where?: Maybe<Shop_Sales_By_Date_Bool_Exp>;
};


export type Subscription_RootShop_Sales_By_Date_AggregateArgs = {
  distinct_on?: Maybe<Array<Shop_Sales_By_Date_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Sales_By_Date_Order_By>>;
  where?: Maybe<Shop_Sales_By_Date_Bool_Exp>;
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


export type Subscription_RootTop_Products_DailyArgs = {
  distinct_on?: Maybe<Array<Top_Products_Daily_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Top_Products_Daily_Order_By>>;
  where?: Maybe<Top_Products_Daily_Bool_Exp>;
};


export type Subscription_RootTop_Products_Daily_AggregateArgs = {
  distinct_on?: Maybe<Array<Top_Products_Daily_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Top_Products_Daily_Order_By>>;
  where?: Maybe<Top_Products_Daily_Bool_Exp>;
};


export type Subscription_RootTotal_Sales_By_ShopArgs = {
  distinct_on?: Maybe<Array<Total_Sales_By_Shop_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Total_Sales_By_Shop_Order_By>>;
  where?: Maybe<Total_Sales_By_Shop_Bool_Exp>;
};


export type Subscription_RootTotal_Sales_By_Shop_AggregateArgs = {
  distinct_on?: Maybe<Array<Total_Sales_By_Shop_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Total_Sales_By_Shop_Order_By>>;
  where?: Maybe<Total_Sales_By_Shop_Bool_Exp>;
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


export type Subscription_RootWeekly_SalesArgs = {
  distinct_on?: Maybe<Array<Weekly_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Weekly_Sales_Order_By>>;
  where?: Maybe<Weekly_Sales_Bool_Exp>;
};


export type Subscription_RootWeekly_Sales_AggregateArgs = {
  distinct_on?: Maybe<Array<Weekly_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Weekly_Sales_Order_By>>;
  where?: Maybe<Weekly_Sales_Bool_Exp>;
};


export type Subscription_RootYearly_SalesArgs = {
  distinct_on?: Maybe<Array<Yearly_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Yearly_Sales_Order_By>>;
  where?: Maybe<Yearly_Sales_Bool_Exp>;
};


export type Subscription_RootYearly_Sales_AggregateArgs = {
  distinct_on?: Maybe<Array<Yearly_Sales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Yearly_Sales_Order_By>>;
  where?: Maybe<Yearly_Sales_Bool_Exp>;
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

/** columns and relationships of "top_products_daily" */
export type Top_Products_Daily = {
  __typename?: 'top_products_daily';
  daily?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "top_products_daily" */
export type Top_Products_Daily_Aggregate = {
  __typename?: 'top_products_daily_aggregate';
  aggregate?: Maybe<Top_Products_Daily_Aggregate_Fields>;
  nodes: Array<Top_Products_Daily>;
};

/** aggregate fields of "top_products_daily" */
export type Top_Products_Daily_Aggregate_Fields = {
  __typename?: 'top_products_daily_aggregate_fields';
  avg?: Maybe<Top_Products_Daily_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Top_Products_Daily_Max_Fields>;
  min?: Maybe<Top_Products_Daily_Min_Fields>;
  stddev?: Maybe<Top_Products_Daily_Stddev_Fields>;
  stddev_pop?: Maybe<Top_Products_Daily_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Top_Products_Daily_Stddev_Samp_Fields>;
  sum?: Maybe<Top_Products_Daily_Sum_Fields>;
  var_pop?: Maybe<Top_Products_Daily_Var_Pop_Fields>;
  var_samp?: Maybe<Top_Products_Daily_Var_Samp_Fields>;
  variance?: Maybe<Top_Products_Daily_Variance_Fields>;
};


/** aggregate fields of "top_products_daily" */
export type Top_Products_Daily_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Top_Products_Daily_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Top_Products_Daily_Avg_Fields = {
  __typename?: 'top_products_daily_avg_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "top_products_daily". All fields are combined with a logical 'AND'. */
export type Top_Products_Daily_Bool_Exp = {
  _and?: Maybe<Array<Top_Products_Daily_Bool_Exp>>;
  _not?: Maybe<Top_Products_Daily_Bool_Exp>;
  _or?: Maybe<Array<Top_Products_Daily_Bool_Exp>>;
  daily?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  p_code?: Maybe<String_Comparison_Exp>;
  sum?: Maybe<Numeric_Comparison_Exp>;
  user?: Maybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Top_Products_Daily_Max_Fields = {
  __typename?: 'top_products_daily_max_fields';
  daily?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Top_Products_Daily_Min_Fields = {
  __typename?: 'top_products_daily_min_fields';
  daily?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['numeric']>;
  user?: Maybe<Scalars['uuid']>;
};

/** Ordering options when selecting data from "top_products_daily". */
export type Top_Products_Daily_Order_By = {
  daily?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
  user?: Maybe<Order_By>;
};

/** select columns of table "top_products_daily" */
export enum Top_Products_Daily_Select_Column {
  /** column name */
  Daily = 'daily',
  /** column name */
  Name = 'name',
  /** column name */
  Org = 'org',
  /** column name */
  PCode = 'p_code',
  /** column name */
  Sum = 'sum',
  /** column name */
  User = 'user'
}

/** aggregate stddev on columns */
export type Top_Products_Daily_Stddev_Fields = {
  __typename?: 'top_products_daily_stddev_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Top_Products_Daily_Stddev_Pop_Fields = {
  __typename?: 'top_products_daily_stddev_pop_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Top_Products_Daily_Stddev_Samp_Fields = {
  __typename?: 'top_products_daily_stddev_samp_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Top_Products_Daily_Sum_Fields = {
  __typename?: 'top_products_daily_sum_fields';
  sum?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Top_Products_Daily_Var_Pop_Fields = {
  __typename?: 'top_products_daily_var_pop_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Top_Products_Daily_Var_Samp_Fields = {
  __typename?: 'top_products_daily_var_samp_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Top_Products_Daily_Variance_Fields = {
  __typename?: 'top_products_daily_variance_fields';
  sum?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "total_sales_by_shop" */
export type Total_Sales_By_Shop = {
  __typename?: 'total_sales_by_shop';
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  shop_name?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "total_sales_by_shop" */
export type Total_Sales_By_Shop_Aggregate = {
  __typename?: 'total_sales_by_shop_aggregate';
  aggregate?: Maybe<Total_Sales_By_Shop_Aggregate_Fields>;
  nodes: Array<Total_Sales_By_Shop>;
};

/** aggregate fields of "total_sales_by_shop" */
export type Total_Sales_By_Shop_Aggregate_Fields = {
  __typename?: 'total_sales_by_shop_aggregate_fields';
  avg?: Maybe<Total_Sales_By_Shop_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Total_Sales_By_Shop_Max_Fields>;
  min?: Maybe<Total_Sales_By_Shop_Min_Fields>;
  stddev?: Maybe<Total_Sales_By_Shop_Stddev_Fields>;
  stddev_pop?: Maybe<Total_Sales_By_Shop_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Total_Sales_By_Shop_Stddev_Samp_Fields>;
  sum?: Maybe<Total_Sales_By_Shop_Sum_Fields>;
  var_pop?: Maybe<Total_Sales_By_Shop_Var_Pop_Fields>;
  var_samp?: Maybe<Total_Sales_By_Shop_Var_Samp_Fields>;
  variance?: Maybe<Total_Sales_By_Shop_Variance_Fields>;
};


/** aggregate fields of "total_sales_by_shop" */
export type Total_Sales_By_Shop_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Total_Sales_By_Shop_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Total_Sales_By_Shop_Avg_Fields = {
  __typename?: 'total_sales_by_shop_avg_fields';
  total?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "total_sales_by_shop". All fields are combined with a logical 'AND'. */
export type Total_Sales_By_Shop_Bool_Exp = {
  _and?: Maybe<Array<Total_Sales_By_Shop_Bool_Exp>>;
  _not?: Maybe<Total_Sales_By_Shop_Bool_Exp>;
  _or?: Maybe<Array<Total_Sales_By_Shop_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  shop_name?: Maybe<String_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Total_Sales_By_Shop_Max_Fields = {
  __typename?: 'total_sales_by_shop_max_fields';
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  shop_name?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Total_Sales_By_Shop_Min_Fields = {
  __typename?: 'total_sales_by_shop_min_fields';
  id?: Maybe<Scalars['uuid']>;
  org?: Maybe<Scalars['uuid']>;
  shop_name?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "total_sales_by_shop". */
export type Total_Sales_By_Shop_Order_By = {
  id?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  shop_name?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** select columns of table "total_sales_by_shop" */
export enum Total_Sales_By_Shop_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Org = 'org',
  /** column name */
  ShopName = 'shop_name',
  /** column name */
  Total = 'total'
}

/** aggregate stddev on columns */
export type Total_Sales_By_Shop_Stddev_Fields = {
  __typename?: 'total_sales_by_shop_stddev_fields';
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Total_Sales_By_Shop_Stddev_Pop_Fields = {
  __typename?: 'total_sales_by_shop_stddev_pop_fields';
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Total_Sales_By_Shop_Stddev_Samp_Fields = {
  __typename?: 'total_sales_by_shop_stddev_samp_fields';
  total?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Total_Sales_By_Shop_Sum_Fields = {
  __typename?: 'total_sales_by_shop_sum_fields';
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Total_Sales_By_Shop_Var_Pop_Fields = {
  __typename?: 'total_sales_by_shop_var_pop_fields';
  total?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Total_Sales_By_Shop_Var_Samp_Fields = {
  __typename?: 'total_sales_by_shop_var_samp_fields';
  total?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Total_Sales_By_Shop_Variance_Fields = {
  __typename?: 'total_sales_by_shop_variance_fields';
  total?: Maybe<Scalars['Float']>;
};

/**
 * holds transactions data
 *
 *
 * columns and relationships of "transactions"
 */
export type Transactions = {
  __typename?: 'transactions';
  cost_price?: Maybe<Scalars['numeric']>;
  count: Scalars['Int'];
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  p_code: Scalars['String'];
  p_id?: Maybe<Scalars['uuid']>;
  price: Scalars['numeric'];
  /** An object relationship */
  product: Products;
  sale: Scalars['uuid'];
  /** An object relationship */
  saleBySale: Sales;
  updatedAt?: Maybe<Scalars['timestamptz']>;
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
  /** on conflict condition */
  on_conflict?: Maybe<Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename?: 'transactions_avg_fields';
  cost_price?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transactions" */
export type Transactions_Avg_Order_By = {
  cost_price?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: Maybe<Array<Transactions_Bool_Exp>>;
  _not?: Maybe<Transactions_Bool_Exp>;
  _or?: Maybe<Array<Transactions_Bool_Exp>>;
  cost_price?: Maybe<Numeric_Comparison_Exp>;
  count?: Maybe<Int_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  p_code?: Maybe<String_Comparison_Exp>;
  p_id?: Maybe<Uuid_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  sale?: Maybe<Uuid_Comparison_Exp>;
  saleBySale?: Maybe<Sales_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint */
  TransactionsPkey = 'transactions_pkey'
}

/** input type for incrementing numeric columns in table "transactions" */
export type Transactions_Inc_Input = {
  cost_price?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  cost_price?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  p_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  sale?: Maybe<Scalars['uuid']>;
  saleBySale?: Maybe<Sales_Obj_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'transactions_max_fields';
  cost_price?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  p_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  sale?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  cost_price?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  p_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  sale?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'transactions_min_fields';
  cost_price?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  p_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  sale?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  cost_price?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  p_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  sale?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "transactions" */
export type Transactions_Mutation_Response = {
  __typename?: 'transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transactions>;
};

/** on conflict condition type for table "transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint;
  update_columns?: Array<Transactions_Update_Column>;
  where?: Maybe<Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "transactions". */
export type Transactions_Order_By = {
  cost_price?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  p_code?: Maybe<Order_By>;
  p_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  sale?: Maybe<Order_By>;
  saleBySale?: Maybe<Sales_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: transactions */
export type Transactions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  CostPrice = 'cost_price',
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PCode = 'p_code',
  /** column name */
  PId = 'p_id',
  /** column name */
  Price = 'price',
  /** column name */
  Sale = 'sale',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
  cost_price?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  p_code?: Maybe<Scalars['String']>;
  p_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  sale?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Transactions_Stddev_Fields = {
  __typename?: 'transactions_stddev_fields';
  cost_price?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transactions" */
export type Transactions_Stddev_Order_By = {
  cost_price?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename?: 'transactions_stddev_pop_fields';
  cost_price?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  cost_price?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename?: 'transactions_stddev_samp_fields';
  cost_price?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  cost_price?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Transactions_Sum_Fields = {
  __typename?: 'transactions_sum_fields';
  cost_price?: Maybe<Scalars['numeric']>;
  count?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "transactions" */
export type Transactions_Sum_Order_By = {
  cost_price?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  CostPrice = 'cost_price',
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PCode = 'p_code',
  /** column name */
  PId = 'p_id',
  /** column name */
  Price = 'price',
  /** column name */
  Sale = 'sale',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename?: 'transactions_var_pop_fields';
  cost_price?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transactions" */
export type Transactions_Var_Pop_Order_By = {
  cost_price?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename?: 'transactions_var_samp_fields';
  cost_price?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transactions" */
export type Transactions_Var_Samp_Order_By = {
  cost_price?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename?: 'transactions_variance_fields';
  cost_price?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transactions" */
export type Transactions_Variance_Order_By = {
  cost_price?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/**
 * holds user data
 *
 *
 * columns and relationships of "users"
 */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  activeRolesByUser: Array<Active_Roles>;
  /** An aggregate relationship */
  activeRolesByUser_aggregate: Active_Roles_Aggregate;
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  pwd: Scalars['String'];
};


/**
 * holds user data
 *
 *
 * columns and relationships of "users"
 */
export type UsersActiveRolesByUserArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
};


/**
 * holds user data
 *
 *
 * columns and relationships of "users"
 */
export type UsersActiveRolesByUser_AggregateArgs = {
  distinct_on?: Maybe<Array<Active_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Active_Roles_Order_By>>;
  where?: Maybe<Active_Roles_Bool_Exp>;
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
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  pwd?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  activeRolesByUser?: Maybe<Active_Roles_Arr_Rel_Insert_Input>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pwd?: Maybe<Scalars['String']>;
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
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  activeRolesByUser_aggregate?: Maybe<Active_Roles_Aggregate_Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  pwd?: Maybe<Order_By>;
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

/** columns and relationships of "weekly_sales" */
export type Weekly_Sales = {
  __typename?: 'weekly_sales';
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
  weekly?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "weekly_sales" */
export type Weekly_Sales_Aggregate = {
  __typename?: 'weekly_sales_aggregate';
  aggregate?: Maybe<Weekly_Sales_Aggregate_Fields>;
  nodes: Array<Weekly_Sales>;
};

/** aggregate fields of "weekly_sales" */
export type Weekly_Sales_Aggregate_Fields = {
  __typename?: 'weekly_sales_aggregate_fields';
  avg?: Maybe<Weekly_Sales_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Weekly_Sales_Max_Fields>;
  min?: Maybe<Weekly_Sales_Min_Fields>;
  stddev?: Maybe<Weekly_Sales_Stddev_Fields>;
  stddev_pop?: Maybe<Weekly_Sales_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Weekly_Sales_Stddev_Samp_Fields>;
  sum?: Maybe<Weekly_Sales_Sum_Fields>;
  var_pop?: Maybe<Weekly_Sales_Var_Pop_Fields>;
  var_samp?: Maybe<Weekly_Sales_Var_Samp_Fields>;
  variance?: Maybe<Weekly_Sales_Variance_Fields>;
};


/** aggregate fields of "weekly_sales" */
export type Weekly_Sales_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Weekly_Sales_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Weekly_Sales_Avg_Fields = {
  __typename?: 'weekly_sales_avg_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "weekly_sales". All fields are combined with a logical 'AND'. */
export type Weekly_Sales_Bool_Exp = {
  _and?: Maybe<Array<Weekly_Sales_Bool_Exp>>;
  _not?: Maybe<Weekly_Sales_Bool_Exp>;
  _or?: Maybe<Array<Weekly_Sales_Bool_Exp>>;
  name?: Maybe<String_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  shop?: Maybe<Uuid_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
  total_cost?: Maybe<Numeric_Comparison_Exp>;
  weekly?: Maybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Weekly_Sales_Max_Fields = {
  __typename?: 'weekly_sales_max_fields';
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
  weekly?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Weekly_Sales_Min_Fields = {
  __typename?: 'weekly_sales_min_fields';
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
  weekly?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "weekly_sales". */
export type Weekly_Sales_Order_By = {
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  shop?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  total_cost?: Maybe<Order_By>;
  weekly?: Maybe<Order_By>;
};

/** select columns of table "weekly_sales" */
export enum Weekly_Sales_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Org = 'org',
  /** column name */
  Shop = 'shop',
  /** column name */
  Total = 'total',
  /** column name */
  TotalCost = 'total_cost',
  /** column name */
  Weekly = 'weekly'
}

/** aggregate stddev on columns */
export type Weekly_Sales_Stddev_Fields = {
  __typename?: 'weekly_sales_stddev_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Weekly_Sales_Stddev_Pop_Fields = {
  __typename?: 'weekly_sales_stddev_pop_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Weekly_Sales_Stddev_Samp_Fields = {
  __typename?: 'weekly_sales_stddev_samp_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Weekly_Sales_Sum_Fields = {
  __typename?: 'weekly_sales_sum_fields';
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Weekly_Sales_Var_Pop_Fields = {
  __typename?: 'weekly_sales_var_pop_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Weekly_Sales_Var_Samp_Fields = {
  __typename?: 'weekly_sales_var_samp_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Weekly_Sales_Variance_Fields = {
  __typename?: 'weekly_sales_variance_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "yearly_sales" */
export type Yearly_Sales = {
  __typename?: 'yearly_sales';
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
  yearly?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "yearly_sales" */
export type Yearly_Sales_Aggregate = {
  __typename?: 'yearly_sales_aggregate';
  aggregate?: Maybe<Yearly_Sales_Aggregate_Fields>;
  nodes: Array<Yearly_Sales>;
};

/** aggregate fields of "yearly_sales" */
export type Yearly_Sales_Aggregate_Fields = {
  __typename?: 'yearly_sales_aggregate_fields';
  avg?: Maybe<Yearly_Sales_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Yearly_Sales_Max_Fields>;
  min?: Maybe<Yearly_Sales_Min_Fields>;
  stddev?: Maybe<Yearly_Sales_Stddev_Fields>;
  stddev_pop?: Maybe<Yearly_Sales_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Yearly_Sales_Stddev_Samp_Fields>;
  sum?: Maybe<Yearly_Sales_Sum_Fields>;
  var_pop?: Maybe<Yearly_Sales_Var_Pop_Fields>;
  var_samp?: Maybe<Yearly_Sales_Var_Samp_Fields>;
  variance?: Maybe<Yearly_Sales_Variance_Fields>;
};


/** aggregate fields of "yearly_sales" */
export type Yearly_Sales_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Yearly_Sales_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Yearly_Sales_Avg_Fields = {
  __typename?: 'yearly_sales_avg_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "yearly_sales". All fields are combined with a logical 'AND'. */
export type Yearly_Sales_Bool_Exp = {
  _and?: Maybe<Array<Yearly_Sales_Bool_Exp>>;
  _not?: Maybe<Yearly_Sales_Bool_Exp>;
  _or?: Maybe<Array<Yearly_Sales_Bool_Exp>>;
  name?: Maybe<String_Comparison_Exp>;
  org?: Maybe<Uuid_Comparison_Exp>;
  shop?: Maybe<Uuid_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
  total_cost?: Maybe<Numeric_Comparison_Exp>;
  yearly?: Maybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Yearly_Sales_Max_Fields = {
  __typename?: 'yearly_sales_max_fields';
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
  yearly?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Yearly_Sales_Min_Fields = {
  __typename?: 'yearly_sales_min_fields';
  name?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Scalars['uuid']>;
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
  yearly?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "yearly_sales". */
export type Yearly_Sales_Order_By = {
  name?: Maybe<Order_By>;
  org?: Maybe<Order_By>;
  shop?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  total_cost?: Maybe<Order_By>;
  yearly?: Maybe<Order_By>;
};

/** select columns of table "yearly_sales" */
export enum Yearly_Sales_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Org = 'org',
  /** column name */
  Shop = 'shop',
  /** column name */
  Total = 'total',
  /** column name */
  TotalCost = 'total_cost',
  /** column name */
  Yearly = 'yearly'
}

/** aggregate stddev on columns */
export type Yearly_Sales_Stddev_Fields = {
  __typename?: 'yearly_sales_stddev_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Yearly_Sales_Stddev_Pop_Fields = {
  __typename?: 'yearly_sales_stddev_pop_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Yearly_Sales_Stddev_Samp_Fields = {
  __typename?: 'yearly_sales_stddev_samp_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Yearly_Sales_Sum_Fields = {
  __typename?: 'yearly_sales_sum_fields';
  total?: Maybe<Scalars['numeric']>;
  total_cost?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Yearly_Sales_Var_Pop_Fields = {
  __typename?: 'yearly_sales_var_pop_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Yearly_Sales_Var_Samp_Fields = {
  __typename?: 'yearly_sales_var_samp_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Yearly_Sales_Variance_Fields = {
  __typename?: 'yearly_sales_variance_fields';
  total?: Maybe<Scalars['Float']>;
  total_cost?: Maybe<Scalars['Float']>;
};

export type FindproductQueryVariables = Exact<{
  _iregex?: Maybe<Scalars['String']>;
  _iregex1?: Maybe<Scalars['String']>;
}>;


export type FindproductQuery = (
  { __typename?: 'query_root' }
  & { products: Array<(
    { __typename?: 'products' }
    & Pick<Products, 'amount' | 'code' | 'createdAt' | 'id' | 'name' | 'org' | 'cost_price'>
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
    )>, active_role?: Maybe<(
      { __typename?: 'active_roles' }
      & { userByUser: (
        { __typename?: 'users' }
        & Pick<Users, 'name'>
      ) }
    )>, transactions_aggregate: (
      { __typename?: 'transactions_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'transactions_aggregate_fields' }
        & Pick<Transactions_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type YearlySalesQueryVariables = Exact<{
  _lte?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type YearlySalesQuery = (
  { __typename?: 'query_root' }
  & { yearly_sales: Array<(
    { __typename?: 'yearly_sales' }
    & Pick<Yearly_Sales, 'name' | 'org' | 'shop' | 'total' | 'yearly' | 'total_cost'>
  )> }
);

export type WeeklySalesQueryVariables = Exact<{
  _gte?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type WeeklySalesQuery = (
  { __typename?: 'query_root' }
  & { weekly_sales: Array<(
    { __typename?: 'weekly_sales' }
    & Pick<Weekly_Sales, 'org' | 'shop' | 'total' | 'weekly' | 'name' | 'total_cost'>
  )> }
);

export type MonthlySalesQueryVariables = Exact<{
  _gte?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type MonthlySalesQuery = (
  { __typename?: 'query_root' }
  & { monthly_sales: Array<(
    { __typename?: 'monthly_sales' }
    & Pick<Monthly_Sales, 'name' | 'org' | 'shop' | 'total' | 'monthly' | 'total_cost'>
  )> }
);

export type DailySalesQueryVariables = Exact<{
  _gte?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type DailySalesQuery = (
  { __typename?: 'query_root' }
  & { daily_sales: Array<(
    { __typename?: 'daily_sales' }
    & Pick<Daily_Sales, 'name' | 'org' | 'shop' | 'total' | 'daily' | 'total_cost'>
  )> }
);

export type Top5ProductsDailyQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;


export type Top5ProductsDailyQuery = (
  { __typename?: 'query_root' }
  & { top_products_daily: Array<(
    { __typename?: 'top_products_daily' }
    & Pick<Top_Products_Daily, 'daily' | 'name' | 'org' | 'p_code' | 'sum'>
  )> }
);

export type LowInventoryProductsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;


export type LowInventoryProductsQuery = (
  { __typename?: 'query_root' }
  & { products_in_store: Array<(
    { __typename?: 'products_in_store' }
    & Pick<Products_In_Store, 'name' | 'org' | 'total_products'>
  )> }
);

export type TransactionbyshopQueryVariables = Exact<{
  _eq?: Maybe<Scalars['uuid']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  _eq1?: Maybe<Scalars['uuid']>;
}>;


export type TransactionbyshopQuery = (
  { __typename?: 'query_root' }
  & { sales: Array<(
    { __typename?: 'sales' }
    & Pick<Sales, 'id' | 'org' | 'shop' | 'role_id' | 'updatedAt' | 'createdAt'>
    & { active_role?: Maybe<(
      { __typename?: 'active_roles' }
      & { userByUser: (
        { __typename?: 'users' }
        & Pick<Users, 'name'>
      ) }
    )>, transactions: Array<(
      { __typename?: 'transactions' }
      & Pick<Transactions, 'id' | 'count' | 'price'>
      & { product: (
        { __typename?: 'products' }
        & Pick<Products, 'amount' | 'name' | 'cost_price'>
      ) }
    )> }
  )>, sales_aggregate: (
    { __typename?: 'sales_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'sales_aggregate_fields' }
      & Pick<Sales_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type GetTotalByShopsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetTotalByShopsQuery = (
  { __typename?: 'query_root' }
  & { total_sales_by_shop: Array<(
    { __typename?: 'total_sales_by_shop' }
    & Pick<Total_Sales_By_Shop, 'total' | 'shop_name' | 'org'>
  )> }
);

export type GetSalesByDateQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  _eq?: Maybe<Scalars['uuid']>;
}>;


export type GetSalesByDateQuery = (
  { __typename?: 'query_root' }
  & { shop_sales_by_date: Array<(
    { __typename?: 'shop_sales_by_date' }
    & Shop_Sales_By_DateFragmentFragment
  )>, shop_sales_by_date_aggregate: (
    { __typename?: 'shop_sales_by_date_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'shop_sales_by_date_aggregate_fields' }
      & Pick<Shop_Sales_By_Date_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type Shop_Sales_By_DateFragmentFragment = (
  { __typename?: 'shop_sales_by_date' }
  & Pick<Shop_Sales_By_Date, 'date' | 'id' | 'shop_name' | 'total'>
);

export type ProductSalesByShopQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductSalesByShopQuery = (
  { __typename?: 'query_root' }
  & { shops: Array<(
    { __typename?: 'shops' }
    & Pick<Shops, 'id' | 'name'>
    & { products_sold: Array<(
      { __typename?: 'sales_by_shop' }
      & Pick<Sales_By_Shop, 'amount' | 'name'>
    )> }
  )> }
);

export type AddproductMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  inventories?: Maybe<Inventory_Arr_Rel_Insert_Input>;
  code?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['numeric']>;
  cost_price?: Maybe<Scalars['numeric']>;
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

export type FindProductByCodeQueryVariables = Exact<{
  _eq?: Maybe<Scalars['String']>;
}>;


export type FindProductByCodeQuery = (
  { __typename?: 'query_root' }
  & { products: Array<(
    { __typename?: 'products' }
    & Pick<Products, 'code' | 'amount' | 'createdAt' | 'name' | 'id' | 'cost_price'>
  )> }
);

export type UpdateProductMutationVariables = Exact<{
  _set?: Maybe<Products_Set_Input>;
  id?: Maybe<Scalars['uuid']>;
}>;


export type UpdateProductMutation = (
  { __typename?: 'mutation_root' }
  & { update_products_by_pk?: Maybe<(
    { __typename?: 'products' }
    & ProductsFragmentFragment
  )> }
);

export type ProductsFragmentFragment = (
  { __typename?: 'products' }
  & Pick<Products, 'amount' | 'code' | 'id' | 'name'>
);

export type GetproductsQueryVariables = Exact<{
  _iregex?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetproductsQuery = (
  { __typename?: 'query_root' }
  & { products: Array<(
    { __typename?: 'products' }
    & Pick<Products, 'amount' | 'code' | 'createdAt' | 'id' | 'name' | 'org' | 'cost_price'>
  )> }
);

export type InventoryByProductQueryVariables = Exact<{
  _eq?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type InventoryByProductQuery = (
  { __typename?: 'query_root' }
  & { inventory: Array<(
    { __typename?: 'inventory' }
    & Pick<Inventory, 'id' | 'count' | 'createdAt'>
    & { product?: Maybe<(
      { __typename?: 'products' }
      & Pick<Products, 'added_by' | 'code' | 'name'>
    )> }
  )>, total: (
    { __typename?: 'inventory_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'inventory_aggregate_fields' }
      & Pick<Inventory_Aggregate_Fields, 'count'>
    )> }
  ) }
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

export type MyShopsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyShopsQuery = (
  { __typename?: 'query_root' }
  & { shops: Array<(
    { __typename?: 'shops' }
    & Pick<Shops, 'id' | 'name' | 'location' | 'org'>
  )> }
);

export type GetinventoryQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  _iregex?: Maybe<Scalars['String']>;
  _iregex1?: Maybe<Scalars['String']>;
}>;


export type GetinventoryQuery = (
  { __typename?: 'query_root' }
  & { products_in_store: Array<(
    { __typename?: 'products_in_store' }
    & Pick<Products_In_Store, 'org' | 'p_code' | 'name' | 'total_products'>
    & { sold_products?: Maybe<(
      { __typename?: 'products_sold_till_date' }
      & Pick<Products_Sold_Till_Date, 'amount' | 'sold'>
    )> }
  )> }
);

export type AddinventoryMutationVariables = Exact<{
  object?: Maybe<Inventory_Insert_Input>;
}>;


export type AddinventoryMutation = (
  { __typename?: 'mutation_root' }
  & { insert_inventory_one?: Maybe<(
    { __typename?: 'inventory' }
    & Pick<Inventory, 'count' | 'createdAt' | 'id' | 'p_code' | 'updatedAt'>
  )> }
);

export type GetRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRolesQuery = (
  { __typename?: 'query_root' }
  & { active_roles: Array<(
    { __typename?: 'active_roles' }
    & Pick<Active_Roles, 'id' | 'org' | 'role'>
    & { orgByOrg: (
      { __typename?: 'orgs' }
      & Pick<Orgs, 'name'>
    ) }
  )> }
);

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'email' | 'id' | 'name'>
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

export const Shop_Sales_By_DateFragmentFragmentDoc = gql`
    fragment shop_sales_by_dateFragment on shop_sales_by_date {
  date
  id
  shop_name
  total
}
    `;
export const ProductsFragmentFragmentDoc = gql`
    fragment productsFragment on products {
  amount
  code
  id
  name
}
    `;
export const FindproductDocument = gql`
    query findproduct($_iregex: String = "", $_iregex1: String = "") {
  products(where: {_or: {name: {_iregex: $_iregex}, code: {_iregex: $_iregex1}}}) {
    amount
    code
    createdAt
    id
    name
    org
    cost_price
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
    mutation sold($org: uuid = "", $shop: uuid = "", $data: [transactions_insert_input!] = {}) {
  insert_sales(objects: {org: $org, shop: $shop, transactions: {data: $data}}) {
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
    active_role {
      userByUser {
        name
      }
    }
    transactions_aggregate(limit: $limit) {
      aggregate {
        count
      }
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
export const YearlySalesDocument = gql`
    query yearlySales($_lte: timestamptz = "", $_gte: timestamptz = "", $_in: [uuid!] = "") {
  yearly_sales(where: {yearly: {_lte: $_lte, _gte: $_gte}, shop: {_in: $_in}}) {
    name
    org
    shop
    total
    yearly
    total_cost
  }
}
    `;

/**
 * __useYearlySalesQuery__
 *
 * To run a query within a React component, call `useYearlySalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useYearlySalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useYearlySalesQuery({
 *   variables: {
 *      _lte: // value for '_lte'
 *      _gte: // value for '_gte'
 *      _in: // value for '_in'
 *   },
 * });
 */
export function useYearlySalesQuery(baseOptions?: Apollo.QueryHookOptions<YearlySalesQuery, YearlySalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<YearlySalesQuery, YearlySalesQueryVariables>(YearlySalesDocument, options);
      }
export function useYearlySalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<YearlySalesQuery, YearlySalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<YearlySalesQuery, YearlySalesQueryVariables>(YearlySalesDocument, options);
        }
export type YearlySalesQueryHookResult = ReturnType<typeof useYearlySalesQuery>;
export type YearlySalesLazyQueryHookResult = ReturnType<typeof useYearlySalesLazyQuery>;
export type YearlySalesQueryResult = Apollo.QueryResult<YearlySalesQuery, YearlySalesQueryVariables>;
export const WeeklySalesDocument = gql`
    query weeklySales($_gte: timestamptz = "", $_lte: timestamptz = "", $_in: [uuid!] = "") {
  weekly_sales(where: {weekly: {_gte: $_gte, _lte: $_lte}, shop: {_in: $_in}}) {
    org
    shop
    total
    weekly
    name
    total_cost
  }
}
    `;

/**
 * __useWeeklySalesQuery__
 *
 * To run a query within a React component, call `useWeeklySalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWeeklySalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWeeklySalesQuery({
 *   variables: {
 *      _gte: // value for '_gte'
 *      _lte: // value for '_lte'
 *      _in: // value for '_in'
 *   },
 * });
 */
export function useWeeklySalesQuery(baseOptions?: Apollo.QueryHookOptions<WeeklySalesQuery, WeeklySalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WeeklySalesQuery, WeeklySalesQueryVariables>(WeeklySalesDocument, options);
      }
export function useWeeklySalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WeeklySalesQuery, WeeklySalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WeeklySalesQuery, WeeklySalesQueryVariables>(WeeklySalesDocument, options);
        }
export type WeeklySalesQueryHookResult = ReturnType<typeof useWeeklySalesQuery>;
export type WeeklySalesLazyQueryHookResult = ReturnType<typeof useWeeklySalesLazyQuery>;
export type WeeklySalesQueryResult = Apollo.QueryResult<WeeklySalesQuery, WeeklySalesQueryVariables>;
export const MonthlySalesDocument = gql`
    query monthlySales($_gte: timestamptz = "", $_lte: timestamptz = "", $_in: [uuid!] = "") {
  monthly_sales(where: {monthly: {_gte: $_gte, _lte: $_lte}, shop: {_in: $_in}}) {
    name
    org
    shop
    total
    monthly
    total_cost
  }
}
    `;

/**
 * __useMonthlySalesQuery__
 *
 * To run a query within a React component, call `useMonthlySalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMonthlySalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMonthlySalesQuery({
 *   variables: {
 *      _gte: // value for '_gte'
 *      _lte: // value for '_lte'
 *      _in: // value for '_in'
 *   },
 * });
 */
export function useMonthlySalesQuery(baseOptions?: Apollo.QueryHookOptions<MonthlySalesQuery, MonthlySalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MonthlySalesQuery, MonthlySalesQueryVariables>(MonthlySalesDocument, options);
      }
export function useMonthlySalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MonthlySalesQuery, MonthlySalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MonthlySalesQuery, MonthlySalesQueryVariables>(MonthlySalesDocument, options);
        }
export type MonthlySalesQueryHookResult = ReturnType<typeof useMonthlySalesQuery>;
export type MonthlySalesLazyQueryHookResult = ReturnType<typeof useMonthlySalesLazyQuery>;
export type MonthlySalesQueryResult = Apollo.QueryResult<MonthlySalesQuery, MonthlySalesQueryVariables>;
export const DailySalesDocument = gql`
    query dailySales($_gte: timestamptz = "", $_lte: timestamptz = "", $_in: [uuid!] = "") {
  daily_sales(where: {daily: {_gte: $_gte, _lte: $_lte}, shop: {_in: $_in}}) {
    name
    org
    shop
    total
    daily
    total_cost
  }
}
    `;

/**
 * __useDailySalesQuery__
 *
 * To run a query within a React component, call `useDailySalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDailySalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDailySalesQuery({
 *   variables: {
 *      _gte: // value for '_gte'
 *      _lte: // value for '_lte'
 *      _in: // value for '_in'
 *   },
 * });
 */
export function useDailySalesQuery(baseOptions?: Apollo.QueryHookOptions<DailySalesQuery, DailySalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DailySalesQuery, DailySalesQueryVariables>(DailySalesDocument, options);
      }
export function useDailySalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DailySalesQuery, DailySalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DailySalesQuery, DailySalesQueryVariables>(DailySalesDocument, options);
        }
export type DailySalesQueryHookResult = ReturnType<typeof useDailySalesQuery>;
export type DailySalesLazyQueryHookResult = ReturnType<typeof useDailySalesLazyQuery>;
export type DailySalesQueryResult = Apollo.QueryResult<DailySalesQuery, DailySalesQueryVariables>;
export const Top5ProductsDailyDocument = gql`
    query top5ProductsDaily($limit: Int = 5) {
  top_products_daily(limit: $limit) {
    daily
    name
    org
    p_code
    sum
  }
}
    `;

/**
 * __useTop5ProductsDailyQuery__
 *
 * To run a query within a React component, call `useTop5ProductsDailyQuery` and pass it any options that fit your needs.
 * When your component renders, `useTop5ProductsDailyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTop5ProductsDailyQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useTop5ProductsDailyQuery(baseOptions?: Apollo.QueryHookOptions<Top5ProductsDailyQuery, Top5ProductsDailyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Top5ProductsDailyQuery, Top5ProductsDailyQueryVariables>(Top5ProductsDailyDocument, options);
      }
export function useTop5ProductsDailyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Top5ProductsDailyQuery, Top5ProductsDailyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Top5ProductsDailyQuery, Top5ProductsDailyQueryVariables>(Top5ProductsDailyDocument, options);
        }
export type Top5ProductsDailyQueryHookResult = ReturnType<typeof useTop5ProductsDailyQuery>;
export type Top5ProductsDailyLazyQueryHookResult = ReturnType<typeof useTop5ProductsDailyLazyQuery>;
export type Top5ProductsDailyQueryResult = Apollo.QueryResult<Top5ProductsDailyQuery, Top5ProductsDailyQueryVariables>;
export const LowInventoryProductsDocument = gql`
    query lowInventoryProducts($limit: Int = 10) {
  products_in_store(order_by: {total_products: desc}, limit: $limit) {
    name
    org
    total_products
  }
}
    `;

/**
 * __useLowInventoryProductsQuery__
 *
 * To run a query within a React component, call `useLowInventoryProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLowInventoryProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLowInventoryProductsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLowInventoryProductsQuery(baseOptions?: Apollo.QueryHookOptions<LowInventoryProductsQuery, LowInventoryProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LowInventoryProductsQuery, LowInventoryProductsQueryVariables>(LowInventoryProductsDocument, options);
      }
export function useLowInventoryProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LowInventoryProductsQuery, LowInventoryProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LowInventoryProductsQuery, LowInventoryProductsQueryVariables>(LowInventoryProductsDocument, options);
        }
export type LowInventoryProductsQueryHookResult = ReturnType<typeof useLowInventoryProductsQuery>;
export type LowInventoryProductsLazyQueryHookResult = ReturnType<typeof useLowInventoryProductsLazyQuery>;
export type LowInventoryProductsQueryResult = Apollo.QueryResult<LowInventoryProductsQuery, LowInventoryProductsQueryVariables>;
export const TransactionbyshopDocument = gql`
    query transactionbyshop($_eq: uuid = "", $limit: Int = 10, $offset: Int = 0, $_eq1: uuid = "") {
  sales(
    where: {shop: {_eq: $_eq}}
    limit: $limit
    offset: $offset
    order_by: {createdAt: desc}
  ) {
    id
    org
    shop
    role_id
    updatedAt
    createdAt
    active_role {
      userByUser {
        name
      }
    }
    transactions {
      id
      count
      price
      product {
        amount
        name
        cost_price
      }
    }
  }
  sales_aggregate(where: {shop: {_eq: $_eq}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useTransactionbyshopQuery__
 *
 * To run a query within a React component, call `useTransactionbyshopQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionbyshopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionbyshopQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      _eq1: // value for '_eq1'
 *   },
 * });
 */
export function useTransactionbyshopQuery(baseOptions?: Apollo.QueryHookOptions<TransactionbyshopQuery, TransactionbyshopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionbyshopQuery, TransactionbyshopQueryVariables>(TransactionbyshopDocument, options);
      }
export function useTransactionbyshopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionbyshopQuery, TransactionbyshopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionbyshopQuery, TransactionbyshopQueryVariables>(TransactionbyshopDocument, options);
        }
export type TransactionbyshopQueryHookResult = ReturnType<typeof useTransactionbyshopQuery>;
export type TransactionbyshopLazyQueryHookResult = ReturnType<typeof useTransactionbyshopLazyQuery>;
export type TransactionbyshopQueryResult = Apollo.QueryResult<TransactionbyshopQuery, TransactionbyshopQueryVariables>;
export const GetTotalByShopsDocument = gql`
    query getTotalByShops($limit: Int = 10) {
  total_sales_by_shop(limit: $limit) {
    total
    shop_name
    org
  }
}
    `;

/**
 * __useGetTotalByShopsQuery__
 *
 * To run a query within a React component, call `useGetTotalByShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalByShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalByShopsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetTotalByShopsQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalByShopsQuery, GetTotalByShopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalByShopsQuery, GetTotalByShopsQueryVariables>(GetTotalByShopsDocument, options);
      }
export function useGetTotalByShopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalByShopsQuery, GetTotalByShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalByShopsQuery, GetTotalByShopsQueryVariables>(GetTotalByShopsDocument, options);
        }
export type GetTotalByShopsQueryHookResult = ReturnType<typeof useGetTotalByShopsQuery>;
export type GetTotalByShopsLazyQueryHookResult = ReturnType<typeof useGetTotalByShopsLazyQuery>;
export type GetTotalByShopsQueryResult = Apollo.QueryResult<GetTotalByShopsQuery, GetTotalByShopsQueryVariables>;
export const GetSalesByDateDocument = gql`
    query getSalesByDate($limit: Int = 10, $offset: Int = 0, $_eq: uuid = "") {
  shop_sales_by_date(
    limit: $limit
    offset: $offset
    order_by: {date: desc}
    where: {id: {_eq: $_eq}}
    distinct_on: date
  ) {
    ...shop_sales_by_dateFragment
  }
  shop_sales_by_date_aggregate {
    aggregate {
      count(columns: date)
    }
  }
}
    ${Shop_Sales_By_DateFragmentFragmentDoc}`;

/**
 * __useGetSalesByDateQuery__
 *
 * To run a query within a React component, call `useGetSalesByDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSalesByDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSalesByDateQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetSalesByDateQuery(baseOptions?: Apollo.QueryHookOptions<GetSalesByDateQuery, GetSalesByDateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSalesByDateQuery, GetSalesByDateQueryVariables>(GetSalesByDateDocument, options);
      }
export function useGetSalesByDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSalesByDateQuery, GetSalesByDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSalesByDateQuery, GetSalesByDateQueryVariables>(GetSalesByDateDocument, options);
        }
export type GetSalesByDateQueryHookResult = ReturnType<typeof useGetSalesByDateQuery>;
export type GetSalesByDateLazyQueryHookResult = ReturnType<typeof useGetSalesByDateLazyQuery>;
export type GetSalesByDateQueryResult = Apollo.QueryResult<GetSalesByDateQuery, GetSalesByDateQueryVariables>;
export const ProductSalesByShopDocument = gql`
    query productSalesByShop {
  shops {
    products_sold(order_by: {amount: desc}) {
      amount
      name
    }
    id
    name
  }
}
    `;

/**
 * __useProductSalesByShopQuery__
 *
 * To run a query within a React component, call `useProductSalesByShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductSalesByShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductSalesByShopQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductSalesByShopQuery(baseOptions?: Apollo.QueryHookOptions<ProductSalesByShopQuery, ProductSalesByShopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductSalesByShopQuery, ProductSalesByShopQueryVariables>(ProductSalesByShopDocument, options);
      }
export function useProductSalesByShopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductSalesByShopQuery, ProductSalesByShopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductSalesByShopQuery, ProductSalesByShopQueryVariables>(ProductSalesByShopDocument, options);
        }
export type ProductSalesByShopQueryHookResult = ReturnType<typeof useProductSalesByShopQuery>;
export type ProductSalesByShopLazyQueryHookResult = ReturnType<typeof useProductSalesByShopLazyQuery>;
export type ProductSalesByShopQueryResult = Apollo.QueryResult<ProductSalesByShopQuery, ProductSalesByShopQueryVariables>;
export const AddproductDocument = gql`
    mutation addproduct($name: String = "", $inventories: inventory_arr_rel_insert_input = {data: {count: 10}}, $code: String = "", $amount: numeric = "", $cost_price: numeric = "") {
  insert_products(
    objects: {amount: $amount, code: $code, name: $name, inventories: $inventories, cost_price: $cost_price}
  ) {
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
 *      name: // value for 'name'
 *      inventories: // value for 'inventories'
 *      code: // value for 'code'
 *      amount: // value for 'amount'
 *      cost_price: // value for 'cost_price'
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
export const FindProductByCodeDocument = gql`
    query findProductByCode($_eq: String = "") {
  products(where: {code: {_eq: $_eq}}) {
    code
    amount
    createdAt
    name
    id
    cost_price
  }
}
    `;

/**
 * __useFindProductByCodeQuery__
 *
 * To run a query within a React component, call `useFindProductByCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProductByCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProductByCodeQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useFindProductByCodeQuery(baseOptions?: Apollo.QueryHookOptions<FindProductByCodeQuery, FindProductByCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProductByCodeQuery, FindProductByCodeQueryVariables>(FindProductByCodeDocument, options);
      }
export function useFindProductByCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProductByCodeQuery, FindProductByCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProductByCodeQuery, FindProductByCodeQueryVariables>(FindProductByCodeDocument, options);
        }
export type FindProductByCodeQueryHookResult = ReturnType<typeof useFindProductByCodeQuery>;
export type FindProductByCodeLazyQueryHookResult = ReturnType<typeof useFindProductByCodeLazyQuery>;
export type FindProductByCodeQueryResult = Apollo.QueryResult<FindProductByCodeQuery, FindProductByCodeQueryVariables>;
export const UpdateProductDocument = gql`
    mutation updateProduct($_set: products_set_input = {}, $id: uuid = "") {
  update_products_by_pk(pk_columns: {id: $id}, _set: $_set) {
    ...productsFragment
  }
}
    ${ProductsFragmentFragmentDoc}`;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      _set: // value for '_set'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const GetproductsDocument = gql`
    query getproducts($_iregex: String = "", $limit: Int = 10, $offset: Int = 0) {
  products(limit: $limit, offset: $offset, where: {name: {_iregex: $_iregex}}) {
    amount
    code
    createdAt
    id
    name
    org
    cost_price
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
 *      _iregex: // value for '_iregex'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
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
export const InventoryByProductDocument = gql`
    query inventoryByProduct($_eq: String = "", $limit: Int = 10, $offset: Int = 0) {
  inventory(where: {p_code: {_eq: $_eq}}, limit: $limit, offset: $offset) {
    id
    product {
      added_by
      code
      name
    }
    count
    createdAt
  }
  total: inventory_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useInventoryByProductQuery__
 *
 * To run a query within a React component, call `useInventoryByProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useInventoryByProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInventoryByProductQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useInventoryByProductQuery(baseOptions?: Apollo.QueryHookOptions<InventoryByProductQuery, InventoryByProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InventoryByProductQuery, InventoryByProductQueryVariables>(InventoryByProductDocument, options);
      }
export function useInventoryByProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InventoryByProductQuery, InventoryByProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InventoryByProductQuery, InventoryByProductQueryVariables>(InventoryByProductDocument, options);
        }
export type InventoryByProductQueryHookResult = ReturnType<typeof useInventoryByProductQuery>;
export type InventoryByProductLazyQueryHookResult = ReturnType<typeof useInventoryByProductLazyQuery>;
export type InventoryByProductQueryResult = Apollo.QueryResult<InventoryByProductQuery, InventoryByProductQueryVariables>;
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
export const MyShopsDocument = gql`
    query myShops {
  shops {
    id
    name
    location
    org
  }
}
    `;

/**
 * __useMyShopsQuery__
 *
 * To run a query within a React component, call `useMyShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyShopsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyShopsQuery(baseOptions?: Apollo.QueryHookOptions<MyShopsQuery, MyShopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyShopsQuery, MyShopsQueryVariables>(MyShopsDocument, options);
      }
export function useMyShopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyShopsQuery, MyShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyShopsQuery, MyShopsQueryVariables>(MyShopsDocument, options);
        }
export type MyShopsQueryHookResult = ReturnType<typeof useMyShopsQuery>;
export type MyShopsLazyQueryHookResult = ReturnType<typeof useMyShopsLazyQuery>;
export type MyShopsQueryResult = Apollo.QueryResult<MyShopsQuery, MyShopsQueryVariables>;
export const GetinventoryDocument = gql`
    query getinventory($limit: Int = 10, $offset: Int = 10, $_iregex: String = "", $_iregex1: String = "") {
  products_in_store(
    where: {_or: {p_code: {_iregex: $_iregex}, name: {_iregex: $_iregex1}}}
  ) {
    sold_products {
      amount
      sold
    }
    org
    p_code
    name
    total_products
  }
}
    `;

/**
 * __useGetinventoryQuery__
 *
 * To run a query within a React component, call `useGetinventoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetinventoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetinventoryQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      _iregex: // value for '_iregex'
 *      _iregex1: // value for '_iregex1'
 *   },
 * });
 */
export function useGetinventoryQuery(baseOptions?: Apollo.QueryHookOptions<GetinventoryQuery, GetinventoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetinventoryQuery, GetinventoryQueryVariables>(GetinventoryDocument, options);
      }
export function useGetinventoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetinventoryQuery, GetinventoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetinventoryQuery, GetinventoryQueryVariables>(GetinventoryDocument, options);
        }
export type GetinventoryQueryHookResult = ReturnType<typeof useGetinventoryQuery>;
export type GetinventoryLazyQueryHookResult = ReturnType<typeof useGetinventoryLazyQuery>;
export type GetinventoryQueryResult = Apollo.QueryResult<GetinventoryQuery, GetinventoryQueryVariables>;
export const AddinventoryDocument = gql`
    mutation addinventory($object: inventory_insert_input = {}) {
  insert_inventory_one(object: $object) {
    count
    createdAt
    id
    p_code
    updatedAt
  }
}
    `;
export type AddinventoryMutationFn = Apollo.MutationFunction<AddinventoryMutation, AddinventoryMutationVariables>;

/**
 * __useAddinventoryMutation__
 *
 * To run a mutation, you first call `useAddinventoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddinventoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addinventoryMutation, { data, loading, error }] = useAddinventoryMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useAddinventoryMutation(baseOptions?: Apollo.MutationHookOptions<AddinventoryMutation, AddinventoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddinventoryMutation, AddinventoryMutationVariables>(AddinventoryDocument, options);
      }
export type AddinventoryMutationHookResult = ReturnType<typeof useAddinventoryMutation>;
export type AddinventoryMutationResult = Apollo.MutationResult<AddinventoryMutation>;
export type AddinventoryMutationOptions = Apollo.BaseMutationOptions<AddinventoryMutation, AddinventoryMutationVariables>;
export const GetRolesDocument = gql`
    query getRoles {
  active_roles {
    id
    org
    role
    orgByOrg {
      name
    }
  }
}
    `;

/**
 * __useGetRolesQuery__
 *
 * To run a query within a React component, call `useGetRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRolesQuery(baseOptions?: Apollo.QueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
      }
export function useGetRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
        }
export type GetRolesQueryHookResult = ReturnType<typeof useGetRolesQuery>;
export type GetRolesLazyQueryHookResult = ReturnType<typeof useGetRolesLazyQuery>;
export type GetRolesQueryResult = Apollo.QueryResult<GetRolesQuery, GetRolesQueryVariables>;
export const GetUserInfoDocument = gql`
    query getUserInfo {
  users {
    email
    id
    name
  }
}
    `;

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
      }
export function useGetUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>;
export type GetUserInfoLazyQueryHookResult = ReturnType<typeof useGetUserInfoLazyQuery>;
export type GetUserInfoQueryResult = Apollo.QueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;
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