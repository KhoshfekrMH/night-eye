import MainNav from "../shared/components/Navigation/MainNav";
import { mainNavLinks } from "../routes";

export default function TestPage() {
  return (
    <div>
      <MainNav links={mainNavLinks} />
      <h1>Test Page</h1>
    </div>
  );
}
