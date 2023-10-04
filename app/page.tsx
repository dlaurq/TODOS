import TodoCheck from './components/TodoCheck';
import TodoDelBtn from './components/TodoDelBtn';
import TodosInput from './components/TodosInput';
import Todo from './components/Todo';
import prisma from './lib/prisma';

export default async function Home() {
  const todos = await prisma.todo.findMany({ orderBy: { id: 'asc' } });

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
      </section>
    </main>
  );
}
