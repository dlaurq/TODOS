'use client';

import { useRouter } from 'next/navigation';

const ClearCompBtn = () => {
  const router = useRouter();
  const handleClick = async () => {
    await DeleteTodos();

    router.refresh();
  };

  const DeleteTodos = async () => {
    try {
      const res = await fetch('/api/todo/complete', {
        method: 'DELETE',
      });

      //const data = await res.json();
      //console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button className="actions__clear" onClick={handleClick}>
      Clear completed
    </button>
  );
};

export default ClearCompBtn;
