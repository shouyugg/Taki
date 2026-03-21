import { prisma } from '@/lib/prisma'

export async function getAllPosts() {
  return await prisma.blog.findMany()
}


export async function createPost(title: string, content: string) {
  return await prisma.blog.create({
    data: {
      title,
      content,
    },
  })
}