"use client";

import { useEffect } from "react";

export default function NavigationRefresh() {
  useEffect(() => {
    const handlePopState = () => {
      window.location.reload();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return null;
}
