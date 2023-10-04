'use client';

import { useRouter } from 'next/navigation';

const CompAllBtn = () => {
  const router = useRouter();

  const handleClick = async () => {
    await completeTodos();
    router.refresh();
  };

  const completeTodos = async () => {
    try {
      const res = await fetch('/api/todo/complete', {
        method: 'POST',
      });
      //const data = await res.json();
      //console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return <button onClick={handleClick}>Complete all</button>;
};

export default CompAllBtn;
