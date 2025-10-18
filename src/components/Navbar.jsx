import { Navbar as BootstrapNavbar, Container, Nav, Button, Dropdown } from "react-bootstrap";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const NAV_LINKS = ["Home", "Employee", "Timeline", "Report", "Task"];

function Navbar({ searchQuery, setSearchQuery, filteredMetrics, onFeatureClick, onSearchSelect }) {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="navbar-main shadow-sm">
      <Container fluid className="navbar-container">
        <BootstrapNavbar.Brand href="#" className="navbar-brand-wrapper d-flex align-items-center gap-2">
          <img src={viteLogo} alt="Vite" height="28" className="navbar-logo-vite" />
          <img src={reactLogo} alt="React" height="28" className="navbar-logo-react react-logo" />
          <span className="navbar-title fw-bold">Admin Console</span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="navbar-nav" className="navbar-toggle" />
        <BootstrapNavbar.Collapse id="navbar-nav" className="navbar-collapse d-flex flex-wrap justify-content-between">
          <Nav className="navbar-links me-auto mb-2 mb-lg-0">
            {NAV_LINKS.map((link) => (
              <Nav.Link key={link} href="#" className="navbar-link" onClick={() => onFeatureClick(link)}>
                {link}
              </Nav.Link>
            ))}
          </Nav>

          <div className="navbar-actions d-flex flex-wrap gap-2 position-relative">
            <div className="navbar-search-wrapper position-relative">
              <input
                className="navbar-search-input form-control form-control-sm"
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Dropdown.Menu show className="navbar-search-dropdown w-100 position-absolute">
                  {filteredMetrics.length > 0 ? (
                    filteredMetrics.map((metric) => (
                      <Dropdown.Item key={metric.name} className="navbar-search-item" onClick={() => onSearchSelect(metric)}>
                        {metric.name}
                      </Dropdown.Item>
                    ))
                  ) : (
                    <Dropdown.Item disabled className="navbar-search-empty">No results found</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              )}
            </div>
            <Button variant="outline-light" size="sm" className="navbar-logout-btn" onClick={() => onFeatureClick("Logout")}>
              Logout
            </Button>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
