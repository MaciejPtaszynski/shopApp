import styles from './ProductForm.module.scss';
import Button from '../../../Button/Button';
import OptionSize from './OptionSize/OptionSize.js';
import OptionColor from './OptionColor/OptionColor.js';
import PropTypes from 'prop-types';


const ProductForm = ({handleSubmit, sizes, currentSize, setCurrentSize, colors, currentColor, setCurrentColor}) => {

    return (
        <form onSubmit={handleSubmit}>
          <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
          <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    );
};

ProductForm.propTypes={
    handleSubmit: PropTypes.func
    //sizes: PropTypes.array.isRequired,
    //colors: PropTypes.array.isRequired,
    
};

export default ProductForm;