import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useLocation, useSearchParams } from 'react-router-dom';
import useQuery from '../../../../hooks/useQuery';

function AddProductsTabs() {
  const { search } = useLocation();
  const query = search.split('=')[1];
  const [tab, setTabs] = useState(query ? query : 'single');
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
