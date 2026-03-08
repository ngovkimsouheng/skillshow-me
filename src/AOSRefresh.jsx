import { useEffect } from "react";
import { useLocation } from "react-router";
import AOS from "aos";

export default function AOSRefresh() {
  const location = useLocation();

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return null;
}
//Fix 2 — Refresh AOS when route changes (important)