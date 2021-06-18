export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type BoardReturn = {
  __typename?: 'BoardReturn';
  number?: Maybe<Scalars['Int']>;
  writer?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Mutation = {
  __typename?: 'Mutation';
  createBoard?: Maybe<Return>;
  updateBoard?: Maybe<Return>;
  deleteBoard?: Maybe<Return>;
  createProfile?: Maybe<Return>;
  updateProfile?: Maybe<Return>;
  deleteProfile?: Maybe<Return>;
};


export type MutationCreateBoardArgs = {
  writer?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
};


export type MutationUpdateBoardArgs = {
  number?: Maybe<Scalars['Int']>;
  writer?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  contents?: Maybe<Scalars['String']>;
};


export type MutationDeleteBoardArgs = {
  number?: Maybe<Scalars['Int']>;
};


export type MutationCreateProfileArgs = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['String']>;
};


export type MutationUpdateProfileArgs = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['String']>;
};


export type MutationDeleteProfileArgs = {
  name?: Maybe<Scalars['String']>;
};

export type ProfileReturn = {
  __typename?: 'ProfileReturn';
  number?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  fetchBoard?: Maybe<BoardReturn>;
  fetchBoards?: Maybe<Array<BoardReturn>>;
  fetchProfile?: Maybe<ProfileReturn>;
  fetchProfiles?: Maybe<Array<ProfileReturn>>;
};


export type QueryFetchBoardArgs = {
  number?: Maybe<Scalars['Int']>;
};


export type QueryFetchProfileArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Return = {
  __typename?: 'Return';
  message?: Maybe<Scalars['String']>;
};

