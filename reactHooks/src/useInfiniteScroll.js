import { useState } from 'react';

const useInfiniteScroll = (start = 8, pace = 3) => {
  // create state within the custom hook
  const [limit, setLimit] = useState(start);

  // update state based on window scroll heights
  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      setLimit(limit + pace);
    }
  };

  // return state
  return limit;
};

export default useInfiniteScroll;
