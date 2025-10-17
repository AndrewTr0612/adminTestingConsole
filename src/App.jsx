import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Row,
  Col,
  Card,
  Dropdown,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [consoleMsg, setConsoleMsg] = useState("Ready");
  const [showToast, setShowToast] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const overviewProps = [
    { name: "Revenue", value: "$12,500", color: "success", border: "success" },
    { name: "Profit", value: "$4,800", color: "primary", border: "primary" },
    { name: "Expenses", value: "$7,700", color: "danger", border: "danger" },
  ];

  const filteredProps = overviewProps.filter((prop) =>
    prop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Chart colors match overviewProps
  const COLORS = overviewProps.map((prop) => {
    switch (prop.color) {
      case "success":
        return "#28a745";
      case "primary":
        return "#007bff";
      case "danger":
        return "#dc3545";
      default:
        return "#8884d8";
    }
  });

  // Demo chart data
  const lineData = [
    { month: "Jan", revenue: 4000, expenses: 2400, profit: 1600 },
    { month: "Feb", revenue: 3000, expenses: 1398, profit: 1602 },
    { month: "Mar", revenue: 2000, expenses: 980, profit: 1020 },
    { month: "Apr", revenue: 2780, expenses: 3908, profit: -1128 },
    { month: "May", revenue: 1890, expenses: 4800, profit: -2910 },
    { month: "Jun", revenue: 2390, expenses: 3800, profit: -1410 },
    { month: "Jul", revenue: 3490, expenses: 4300, profit: -810 },
  ];

  const pieData = [
    { name: "Revenue", value: 12500 },
    { name: "Profit", value: 4800 },
    { name: "Expenses", value: 7700 },
  ];

  // Handle all feature clicks
  const handleFeatureClick = (featureName) => {
    setConsoleMsg(`${featureName} feature is under development`);
    setShowToast(true);
  };

  return (
    <div id="root">
      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg="info"
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>{consoleMsg}</Toast.Body>
        </Toast>
      </ToastContainer>

      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container fluid>
          <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
            <img src={viteLogo} alt="Vite Logo" height="28" />
            <img src={reactLogo} alt="React Logo" height="28" className="react-logo" />
            <span className="fw-bold">Admin Console</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse
            id="navbar-nav"
            className="d-flex flex-wrap justify-content-between"
          >
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="#" onClick={() => handleFeatureClick("Home")}>
                Home
              </Nav.Link>
              <Nav.Link href="#" onClick={() => handleFeatureClick("Employee")}>
                Employee
              </Nav.Link>
              <Nav.Link href="#" onClick={() => handleFeatureClick("Timeline")}>
                Timeline
              </Nav.Link>
              <Nav.Link href="#" onClick={() => handleFeatureClick("Report")}>
                Report
              </Nav.Link>
              <Nav.Link href="#" onClick={() => handleFeatureClick("Task")}>
                Task
              </Nav.Link>
            </Nav>

            {/* Search + Logout */}
            <div className="d-flex flex-wrap gap-2 position-relative">
              <div className="position-relative">
                <input
                  className="form-control form-control-sm"
                  type="search"
                  placeholder="Search for keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <Dropdown.Menu show className="w-100 position-absolute">
                    {filteredProps.length > 0 ? (
                      filteredProps.map((prop, idx) => (
                        <Dropdown.Item
                          key={idx}
                          onClick={() => {
                            setConsoleMsg(
                              `${prop.name}: ${prop.value} (Feature developing)`
                            );
                            setShowToast(true);
                          }}
                        >
                          {prop.name}
                        </Dropdown.Item>
                      ))
                    ) : (
                      <Dropdown.Item disabled>No results found</Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                )}
              </div>
              <Button
                variant="outline-light"
                size="sm"
                onClick={() => handleFeatureClick("Logout")}
              >
                Logout
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Layout */}
      <div
        className="d-flex flex-grow-1 flex-column flex-md-row"
        style={{ minHeight: "100vh" }}
      >
        {/* Sidebar */}
        <div className="sidebar p-3">
          <h6 className="text-uppercase text-light mb-3">Menu</h6>
          <Nav className="flex-column">
            <Nav.Link href="#" onClick={() => handleFeatureClick("Overview")}>
              Overview
            </Nav.Link>
            <Nav.Link href="#" onClick={() => handleFeatureClick("Analytics")}>
              Analytics
            </Nav.Link>
            <Nav.Link href="#" onClick={() => handleFeatureClick("Settings")}>
              Settings
            </Nav.Link>
          </Nav>
        </div>

        {/* Main Content */}
        <div className="main-content flex-grow-1 p-3">
          {/* Dashboard Container Box */}
          <Card className="p-4 shadow rounded-3 mb-4">
            {/* Greeting */}
            <div className="mb-4">
              <h3 className="fw-bold">Hello, Andrew 👋</h3>
              <p className="text-muted fs-5">Here's an overview of your dashboard</p>
            </div>

            {/* Overview Props */}
            <Row className="mb-4 text-center">
              {filteredProps.length > 0 ? (
                filteredProps.map((prop, idx) => (
                  <Col xs={12} sm={6} md={4} key={idx} className="mb-3">
                    <Card
                      className={`shadow-sm rounded-lg py-3 border-${prop.border} rounded-card`}
                    >
                      <Card.Body>
                        <Card.Title className="fs-5 text-uppercase">{prop.name}</Card.Title>
                        <Card.Text className={`fs-2 fw-bold text-${prop.color}`}>
                          {prop.value}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col>
                  <Card className="text-center shadow-sm py-3 rounded-lg">
                    <Card.Body>
                      <Card.Text className="fs-5 text-muted">No results found</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </Row>

            {/* Charts side by side */}
            <Row className="g-4">
              {/* Line Chart */}
              <Col xs={12} md={6}>
                <Card className="shadow-sm p-3 rounded-lg">
                  <h5 className="mb-3">Line Chart Overview</h5>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={lineData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="revenue" stroke={COLORS[0]} />
                      <Line type="monotone" dataKey="profit" stroke={COLORS[1]} />
                      <Line type="monotone" dataKey="expenses" stroke={COLORS[2]} />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>
              </Col>

              {/* Pie Chart */}
              <Col xs={12} md={6}>
                <Card className="shadow-sm p-3 rounded-lg">
                  <h5 className="mb-3">Pie Chart Overview</h5>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </Card>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
