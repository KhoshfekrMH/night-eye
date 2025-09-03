import { Helmet } from "react-helmet-async";
import PanelLayout from "../../Layouts/PanelLayout";

function Panel() {
  return (
    <>
      <Helmet>
        <title>Panel - Night Eye</title>
      </Helmet>
      <PanelLayout>
        <div className="tabs tabs-lift mb-4 p-4">
          <input
            type="radio"
            name="panel_tab"
            className="tab text-secondary hover:text-primary transition font-bold"
            aria-label="📰 News"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 1
          </div>

          <input
            type="radio"
            name="panel_tab"
            className="tab text-secondary hover:text-primary transition font-bold"
            aria-label="👤 Members"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 2
          </div>

          <input
            type="radio"
            name="panel_tab"
            className="tab text-secondary hover:text-primary transition font-bold"
            aria-label="⚙️ Settings"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 3
          </div>
        </div>
      </PanelLayout>
    </>
  );
}

export default Panel;
