import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // console.log(
  //   useSelector(store => {
  //     console.log(store);
  //   })
  // );
  //useSelector allows us to access our entire store state object.
  const { amount } = useSelector(store => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>a cart using redux</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
