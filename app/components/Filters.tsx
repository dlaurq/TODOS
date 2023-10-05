'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

const Filters = () => {
  const searchParams = useSearchParams();

  const router = useRouter();
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
    <section className="filters">
      <button
        className={`filters__btn ${
          searchParams.get('filter') === '' && 'filters__btn--selected'
        }`}
        onClick={() => handleFilters('')}
      >
        All
      </button>
      <button
        className={`filters__btn ${
          searchParams.get('filter') === 'comp' && 'filters__btn--selected'
        }`}
        onClick={() => handleFilters('comp')}
      >
        Completed
      </button>
      <button
        className={`filters__btn ${
          searchParams.get('filter') === 'unComp' && 'filters__btn--selected'
        }`}
        onClick={() => handleFilters('unComp')}
      >
        Uncompleted
      </button>
    </section>
  );
};

export default Filters;
