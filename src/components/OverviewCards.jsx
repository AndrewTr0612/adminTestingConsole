import { Row, Col, Card } from "react-bootstrap";

function OverviewCards({ metrics }) {
  if (metrics.length === 0) {
    return (
      <Row className="overview-cards-empty mb-4">
        <Col className="overview-cards-empty-col">
          <Card className="overview-cards-empty-card text-center shadow-sm py-3">
            <Card.Body className="overview-cards-empty-body">
              <Card.Text className="overview-cards-empty-text text-muted">No results found</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }

  return (
    <Row className="overview-cards-row mb-4 text-center g-3">
      {metrics.map(({ name, value, variant }) => (
        <Col xs={12} sm={6} md={4} key={name} className="overview-card-col">
          <Card className={`overview-card shadow-sm py-3 border-${variant}`}>
            <Card.Body className="overview-card-body">
              <Card.Title className="overview-card-title fs-5 text-uppercase">{name}</Card.Title>
              <Card.Text className={`overview-card-value fs-2 fw-bold text-${variant}`}>{value}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default OverviewCards;
