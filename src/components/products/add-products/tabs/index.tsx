import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

function AddProductsTabs() {
  return (
    <div className="d-flex align-items-center justify-content-center w-100">
      <Tabs defaultActiveKey="single" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="single" title="Add Single Product"></Tab>
        <Tab eventKey="bundle" title="Add Bundle Product"></Tab>
        <Tab eventKey="quantity" title="Add Quantity to exist product"></Tab>
      </Tabs>
    </div>
  );
}

export default AddProductsTabs;
