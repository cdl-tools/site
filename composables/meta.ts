/**
 * Automatically sets ogTitle on pages based on page title
 */
export const usePageMeta = (
  ...[input, options]: Parameters<typeof useSeoMeta>
) => {
  return useSeoMeta(
    {
      ogTitle: input.title as (typeof input)["ogTitle"],
      ...input,
    },
    options,
  );
};
