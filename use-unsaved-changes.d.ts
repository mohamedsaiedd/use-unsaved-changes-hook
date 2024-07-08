declare module 'use-unsaved-changes/hooks/useUnsavedChanges' {
    export type UnsavedChangesReturnType = {
      isDirty: boolean;
      setIsDirty: React.Dispatch<React.SetStateAction<boolean>>;
    };
  
    export function useUnsavedChanges(): UnsavedChangesReturnType;
  }