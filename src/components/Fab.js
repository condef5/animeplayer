import React, { Component } from 'react'
import Modal from './Modal';
import './Fab.css'

import icon from '../assets/images/FB.png'

class Fab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isRotated: false
		};
	}

	togModal = () => {
		this.setState({ isOpen: !this.state.isOpen });
		this.fabRotation();
	};

	fabRotation = () => {
		let elem = document.querySelector(".fab");

		let turnTo = this.state.isRotated ? 0 : 45;
		elem.style.transform = `rotate(${turnTo}deg)`;

		this.setState({ isRotated: !this.state.isRotated });
	}

	render() {
		return (
			<div>
				<img src={icon} alt="" className="fab rotate" onClick={this.togModal} />

				<Modal show={this.state.isOpen}
					onClose={this.togModal} />
			</div>
		)
	}
}

export default Fab