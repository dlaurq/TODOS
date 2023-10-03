'use client';

import { Todo } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function TodoCheck({ todo }: { todo: Todo }) {
  const [isDone, setIsDone] = useState<boolean>(todo.isDone);

  const router = useRouter();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDone(e.target.checked);

    try {
      const res = await fetch('/api/todo', {
        method: 'PUT',
        body: JSON.stringify({ ...todo, isDone: e.target.checked }),
      });

      const data = await res.json();
      router.refresh();
      //console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <input
      className="cursor-pointer"
      type="checkbox"
      name={'task' + todo.id.toString()}
      id={todo.id.toString()}
      checked={isDone}
      onChange={(e) => handleChange(e)}
    />
  );
}
