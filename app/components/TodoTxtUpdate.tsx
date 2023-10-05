'use client';

import { useState } from 'react';
import { Todo } from '@prisma/client';
import { useRouter } from 'next/navigation';

export default function TodoTxtUpdate({ todo }: { todo: Todo }) {
  const [editMode, setEditMode] = useState<Boolean>(false);

  const [inputValue, setInputValue] = useState<string>(todo.title);
  const router = useRouter();

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      try {
        const res = await fetch('/api/todo', {
          method: 'PUT',
          body: JSON.stringify({ ...todo, title: inputValue }),
        });

        //const data = await res.json();
        setEditMode(false);
        router.refresh();
        //console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <section
      className="todo__title"
      onClick={(e) => e.detail === 2 && setEditMode(true)}
    >
      {editMode ? (
        <input
          className="todo__title--edit"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <p
          data-testid="todo-title"
          className={`${
            todo.isDone && 'todo__title--done'
          } todo__title--content`}
        >
          {todo.title}
        </p>
      )}
    </section>
  );
}
