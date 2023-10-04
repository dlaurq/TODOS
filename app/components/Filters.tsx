'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

const Filters = () => {
  const searchParams = useSearchParams();

  const router = useRouter();

  const searchParams = useSearchParams();
  const handleFilters = (state: string) => {
    const query = { filter: state };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.replace(url);
  };

  return (
    <section className=" flex flex-row justify-between items-center pt-2 gap-5">
      <button
        className={`text-xl bg-white py-1 px-2 border-2 hover:border-red-400 ${
          searchParams.get('filter') === '' && 'border-red-400'
        }`}
        onClick={() => handleFilters('')}
      >
        All
      </button>
      <button
        className={`text-xl bg-white py-1 px-2 border-2 hover:border-red-400 ${
          searchParams.get('filter') === 'comp' && 'border-red-400'
        }`}
        onClick={() => handleFilters('comp')}
      >
        Completed
      </button>
      <button
        className={`text-xl bg-white py-1 px-2 border-2 hover:border-red-400 ${
          searchParams.get('filter') === 'unComp' && 'border-red-400'
        }`}
        onClick={() => handleFilters('unComp')}
      >
        Uncompleted
      </button>
    </section>
  );
};

export default Filters;
