import { useState, useEffect } from 'react';
import { usePathname , useRouter} from 'next/navigation';

export function useUnsavedChanges() {
  const router = useRouter();
  const pathname = usePathname();

  const [isDirty, setIsDirty] = useState(false);

  const handleBeforeUnload = (e) => {
    if (isDirty) {
      const message = 'You have unsaved changes, are you sure you want to leave?';
      e.preventDefault();
      return message;
    }
  };

  const handleClick = (e) => {
    const anchor = e.target.closest('a');
    const hasSaveEditClass = e.target.closest('.save_edit');
    if (isDirty && anchor && !hasSaveEditClass) {
      let result = window.confirm('You have unsaved changes, are you sure you want to leave?');
      if (!result) {
        router.push(pathname);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty, pathname]);

  return { isDirty, setIsDirty };
}
