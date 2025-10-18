import { Card } from "react-bootstrap";
import OverviewCards from "./OverviewCards";
import Charts from "./Charts";

function Dashboard({ metrics, lineData, pieData, colors }) {
  return (
    <div className="dashboard-main main-content">
      <Card className="dashboard-card p-4 shadow">
        <div className="dashboard-greeting mb-4">
          <h3 className="dashboard-greeting-title fw-bold">Hello, Andrew 👋</h3>
          <p className="dashboard-greeting-subtitle text-muted">Here's an overview of your dashboard</p>
        </div>
        <OverviewCards metrics={metrics} />
        <Charts lineData={lineData} pieData={pieData} colors={colors} />
      </Card>
    </div>
  );
}

export default Dashboard;
