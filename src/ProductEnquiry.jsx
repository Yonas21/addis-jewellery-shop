import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { db } from './firebase';
import { LoadingIcon } from './components/LoadingIcon';

const ProductEnquiry = () => {
  const [products, setProducts] = useState([]);
  const [showCaseProducts, setShowCaseProducts] = useState([])
	const [loading, setLoading] = useState(true);
  
  useEffect(() => {
		const fetchProducts = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, "products"));
				const items = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setProducts(items);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching products: ", error);
			}
		};

		fetchProducts();
	}, []);

  useEffect(() => {
		if (products?.length > 0) {
			setShowCaseProducts(
				products?.filter((item) => item.category === "advert")
			);
		}
	}, [products]);

  return (
    <Container style={{marginTop:"12%"}}>
      <h1 className="text-center mb-4">Show Cases</h1>
      <Row>
        {loading ? <LoadingIcon size={40} /> : showCaseProducts?.map((product) => (
          <Col xs={12} md={4} lg={3} className="mb-4" key={product.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
              <Card.Body>
                <Card.Title className="text-center">{product.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductEnquiry;
