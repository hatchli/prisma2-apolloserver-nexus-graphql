import { nexusPrismaPlugin } from 'nexus-prisma'
import { idArg, makeSchema, objectType, stringArg, intArg } from 'nexus'

const Users = objectType({
  name: 'users',
  definition(t) {
    t.model.user_id()
    t.model.name()
    t.model.email()
    t.model.postses({
      pagination: false,
    })
    t.model.profileses({
      pagination: false,
    })
    t.model.role()
  },
})

const Posts = objectType({
  name: 'posts',
  definition(t) {
    t.model.post_id()
    t.model.title()
    t.model.content()
    t.model.created_at()
    t.model.author_id()
  },
})

const Profiles = objectType({
  name: 'profiles',
  definition(t) {
    t.model.profile_id(), t.model.bio(), t.model.user_id()
  },
})

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.posts()

    t.list.field('feed', {
      type: 'posts',
      resolve: (_, args, ctx) => {
        return ctx.prisma.posts.findMany({
          where: { published: true },
        })
      },
    })

    t.list.field('filterPosts', {
      type: 'posts',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (_, { searchString }, ctx) => {
        return ctx.prisma.posts.findMany({
          where: {
            OR: [
              { title: { contains: searchString } },
              { content: { contains: searchString } },
            ],
          },
        })
      },
    })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneusers({ alias: 'signupUser' })
    t.crud.deleteOneposts()

    t.field('createDraft', {
      type: 'posts',
      args: {
        title: stringArg({ nullable: false }),
        content: stringArg(),
        authorEmail: stringArg(),
      },
      resolve: (_, { title, content, authorEmail }, ctx) => {
        return ctx.prisma.posts.create({
          data: {
            title,
            content,
            published: false,
            author_id: {
              connect: { email: authorEmail },
            },
          },
        })
      },
    })

    t.field('publish', {
      type: 'posts',
      nullable: true,
      args: {
        id: idArg(),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.prisma.posts.update({
          where: { post_id: Number(id) },
          data: { published: true },
        })
      },
    })
  },
})

export const schema = makeSchema({
  types: [Query, Mutation, Posts, Users, Profiles],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})
