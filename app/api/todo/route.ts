import prisma from '@/app/lib/prisma';

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
