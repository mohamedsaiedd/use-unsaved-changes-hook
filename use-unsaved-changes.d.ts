// use-unsaved-changes.d.ts
declare module 'use-unsaved-changes' {
    export { useUnsavedChanges } from './hooks/useUnsavedChanges';
  }
  
  // This assumes that your useUnsavedChanges hook returns a specific type
  // Adjust 'ReturnType' to match the actual return type of your hook
  declare function useUnsavedChanges(): ReturnType<typeof import('./hooks/useUnsavedChanges').useUnsavedChanges>;
  