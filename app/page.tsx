import TodosInput from './components/TodosInput';

export default function Home() {
  return (
    <main className="min-w-max min-h-screen flex flex-col items-center gap-5">
      <h1 className="text-4xl font-bold text-red-400 pt-10">Todos</h1>
      <TodosInput />
    </main>
  );
}
