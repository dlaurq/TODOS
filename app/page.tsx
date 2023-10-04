import TodosInput from './components/TodosInput';
import Todo from './components/Todo';
import prisma from './lib/prisma';
import Filters from './components/Filters';
import CompAllBtn from './components/CompAllBtn';
import ClearCompBtn from './components/ClearCompBtn';

export default async function Home({
  searchParams,
}: {
  searchParams: { filter: string };
}) {
  const where = searchParams?.filter
    ? searchParams.filter === 'comp'
      ? { isDone: true }
      : { isDone: false }
    : {};

  const todos = await prisma.todo.findMany({
    orderBy: { id: 'asc' },
    where: where,
  });

  const counter = await prisma.todo.count({ where: { isDone: false } });

  return (
    <main className="min-w-max min-h-screen flex justify-center items-start gap-5 bg-gray-200">
      <section className="flex flex-col justify-between h-full">
        <h1 className="text-4xl font-bold text-red-400 pt-10 pb-5 text-center">
          Todos
        </h1>
        <TodosInput />
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
        <section>
          <section className="bg-white  p-2 flex flex-row justify-between items-center">
            <p>
              {counter} {counter === 1 ? 'item' : 'items'} left
            </p>
            <CompAllBtn />
            <ClearCompBtn />
          </section>
          <Filters />
        </section>
      </section>
    </main>
  );
}
