import React, { useState } from 'react';
import Container from './components/UI/Container/Container';
import Products from './components/Products/Products';
import Search from './components/Search/Search';


function App({ data }) {

  const [products, setProducts] = useState(data);
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="wrapper">
      <section className="section section--primary-bg box-shadow">
        <Container>
          <Search
            value={searchInput}
            setValue={setSearchInput}
            setProducts={setProducts}
          />
          <h3 className="section__sub-heading">{data.length} BEST</h3>
          <h2 className="section__heading">Products</h2>
        </Container>
      </section>
      <section className="section">
        <Container>
          <Products products={products} />
        </Container>
      </section>
    </div>
  );
}

export default App;
