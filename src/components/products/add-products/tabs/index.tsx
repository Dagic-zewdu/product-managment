import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useLocation, useSearchParams } from 'react-router-dom';
import { AddProductContext } from '../../../../context';
import useQuery from '../../../../hooks/useQuery';

function AddProductsTabs() {
  const { tab, setTabs, query } = useContext(AddProductContext);
  let [searchParams, setSearchParams] = useSearchParams();
  const handleTabChange = (event: any) => {
    setTabs(event);
    setSearchParams({ tab: event });
  };
  useEffect(() => {
    setTabs(query);
  }, [query]);
  return (
    <div className="d-flex align-items-center justify-content-center w-100">
      <Tabs
        defaultActiveKey={tab}
        id="uncontrolled-tab-example"
        fill
        onSelect={(e) => handleTabChange(e)}
        className="mb-3"
      >
        <Tab eventKey="single" title="Add Single Product"></Tab>
        <Tab eventKey="bundle" title="Add Bundle Product"></Tab>
        <Tab eventKey="quantity" title="Add Quantity to exist product"></Tab>
      </Tabs>
    </div>
  );
}

export default AddProductsTabs;
