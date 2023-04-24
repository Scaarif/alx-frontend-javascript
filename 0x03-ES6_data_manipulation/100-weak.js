export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  // track how many times an endpoint is queried
  if (weakMap.has(endpoint)) { const count = weakMap.get(endpoint) + 1; weakMap.set(endpoint, count); if (count >= 5) { throw new Error('Endpoint load is high'); } } else { weakMap.set(endpoint, 1); }
}
