import MainNav from "../components/Navigation/MainNav";
import PanelNav from "../components/Navigation/PanelNav";
import { mainNavLinks } from "../../routes";

function Header({ type = "main" }) {
  return (
    <header>
      {type === "main" ? (
        <MainNav links={mainNavLinks} />
      ) : (
        <PanelNav links={mainNavLinks} />
      )}
    </header>
  );
}

export default Header;
