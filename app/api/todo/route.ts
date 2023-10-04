import prisma from '@/app/lib/prisma';
import { Todo } from '@prisma/client';

export async function POST(req: Request) {
  const res: { title: string } = await req.json();

  await prisma.todo.create({ data: { title: res.title } });

  return Response.json({ message: 'Todo added successfully' });
}

export async function DELETE(req: Request) {
  const res: { id: number } = await req.json();

  await prisma.todo.delete({
    where: {
      id: res.id,
    },
  });

  return Response.json({ message: 'Todo removed successfully' });
}

export async function PUT(req: Request) {
  const res: Todo = await req.json();

  await prisma.todo.update({
    where: { id: res.id },
    data: { isDone: res.isDone, title: res.title },
  });

  return Response.json({ message: 'Todo updated successfully' });
}
