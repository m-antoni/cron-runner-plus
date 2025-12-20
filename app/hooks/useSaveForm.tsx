import { useState } from 'react';
import {
  cleanArray,
  findDuplicateKeys,
  findKeysWithEmptyValues,
  validateWebsite,
} from '@/app/lib/helpers';

type EnvItem = {
  envKey: string;
  envValue: string;
};

type SaveFormProps = {
  appInfo: {
    app_name: string;
    url: string;
    technology: string;
    github: string;
    description: string;
  };
  env: EnvItem[];
};

export function useSaveForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(['']);

  const saveForm = (appInfo: SaveFormProps['appInfo'], env: SaveFormProps['env']) => {
    // error messages
    const errorMessages: string[] = [];

    // ** App Information form validations
    if (!appInfo.app_name) errorMessages.push('App Name is required, and at least 2 characters.');
    if (appInfo.app_name.length == 1) errorMessages.push('App Name must at least 2 characters.');
    if (appInfo.app_name.length > 50)
      errorMessages.push('App Name must not more than 50 characters');
    if (appInfo.technology.length == 1)
      errorMessages.push('Techonology must at least 2 characters.');
    if (appInfo.github && !validateWebsite(appInfo.github)) {
      errorMessages.push('Github is not a valid web address.');
    }
    if (appInfo.url && !validateWebsite(appInfo.url)) {
      errorMessages.push('App Url is not a valid web address.');
    }
    if (appInfo.description.length == 1)
      errorMessages.push('Description must at least 2 characters.');
    if (appInfo.description.length > 150)
      errorMessages.push('Description must not more than 150 characters.');

    // ** Environment Variables validations
    // check the duplicate key names
    const duplicateKeys: string = findDuplicateKeys(env, 'envKey');
    if (duplicateKeys)
      errorMessages.push(`Duplicate Environment Variable key(s) found: "${duplicateKeys}"`);

    // check env values that are empty
    const checkEmptyValues: string = findKeysWithEmptyValues(env, 'envKey', 'envValue');
    if (checkEmptyValues)
      errorMessages.push(`Environment variable(s) with empty value found: "${checkEmptyValues}"`);

    // ** Set errors
    setErrors(errorMessages);

    if (errors.length > 0) return;

    // ****** SENDING TO API ****** //
    const payload = {
      appInfo,
      env: cleanArray(env),
    };

    setLoading(true);
    setTimeout(() => {
      console.log(payload);
      setLoading(false);
    }, 1000);
  };

  return {
    saveForm,
    loading,
    errors,
  };
}
