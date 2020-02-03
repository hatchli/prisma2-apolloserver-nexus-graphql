import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const users = await prisma.users.findMany({
    include: {
      postses: true,
    },
  })
  console.log(JSON.stringify(users))
}

main()
