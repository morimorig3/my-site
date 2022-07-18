export const isProductionEnv = () =>
  process.env.NEXT_PUBLIC_STAGING_ENV === 'false';
