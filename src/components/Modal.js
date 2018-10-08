import React, { Component } from 'react'
import './Modal.css'

class Modal extends Component {
	render() {

		if (!this.props.show) {
			return null;
		}

		return (
			<div className="modal-bg">
				<div className="modal-style">
					<p>Put the input fields here</p>
				</div>
			</div>
		)
	}
}

export default Modal
