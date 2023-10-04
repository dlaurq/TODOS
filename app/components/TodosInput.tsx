'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function TodosInput() {
  const [inputValue, setInputValue] = useState<string>('');
  const router = useRouter();
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      try {
        const res = await fetch('/api/todo', {
          method: 'POST',
          body: JSON.stringify({ title: inputValue }),
        });

        const data = await res.json();
        router.refresh();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <section>
      <input
        className="border-black border-2"
        type="text"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </section>
  );
}
