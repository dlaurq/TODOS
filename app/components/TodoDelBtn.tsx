'use client';

import { useRouter } from 'next/navigation';

export default function TodoDelBtn({ id }: { id: number }) {
  const router = useRouter();

  const handleClick = async () => {
    try {
      const res = await fetch('/api/todo', {
        method: 'DELETE',
        body: JSON.stringify({ id: id }),
      });

      const data = await res.json();
      router.refresh();
      //console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      data-testid="del-btn"
      className="text-red-500 font-bold text-2xl hover:text-red-800"
      onClick={handleClick}
    >
      X
    </button>
  );
}
