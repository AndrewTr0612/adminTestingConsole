import { Nav } from "react-bootstrap";

const MENU_ITEMS = ["Overview", "Analytics", "Settings"];

function Sidebar({ onFeatureClick }) {
  return (
    <div className="sidebar sidebar-container p-3">
      <h6 className="sidebar-title text-uppercase text-light mb-3">Menu</h6>
      <Nav className="sidebar-nav flex-column">
        {MENU_ITEMS.map((item) => (
          <Nav.Link key={item} href="#" className="sidebar-menu-item" onClick={() => onFeatureClick(item)}>
            {item}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
}

export default Sidebar;
