import { Helmet } from "react-helmet-async";
import PanelLayout from "../../Layouts/PanelLayout";

function Panel() {
  return <h1>Panel</h1>;
import { Helmet } from "react-helmet-async";
import PanelLayout from "../../Layouts/PanelLayout";
import PanelNewsTable from "../components/NewsTab/PanelNewsTable";

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
          <section className="tab-content bg-base-100 border-base-300 p-6">
            <div className="tabs tabs-border">
              <input
                type="radio"
                name="news_tab"
                className="tab"
                aria-label="🗂️ News Table"
                defaultChecked
              />
              <article className="tab-content border-base-300 bg-base-100 p-10">
                <PanelNewsTable />
              </article>

              <input
                type="radio"
                name="news_tab"
                className="tab"
                aria-label="✏️ Create News"
              />
              <article className="tab-content border-base-300 bg-base-100 p-10">
                Create News
              </article>
            </div>
          </section>

          <input
            type="radio"
            name="panel_tab"
            className="tab text-secondary hover:text-primary transition font-bold"
            aria-label="👤 Members"
          />
          <section className="tab-content bg-base-100 border-base-300 p-6">
            {/* TODO: WIP tab feature! */}
          </section>

          <input
            type="radio"
            name="panel_tab"
            className="tab text-secondary hover:text-primary transition font-bold"
            aria-label="⚙️ Settings"
          />
          <section className="tab-content bg-base-100 border-base-300 p-6">
            {/* TODO: WIP tab feature! */}
          </section>
        </div>
      </PanelLayout>
    </>
  );
}

export default Panel;
