/**
 * Lightweight client-side error reporting hook for the root error boundary.
 * Currently logs to the console; swap in a real monitoring provider
 * (e.g. Sentry) here if/when one is set up for production.
 */
export function reportAppError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  console.error("[App error]", message, {
    route: window.location.pathname,
    stack: error instanceof Error ? error.stack : undefined,
    ...context,
  });
}
