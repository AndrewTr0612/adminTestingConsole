import { Row, Col, Card } from "react-bootstrap";
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

const CHART_HEIGHT = 300;
const LINE_METRICS = ["revenue", "profit", "expenses"];

function Charts({ lineData, pieData, colors }) {
  return (
    <Row className="charts-row g-4">
      <Col xs={12} md={6} className="chart-col chart-col-line">
        <Card className="chart-card chart-card-line shadow-sm p-3">
          <h5 className="chart-title chart-title-line mb-3">Line Chart Overview</h5>
          <ResponsiveContainer width="100%" height={CHART_HEIGHT} className="chart-container chart-container-line">
            <LineChart data={lineData} className="chart-linechart">
              <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
              <XAxis dataKey="month" className="chart-xaxis" />
              <YAxis className="chart-yaxis" />
              <Tooltip className="chart-tooltip" />
              <Legend className="chart-legend" />
              {LINE_METRICS.map((metric, idx) => (
                <Line key={metric} type="monotone" dataKey={metric} stroke={colors[idx]} className={`chart-line-${metric}`} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </Col>

      <Col xs={12} md={6} className="chart-col chart-col-pie">
        <Card className="chart-card chart-card-pie shadow-sm p-3">
          <h5 className="chart-title chart-title-pie mb-3">Pie Chart Overview</h5>
          <ResponsiveContainer width="100%" height={CHART_HEIGHT} className="chart-container chart-container-pie">
            <PieChart className="chart-piechart">
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label className="chart-pie">
                {pieData.map((_, idx) => (
                  <Cell key={`cell-${idx}`} fill={colors[idx]} className={`chart-pie-cell chart-pie-cell-${idx}`} />
                ))}
              </Pie>
              <Tooltip className="chart-tooltip" />
              <Legend className="chart-legend" />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </Col>
    </Row>
  );
}

export default Charts;
