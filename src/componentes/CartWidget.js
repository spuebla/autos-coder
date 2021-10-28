import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartWidget (){
    return (
        <div className="CartWidget" style={{color:'white'}}>
        <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
    );
}
export default CartWidget;