import prisma from '@/app/lib/prisma';

export async function POST() {
  await prisma.todo.updateMany({
    where: { isDone: false },
    data: { isDone: true },
  });

  return Response.json({ message: 'Todos updated successfully' });
}
