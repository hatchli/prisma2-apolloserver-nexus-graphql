/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as Context from "../context"
import * as prisma from "@prisma/client"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  postsCreateManyWithoutAuthor_idInput: { // input type
    connect?: NexusGenInputs['postsWhereUniqueInput'][] | null; // [postsWhereUniqueInput!]
    create?: NexusGenInputs['postsCreateWithoutAuthor_idInput'][] | null; // [postsCreateWithoutAuthor_idInput!]
  }
  postsCreateWithoutAuthor_idInput: { // input type
    content?: string | null; // String
    created_at?: any | null; // DateTime
    published?: boolean | null; // Boolean
    title: string; // String!
  }
  postsWhereUniqueInput: { // input type
    post_id?: number | null; // Int
  }
  profilesCreateManyWithoutUser_idInput: { // input type
    connect?: NexusGenInputs['profilesWhereUniqueInput'][] | null; // [profilesWhereUniqueInput!]
    create?: NexusGenInputs['profilesCreateWithoutUser_idInput'][] | null; // [profilesCreateWithoutUser_idInput!]
  }
  profilesCreateWithoutUser_idInput: { // input type
    bio?: string | null; // String
  }
  profilesWhereUniqueInput: { // input type
    profile_id?: number | null; // Int
  }
  usersCreateInput: { // input type
    email: string; // String!
    name?: string | null; // String
    postses?: NexusGenInputs['postsCreateManyWithoutAuthor_idInput'] | null; // postsCreateManyWithoutAuthor_idInput
    profileses?: NexusGenInputs['profilesCreateManyWithoutUser_idInput'] | null; // profilesCreateManyWithoutUser_idInput
    role?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Mutation: {};
  Query: {};
  posts: prisma.posts;
  profiles: prisma.profiles;
  users: prisma.users;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  postsCreateManyWithoutAuthor_idInput: NexusGenInputs['postsCreateManyWithoutAuthor_idInput'];
  postsCreateWithoutAuthor_idInput: NexusGenInputs['postsCreateWithoutAuthor_idInput'];
  postsWhereUniqueInput: NexusGenInputs['postsWhereUniqueInput'];
  profilesCreateManyWithoutUser_idInput: NexusGenInputs['profilesCreateManyWithoutUser_idInput'];
  profilesCreateWithoutUser_idInput: NexusGenInputs['profilesCreateWithoutUser_idInput'];
  profilesWhereUniqueInput: NexusGenInputs['profilesWhereUniqueInput'];
  usersCreateInput: NexusGenInputs['usersCreateInput'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createDraft: NexusGenRootTypes['posts']; // posts!
    deleteOneposts: NexusGenRootTypes['posts'] | null; // posts
    publish: NexusGenRootTypes['posts'] | null; // posts
    signupUser: NexusGenRootTypes['users']; // users!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['posts'][]; // [posts!]!
    filterPosts: NexusGenRootTypes['posts'][]; // [posts!]!
    posts: NexusGenRootTypes['posts'][]; // [posts!]!
  }
  posts: { // field return type
    author_id: NexusGenRootTypes['users']; // users!
    content: string | null; // String
    created_at: any | null; // DateTime
    post_id: number; // Int!
    title: string; // String!
  }
  profiles: { // field return type
    bio: string | null; // String
    profile_id: number; // Int!
    user_id: NexusGenRootTypes['users']; // users!
  }
  users: { // field return type
    email: string; // String!
    name: string | null; // String
    postses: NexusGenRootTypes['posts'][]; // [posts!]!
    profileses: NexusGenRootTypes['profiles'][]; // [profiles!]!
    role: string; // String!
    user_id: number; // Int!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createDraft: { // args
      authorEmail?: string | null; // String
      content?: string | null; // String
      title: string; // String!
    }
    deleteOneposts: { // args
      where: NexusGenInputs['postsWhereUniqueInput']; // postsWhereUniqueInput!
    }
    publish: { // args
      id?: string | null; // ID
    }
    signupUser: { // args
      data: NexusGenInputs['usersCreateInput']; // usersCreateInput!
    }
  }
  Query: {
    filterPosts: { // args
      searchString?: string | null; // String
    }
    posts: { // args
      after?: number | null; // Int
      before?: number | null; // Int
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Query" | "posts" | "profiles" | "users";

export type NexusGenInputNames = "postsCreateManyWithoutAuthor_idInput" | "postsCreateWithoutAuthor_idInput" | "postsWhereUniqueInput" | "profilesCreateManyWithoutUser_idInput" | "profilesCreateWithoutUser_idInput" | "profilesWhereUniqueInput" | "usersCreateInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}