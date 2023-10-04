import TodoCheck from './TodoCheck';
import TodoDelBtn from './TodoDelBtn';
import { Todo } from '@prisma/client';
import TodoTxtUpdate from './TodoTxtUpdate';

export default function Todo({ todo }: { todo: Todo }) {
  return (
    <section
      key={todo.id}
      className="bg-white border-b-2 border-b-gray-200 p-5 flex flex-row justify-between items-center gap-5"
    >
      <TodoCheck todo={todo} />
      <TodoTxtUpdate todo={todo} />
      <TodoDelBtn id={todo.id} />
    </section>
  );
}
