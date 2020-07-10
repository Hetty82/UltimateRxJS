export const observer = (name) => ({
  next: (value) => console.log(`🤓 ${name} | next:`, value),
  error: (error) => console.log(`🤓 ${name} | error:`, error),
  complete: () => console.log(`🤓 ${name} | complete!`),
});
