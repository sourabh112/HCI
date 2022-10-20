import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchForm from '../form/searchform/searchformview';
import './headerstyle.css';
import image1 from '../../assets/images/icon.png'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default class Header extends Component {
	state = {
		isOpen: false
	};
	openModal = () => this.setState({ isOpen: true });
	closeModal = () => this.setState({ isOpen: false });
  
	render() {
		return (
			<div id='headerContainer'>
				<div id='logo'><Link to='/'>AMAKART</Link></div>
				<div id='headerSearchFormContainer' style={{marginLeft:`90px`}}>
					<SearchForm
						productSearchHandler={this.props.productSearchHandler}
					/>
				</div>
				<div id='headerCartIcon'>
				<div id='cartIconContainer'>
						<i
							onClick={this.props.toggleShoppingCart}
							id='cartIcon'
							className='fa fa-shopping-cart'
						></i>
						<span id='cartCounter'>{this.props.totalCartItem}</span>
					</div>
				</div>
				<div id='headerCartIcon'>
				<div id='cartIconContainer'>
						<img src = {image1} style={{height:`45px`}}/>
					</div>
				</div>
				<div id='signIn' onClick={this.openModal} style={{height:`40px`,width:`30px`,borderRadius:`5%`,margin:`5px`}}>SIGN IN</div>
				<Modal show={this.state.isOpen} onHide={this.closeModal}>
					<Modal.Header closeButton>
					</Modal.Header>
					<Modal.Body>   
						     
						<div className="text-center m-5-auto">
						<h2>Sign in to us</h2>
						<form className='form' action="/home">
							<p>
								<label className='label'>Username or email address</label><br/>
								<input className='input' type="text" name="first_name" required />
							</p>
							<p>
								<label className='label'>Password</label>
								<Link to="/forget-password"><label className="label right-label">Forget password?</label></Link>
								<br/>
								<input className='input' type="password" name="password" required />
							</p>
							<p>
								<button id="sub_btn" type="submit">Login</button>
							</p>
						</form>
						<footer style={{marginBottom:`20px`}}>
							<p>First time? <Link to="/register">Create an account</Link>.</p>
						</footer>
					</div>
		</Modal.Body>
				</Modal>
			</div>
		);
	}
}