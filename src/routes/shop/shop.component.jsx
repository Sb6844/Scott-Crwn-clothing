import { useContext } from "react";
import './shop.styles.scss';
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {

    const { currentProducts } = useContext(ProductsContext);
    return (
        <div className="products-container">
            {currentProducts.map((product) => (
               <ProductCard product={product} key={product.id}></ProductCard>
            ))}
        </div>
    )
}

export default Shop;