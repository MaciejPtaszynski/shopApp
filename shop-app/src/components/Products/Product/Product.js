import styles from './Product.module.scss';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Product = ({title, basePrice, colors, name, sizes}) => {

  const handleSubmit = e => {
    e.preventDefault();
   
    console.log('logo: ' + title) 
    console.log('size: ' + currentSize)
    console.log('color: ' + currentColor)
    console.log('price: ' + getPrice())
  }

  const [currentColor, setCurrentColor] = useState(colors[0]);

  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    const found = sizes.find(element => element.name === currentSize)
    return basePrice + found.additionalPrice;
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice} $</span>
        </header>
          <ProductForm handleSubmit={handleSubmit} price={getPrice} colors={colors} sizes={sizes} currentColor={currentColor} currentSize={currentSize} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize}/>
      </div>
    </article>
  )
};

Product.propTypes= {
  //basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  
};

export default Product;