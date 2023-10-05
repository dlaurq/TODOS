import TodosInput from './components/TodosInput';
import Todo from './components/Todo';
import prisma from './lib/prisma';
import Filters from './components/Filters';
import CompAllBtn from './components/CompAllBtn';
import ClearCompBtn from './components/ClearCompBtn';
import ThemeToggle from './components/ThemeToggle';

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
    <main className="container container--light">
      <section className="section">
        <h1 className="section__title">Todos</h1>
        <TodosInput />
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}

        <section className="actions">
          <p>
            {counter} {counter === 1 ? 'item' : 'items'} left
          </p>
          <CompAllBtn />
          <ClearCompBtn />
        </section>

        <Filters />
        <ThemeToggle />
      </section>
    </main>
  );
}
