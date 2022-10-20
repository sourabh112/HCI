import  {Component} from 'react';
import React from 'react'
import Header from '../../components/header/headerview';
import ShoppingCart from '../../components/shoppingcart/shoppingcartview';
import HomeBanner from "../../components/HomeBanner/index.js";
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.png'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';



import './homescreenstyle.css'

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowSidebar: true,
			isShowShoppingCart: false,
			products: {},
			cart: {},
			totalCartItem: 0
		}
	}

	toggleSidebar = () => {
		this.setState({isShowSidebar: !this.state.isShowSidebar});
	}

	toggleShoppingCart = () => {
		this.setState({isShowShoppingCart: !this.state.isShowShoppingCart});
	}

	productSuccessHandler = (products) => {
		this.setState({products: products});
	}

	erorHandler = (error) => {console.error(error)} //TODO:show error right below of header

	getCategoryId = (props) => {
		return props.match ? props.match.params.categoryId : null;
	}

	getProductEndpoint = (searchKeyword) => {
		// let categoryId = this.getCategoryId(this.props);
		// let endPoint = ApiEndpoints.PRODUCT_URL;
		// if (searchKeyword) {
		// 	return endPoint + '?'+ QueryParam.SEARCH + '=' + searchKeyword;
		// }
		// if (categoryId) {
		// 	return endPoint + '?'+ QueryParam.CATEGORY_ID + '=' + categoryId;
		// }
		// return endPoint;
	}

	fetchProducts = (searchKeyword=null) => {
		// ApiConnector.sendRequest(
		// 	this.getProductEndpoint(searchKeyword),
		// 	this.productSuccessHandler,
		// 	this.erorHandler
		// );
	}

	componentDidUpdate(prevProps) {
		let catId = this.getCategoryId(this.props);
		let prevCatId = this.getCategoryId(prevProps);
		if (catId !== prevCatId) {
			this.fetchProducts();
		}
	}

	componentDidMount() {
		this.fetchProducts();
	}

	productSearchHandler = (searchKeyword) => {
		this.fetchProducts(searchKeyword);
	}

	getTotalCartItem = () => {
		return Object.values(this.state.cart).length;
	}

	addToCartHandler = (product) => {
		let cart = this.state.cart;
		cart[product.id] = {product: product, quantity: 1};
		this.setState({cart: cart, totalCartItem: this.getTotalCartItem()});
	}

	setProductQuantityToCart = (productId, quantity) => {
		let cart = this.state.cart;
		cart[productId].quantity = quantity;
		this.setState({cart: cart});
	}

	productRemoveHandler = (productId) => {
		let cart = this.state.cart;
		delete cart[productId];
		this.setState({cart: cart, totalCartItem: this.getTotalCartItem()});
	}
	render() {
		return (
			<React.Fragment>
				<Header
					toggleSidebar={this.toggleSidebar}
					toggleShoppingCart={this.toggleShoppingCart}
					totalCartItem={this.state.totalCartItem}
					productSearchHandler={this.productSearchHandler}
				/>
				<div id='bodyContainer' style={{marginTop:`54px`} }>
				<HomeBanner />
					<ShoppingCart
						isShowShoppingCart={this.state.isShowShoppingCart}
						cart={this.state.cart}
						products={this.state.products.products}
						setProductQuantityToCart={this.setProductQuantityToCart}
						productRemoveHandler={this.productRemoveHandler}
					/>
				</div>
				<div>
					<h1 style={{
						margin:'30px',
						fontFamily: 'sans-serif',
						fontWeight: '550'
					}}>Latest products</h1>

				</div>
				<div class="cardmajor">
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img1} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Donut:    </h3>
					<h3 class="texthead" style={{marginLeft: `192px`}}>12$</h3>
					</div>
					<p class="textdis">A doughnut or donut is a type of food made from leavened fried dough. 
						It is popular in many countries and is prepared in various forms as a sweet snack.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div>
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img2} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Cheesecake:   </h3>
					<h3 class="texthead" style={{marginLeft: `122px`}}>20$</h3>
					</div>
					<p class="textdis">Cheesecake is a sweet dessert consisting of one or more layers. 
						The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div>
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img3} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Lava cake: </h3>
					<h3 class="texthead" style={{marginLeft: `147px`}}>20$</h3>
					</div>
					<p class="textdis">Molten chocolate cake is a dessert that consists of a chocolate cake
						with a liquid chocolate core. It is named for that molten center,and it is also known as chocolate coulant.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div> 
				
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img1} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Donut:    </h3>
					<h3 class="texthead" style={{marginLeft: `192px`}}>12$</h3>
					</div>
					<p class="textdis">A doughnut or donut is a type of food made from leavened fried dough. 
						It is popular in many countries and is prepared in various forms as a sweet snack.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px`}}></i>
						Add to Cart
					</button>
				</a>
				</div>
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img2} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Cheesecake:   </h3>
					<h3 class="texthead" style={{marginLeft: `122px`}}>20$</h3>
					</div>
					<p class="textdis">Cheesecake is a sweet dessert consisting of one or more layers. 
						The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px`}}></i>
						Add to Cart
					</button>
				</a>
				</div>
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img3} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Lava cake: </h3>
					<h3 class="texthead" style={{marginLeft: `147px`}}>20$</h3>
					</div>
					<p class="textdis">Molten chocolate cake is a dessert that consists of a chocolate cake
						with a liquid chocolate core. It is named for that molten center,and it is also known as chocolate coulant.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div> 
				</div>
				<div>
					<h1 style={{
						margin:'30px',
						fontFamily: 'sans-serif',
						fontWeight: '550'
					}}>Top Releases</h1>

				</div>
				<div class="cardmajor">
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img1} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Donut:    </h3>
					<h3 class="texthead" style={{marginLeft: `192px`}}>12$</h3>
					</div>
					<p class="textdis">A doughnut or donut is a type of food made from leavened fried dough. 
						It is popular in many countries and is prepared in various forms as a sweet snack.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div>
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img2} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Cheesecake:   </h3>
					<h3 class="texthead" style={{marginLeft: `122px`}}>20$</h3>
					</div>
					<p class="textdis">Cheesecake is a sweet dessert consisting of one or more layers. 
						The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div>
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img3} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Lava cake: </h3>
					<h3 class="texthead" style={{marginLeft: `147px`}}>20$</h3>
					</div>
					<p class="textdis">Molten chocolate cake is a dessert that consists of a chocolate cake
						with a liquid chocolate core. It is named for that molten center,and it is also known as chocolate coulant.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div> 
				
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img1} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Donut:    </h3>
					<h3 class="texthead" style={{marginLeft: `192px`}}>12$</h3>
					</div>
					<p class="textdis">A doughnut or donut is a type of food made from leavened fried dough. 
						It is popular in many countries and is prepared in various forms as a sweet snack.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div>
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img2} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Cheesecake:   </h3>
					<h3 class="texthead" style={{marginLeft: `122px`}}>20$</h3>
					</div>
					<p class="textdis">Cheesecake is a sweet dessert consisting of one or more layers. 
						The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div>
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img3} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Lava cake: </h3>
					<h3 class="texthead" style={{marginLeft: `147px`}}>20$</h3>
					</div>
					<p class="textdis">Molten chocolate cake is a dessert that consists of a chocolate cake
						with a liquid chocolate core. It is named for that molten center,and it is also known as chocolate coulant.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div> 
				</div>
				
				<div>
					<h1 style={{
						margin:'30px',
						fontFamily: 'sans-serif',
						fontWeight: '550'
					}}>Latest products</h1>

				</div>
				<div class="cardmajor">
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img1} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Donut:    </h3>
					<h3 class="texthead" style={{marginLeft: `192px`}}>12$</h3>
					</div>
					<p class="textdis">A doughnut or donut is a type of food made from leavened fried dough. 
						It is popular in many countries and is prepared in various forms as a sweet snack.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div>
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img2} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Cheesecake:   </h3>
					<h3 class="texthead" style={{marginLeft: `122px`}}>20$</h3>
					</div>
					<p class="textdis">Cheesecake is a sweet dessert consisting of one or more layers. 
						The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div>
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img3} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Lava cake: </h3>
					<h3 class="texthead" style={{marginLeft: `147px`}}>20$</h3>
					</div>
					<p class="textdis">Molten chocolate cake is a dessert that consists of a chocolate cake
						with a liquid chocolate core. It is named for that molten center,and it is also known as chocolate coulant.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div> 
				
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img1} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Donut:    </h3>
					<h3 class="texthead" style={{marginLeft: `192px`}}>12$</h3>
					</div>
					<p class="textdis">A doughnut or donut is a type of food made from leavened fried dough. 
						It is popular in many countries and is prepared in various forms as a sweet snack.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div>
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img2} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Cheesecake:   </h3>
					<h3 class="texthead" style={{marginLeft: `122px`}}>20$</h3>
					</div>
					<p class="textdis">Cheesecake is a sweet dessert consisting of one or more layers. 
						The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div>
				<div  class="card1">
					<a href="./ppage/index.html">
					<img src={img3} class="imclass"/>
					<div class="text">
					<div style={{display:`flex`}}>
					<h3 class="texthead">Lava cake: </h3>
					<h3 class="texthead" style={{marginLeft: `147px`}}>20$</h3>
					</div>
					<p class="textdis">Molten chocolate cake is a dessert that consists of a chocolate cake
						with a liquid chocolate core. It is named for that molten center,and it is also known as chocolate coulant.</p>
					</div>
					<button style={{marginLeft:`100px`,
					 marginBottom:`20px`,
						 padding: `10px`}} type="button" class=" buto btn-outline-primary">
						<i class="fa fa-shopping-cart" style={{fontSize:`30px` }}></i>
						Add to Cart
					</button>
				</a>
				</div> 
				</div>
			</React.Fragment>
		);
	}
}