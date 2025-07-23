import Header from "../shared/Layouts/Header";
import Footer from "../shared/Layouts/Footer";

function MainLayout({ children }) {
  return (
    <div>
      <Header type="main" />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
