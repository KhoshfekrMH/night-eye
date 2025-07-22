import MainNav from "./MainNav";

function PanelNav({ links = [] }) {
  return (
    <div>
      <MainNav links={links} />
    </div>
  );
}

export default PanelNav;
