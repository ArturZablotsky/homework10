function memoize(fn, maxSize) {
    const cache = new Map();
  
    return function (...args) {
      const key = JSON.stringify(args);
  
      if (cache.has(key)) {
        console.log('From cache:', key);
        return cache.get(key);
      }
  
      const result = fn(...args);
  
      for (const [cachedKey, cachedValue] of cache.entries()) {
        if (cachedValue === result) {
          cache.delete(cachedKey);
          break;
        }
      }
  
      if (cache.size >= maxSize) {
        const firstKey = cache.keys().next().value;
        cache.delete(firstKey);
      }
      cache.set(key, result);
  
      return result;
    };
  }
  
  const slowFunction = (a, b) => {
    console.log('Computing...');
    return a + b;
  };
  
  const memoizedFunction = memoize(slowFunction, 3);
  
  console.log(memoizedFunction(2, 3));
  console.log(memoizedFunction(2, 3));
  console.log(memoizedFunction(4, 1));
  console.log(memoizedFunction(6, 7));
  console.log(memoizedFunction(8, 9));
  console.log(memoizedFunction(2, 3));