import React, { Component } from "react";
import { Button, Badge } from "reactstrap";

class StrapBadge extends Component {
  render() {
    return (
      <div>
        <Button color="primary" outline>
          Notifications <Badge color="dark">4</Badge>
        </Button>
        <Button color="danger">pill</Button>
        <Badge color="dark">Dark</Badge>
        <Badge color="info">변경</Badge>
      </div>
    );
  }
}

export default StrapBadge;
