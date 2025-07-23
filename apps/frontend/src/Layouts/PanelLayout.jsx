import Header from "../shared/Layouts/Header";
import Footer from "../shared/Layouts/Footer";

function PanelLayout({ children }) {
  return (
    <div>
      <Header type="panel" />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default PanelLayout;
