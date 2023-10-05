import TodoCheck from './TodoCheck';
import TodoDelBtn from './TodoDelBtn';
import { Todo } from '@prisma/client';
import TodoTxtUpdate from './TodoTxtUpdate';

export default function Todo({ todo }: { todo: Todo }) {
  return (
    <section key={todo.id} className="todo">
      <TodoCheck todo={todo} />
      <TodoTxtUpdate todo={todo} />
      <TodoDelBtn id={todo.id} />
    </section>
  );
}
