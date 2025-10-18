import { useState, useMemo } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { overviewMetrics } from "./data/overviewData";
import { lineData, pieData } from "./data/chartData";
import { getChartColors } from "./utils/colors";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/Navbar.css";
import "./styles/Sidebar.css";
import "./styles/Dashboard.css";

function App() {
  const [notification, setNotification] = useState({ message: "", show: false });
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMetrics = useMemo(
    () => overviewMetrics.filter(({ name }) => name.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  const chartColors = useMemo(() => getChartColors(overviewMetrics), []);

  const showNotification = (message) => setNotification({ message, show: true });

  const handleFeatureClick = (feature) => showNotification(`${feature} feature is under development`);

  const handleSearchSelect = ({ name, value }) => showNotification(`${name}: ${value} (In development)`);

  return (
    <>
      <ToastContainer position="top-end" className="app-toast-container p-3">
        <Toast
          onClose={() => setNotification({ ...notification, show: false })}
          show={notification.show}
          delay={3000}
          autohide
          bg="info"
          className="app-toast"
        >
          <Toast.Header className="app-toast-header">
            <strong className="app-toast-title me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="app-toast-body">{notification.message}</Toast.Body>
        </Toast>
      </ToastContainer>

      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredMetrics={filteredMetrics}
        onFeatureClick={handleFeatureClick}
        onSearchSelect={handleSearchSelect}
      />

      <div className="app-layout d-flex flex-grow-1 flex-column flex-md-row" style={{ minHeight: "100vh" }}>
        <Sidebar onFeatureClick={handleFeatureClick} />
        <Dashboard metrics={filteredMetrics} lineData={lineData} pieData={pieData} colors={chartColors} />
      </div>
    </>
  );
}

export default App;
