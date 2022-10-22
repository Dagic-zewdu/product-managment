import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useLocation, useSearchParams } from 'react-router-dom';
import { AddProductContext } from '../../../../context';
import useQuery from '../../../../hooks/useQuery';
import AddProductForm from '../Form';

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
    <div className="d-flex align-items-center justify-content-start w-100">
      <Tabs
        defaultActiveKey={tab}
        id="uncontrolled-tab-example"
        fill
        onSelect={(e) => handleTabChange(e)}
        className="mb-3"
      >
        <Tab eventKey="single" title="Single"></Tab>
        <Tab eventKey="bundle" title="Bundle"></Tab>
        <Tab eventKey="quantity" title="Update Quantity"></Tab>
      </Tabs>
    </div>
  );
}

export default AddProductsTabs;
