import { useState } from 'react';
import {
  cleanArray,
  findDuplicateKeys,
  findKeysWithEmptyValues,
  validateEmail,
  validateWebsite,
} from '@/app/lib/helpers';
import { useRouter } from 'next/navigation';
import { AppFormProps } from '../types/appTypes';
import { createAppAction, updateAppAction } from '../actions/app';

export function useSaveForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>(['']);
  const router = useRouter();

  const saveForm = async (payload: AppFormProps) => {
    const errorMessages: string[] = [];

    // App Name validation
    if (!payload.appName || payload.appName.length < 2)
      errorMessages.push('App Name is required and must be at least 2 characters.');
    if (payload.appName.length > 50) errorMessages.push('App Name must not exceed 50 characters.');

    // App URL validation
    if (!payload.url) errorMessages.push('App URL is required.');
    if (payload.url && !validateWebsite(payload.url))
      errorMessages.push('App URL is not a valid URL.');

    // Notification Email validation
    if (payload.notificationEmail && !validateEmail(payload.notificationEmail)) {
      errorMessages.push('Notification email is not valid.');
    }

    // ENV validation
    const duplicateKeys = findDuplicateKeys(payload.env, 'envKey');
    cleanArray(payload.env);
    if (duplicateKeys) errorMessages.push(`Duplicate environment keys: "${duplicateKeys}"`);
    const emptyValues = findKeysWithEmptyValues(payload.env, 'envKey', 'envValue');
    if (emptyValues) errorMessages.push(`Environment variables with empty value: "${emptyValues}"`);

    // ** send errors
    setErrors(errorMessages);
    if (errorMessages.length > 0) return;

    // ** SEND DATA TO NEON DATABASE
    setLoading(true);

    let result;
    if (payload.id) {
      // ** UPDATE existing app
      result = await updateAppAction(payload);
    } else {
      // ** CREATE new app
      result = await createAppAction(payload);
    }

    setLoading(false);

    if (result.success) {
      router.push('/jobs');
    } else {
      alert('Error: ' + result.error);
    }
  };

  return {
    saveForm,
    loading,
    errors,
  };
}
