import TodoCheck from './components/TodoCheck';
import TodoDelBtn from './components/TodoDelBtn';
import TodosInput from './components/TodosInput';
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
          <section
            key={todo.id}
            className="bg-white border-b-2 border-b-gray-200 p-5 flex flex-row justify-between items-center"
          >
            <TodoCheck todo={todo} />
            <p className={`${todo.isDone && 'line-through'}`}>{todo.title}</p>
            <TodoDelBtn id={todo.id} />
          </section>
        ))}
      </section>
    </main>
  );
}
