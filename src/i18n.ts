import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'nl', 'it'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as string)) notFound(); // Changed from 'as any' to 'as string'
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});