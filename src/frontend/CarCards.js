import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import BookingDetails from "./BookingDetails";

export function CarCards({ id, name, sourcefile, amount }) {
  return (
    <Card key={id} className="d-flex carCard" style={{ width: "10rem" }}>
      <Card.Img variant="bottom" src={sourcefile} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Rs.{amount}/hour</Card.Text>
        <Link to="/BookingDetails">
          <Button
            className="mb-3"
            variant="outline-danger"
            onClick={BookingDetails(id)}
          >
            Add to Cart
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
