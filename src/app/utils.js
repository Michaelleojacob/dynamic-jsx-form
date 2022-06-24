export const generateKey = () =>
  Date.now().toString(36) + Math.random().toString(36);
