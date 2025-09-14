import { useEffect, useState } from "react";
import Alert from "../../../shared/components/UIElements/Alert";

export default function PanelGuard({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function check() {
      setIsMobile(window.innerWidth < 1024);
    }

    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <Alert type="warning" message="Panel is not available on mobile view!" />
    );
  }

  return children;
}
