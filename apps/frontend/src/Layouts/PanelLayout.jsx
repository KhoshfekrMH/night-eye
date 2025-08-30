import Header from "../shared/Layouts/Header";
import Footer from "../shared/Layouts/Footer";
import { AuthProvider } from "../shared/context/AuthProvider";

function PanelLayout({ children }) {
  return (
    <AuthProvider>
      <Header type="panel" />
      <main>{children}</main>
      <Footer />
    </AuthProvider>
  );
}

export default PanelLayout;
