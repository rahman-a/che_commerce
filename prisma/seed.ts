import { Prisma, PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const users: Prisma.UserCreateInput[] = [
  {
    name: 'Faulkner Muspratt',
    email: 'fmuspratt7@squidoo.com',
    phone: '+21017950786',
    password: bcrypt.hashSync('147852369', 10),
    role: 'employee',
    status: 'inactive',
    shippingAddress: {
      create: [
        {
          country: 'Egypt',
          addressLine: '145 Gawish St, 11th neighborhood, October City',
        },
      ],
    },
  },
  {
    name: 'Florella Phillimore',
    email: 'fphillimore8@hexun.com',
    phone: '+96555558837',
    password: bcrypt.hashSync('963258741', 10),
    role: 'manager',
    status: 'active',
    shippingAddress: {
      create: [
        {
          country: 'kuwait',
          addressLine: '123 Mubarak Al-kabir, Mubarak Al-kabir',
        },
      ],
    },
  },
  {
    name: 'Ahmed Abdelrahman',
    phone: '+21117490786',
    email: 'ahm.abdrahman@gmail.com',
    password: bcrypt.hashSync('ahm4055189', 10),
    role: 'manager',
    shippingAddress: {
      create: [
        {
          country: 'Egypt',
          addressLine: '32 Ras Elkhalij, Sherbine, Ad dakahliya',
        },
      ],
    },
  },
]

async function seed() {
  console.log('Start Seeding....')
  for (const user of users) {
    await prisma.user.create({ data: user })
  }
  console.log('End Seeding....', users.length)
}

seed()
  .then(() => {
    prisma.$disconnect()
  })
  .catch((error) => {
    console.log('Seed Errors: ', error)
    prisma.$disconnect()
    process.exit(1)
  })
