"use client";

import { useCallback, useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
  };
}

function notify() {
  for (const l of listeners) l();
}

export function useHashTab<T extends string>(
  ids: readonly T[],
  defaultTab: T,
): [T, (id: T) => void] {
  const raw = useSyncExternalStore(
    subscribe,
    () => window.location.hash.replace(/^#/, ""),
    () => "",
  );

  const activeTab = (ids as readonly string[]).includes(raw)
    ? (raw as T)
    : defaultTab;

  const setTab = useCallback((id: T) => {
    history.pushState(null, "", "#" + id);
    notify();
  }, []);

  return [activeTab, setTab];
}
