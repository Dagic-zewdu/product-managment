export interface ProductInterface {
  Name: '';
  Quantity: 0;
  UnitPrice: 0;
  SellingPrice: 0;
  CategoryId: '';
  Files: [];
  tax?: () => number;
  CostPrice?: () => number;
  total?: () => number;
}

export interface AddProductInterfaceContext extends ProductInterface {
  tab: string;
  setTabs: Function;
  query: string;
  setState: Function;
}
