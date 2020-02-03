import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'

const server = new ApolloServer({
  schema,
  context: createContext,
  introspection: true,
  playground: true,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
