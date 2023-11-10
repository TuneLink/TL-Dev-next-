'use client'
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <div
      style={{
        paddingTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {show && (
        <Alert
          variant="success"
          style={{
            maxWidth: "600px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Alert.Heading>
            <strong>Notice:</strong>
          </Alert.Heading>
          <p>
            This website is still in development. Thank you for your patience as
            we continue to make it more awesome!
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-dark">
              Close
            </Button>
          </div>
        </Alert>
      )}
    </div>
  );
}

export default AlertDismissible;
