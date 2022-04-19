import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState} from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Product = ({title, basePrice, colors, name, sizes}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    const found = sizes.find(element => element.name === currentSize)
    return basePrice + found.additionalPrice;
  };

  const handleSubmit = e => {
    e.preventDefault();
   
    console.log('logo: ' + title) 
    console.log('size: ' + currentSize)
    console.log('color: ' + currentColor)
    console.log('price: ' + getPrice())
  }


  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          colors={currentColor}
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form  onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}> 
                  {sizes.map(size => <li key={shortid()}><button type="button" onClick={() => setCurrentSize(size.name)} className={clsx(currentSize === size.name && styles.active)}>{size.name}</button></li>)}
            </ul> 
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {colors.map(color => 
                <li key={shortid()}>
                  <button type="button" onClick={() => setCurrentColor(color)} className={clsx(prepareColorClassName(color), currentColor === color && styles.active)} />
                </li>
              )}
              
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};
Product.propTypes= {
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  getPrice: PropTypes.func
};


export default Product;