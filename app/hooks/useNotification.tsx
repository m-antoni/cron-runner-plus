import { useEffect, useState } from 'react';

export function useNotification(initialEmail: string) {
  const [notification, setNotification] = useState({
    notifyOnFailure: true,
    notifyOnRecovery: false,
    notificationEmail: initialEmail,
  });

  // Sync state if initialEmail changes (happens on refresh/late auth load)
  useEffect(() => {
    if (initialEmail) {
      setNotification((prev) => ({
        ...prev,
        notificationEmail: initialEmail,
      }));
    }
  }, [initialEmail]);

  const onChangeNotification = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, type, checked, value } = e.target;
    setNotification((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return { notification, onChangeNotification, setNotification };
}
