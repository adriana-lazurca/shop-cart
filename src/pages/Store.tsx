import { Col, Row } from 'react-bootstrap';
import { getProducts } from '../apis/productApi';

import { StoreItem } from '../components/StoreItem';

const storeItems = getProducts();

export const Store = () => (
  <>
    <h1>Store</h1>
    <Row xs={1} md={2} lg={3} className="g-3">
      {storeItems.map((item) => (
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>
  </>
);
