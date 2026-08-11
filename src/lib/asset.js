/**
 * Resolve a path from `public/` against the deploy base path.
 *
 * Vite rewrites asset URLs it can see at build time (imports, index.html), but
 * paths written as plain strings in portfolioData.js are invisible to it. On a
 * project page like /Portfolio/ those would resolve to the domain root and 404,
 * so prefix them with BASE_URL here instead.
 *
 * Absolute URLs (https://, mailto:) and empty values pass through untouched.
 */
export function asset(path) {
  if (!path || !path.startsWith('/')) return path;
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}
