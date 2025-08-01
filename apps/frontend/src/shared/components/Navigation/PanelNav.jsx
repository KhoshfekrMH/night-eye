import BaseNav from "./BaseNav";

//TODO: It should connect to Auth API & and also fix Avatar
function PanelNav({ links }) {
  return (
    <BaseNav links={links}>
      <div className="dropdown dropdown-end px-4">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          {/*TODO: Need API and Dashboard functions*/}
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </BaseNav>
  );
}

export default PanelNav;
