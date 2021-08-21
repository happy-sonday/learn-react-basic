import React, { Component } from "react";
import { Alert, UncontrolledAlert, Button, Badge } from "reactstrap";

class ReactstrapAlerts extends Component {
  render() {
    return (
      <div>
        <Alert color="light">Simple Alert [color : light]</Alert>
        <UncontrolledAlert color="warning">
          Uncontrolled Alert [color : warning]
        </UncontrolledAlert>
        <Alert color="dark">Simple Alert [color : dark]</Alert>
        <Alert color="info">Simple Alert [color : info]</Alert>

        <Button color="info">info</Button>
        <Button color="danger">danger</Button>
        <Button color="success">success</Button>
        <h1>
          Heading <Badge className="bg-secondary">New</Badge>
        </h1>
        <h2>
          Heading <Badge className="bg-secondary">New</Badge>
        </h2>
        <h3>
          Heading <Badge className="bg-secondary">New</Badge>
        </h3>
        <h4>
          Heading <Badge className="bg-secondary">New</Badge>
        </h4>
        <h5>
          Heading <Badge className="bg-warning text-dark">New</Badge>
        </h5>
        <h6>
          Heading <Badge className="rounded-pill bg-info text-dark">New</Badge>
        </h6>
        <h1>
          Heading <Badge className="bg-secondary">New</Badge>
        </h1>
        <h2>
          Heading <Badge className="bg-secondary">New</Badge>
        </h2>
        <h3>
          Heading <Badge className="secondary">New</Badge>
        </h3>
        <h4>
          Heading <Badge className="secondary">New</Badge>
        </h4>
        <h5>
          Heading <Badge color="secondary">New</Badge>
        </h5>
        <h6>
          Heading <Badge color="secondary">New</Badge>
        </h6>
      </div>
    );
  }
}

export default ReactstrapAlerts;
