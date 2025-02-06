// Counter.tsx

import { useState, useEffect } from 'react'
import logo from '../assets/se_logo.png'

interface CounterProps {
	alt: string
	title: string
	minus: string
	plus: string
}

export default function Counter({ alt, title, minus, plus }: CounterProps) {
	const [quantity, setQuantity] = useState(1)

	const decreaseQuantity = () => {
		setQuantity(prev => Math.max(1, prev - 1))
	}

	const increaseQuantity = () => {
		setQuantity(prev => prev + 1)
	}

	useEffect(() => {
		const minusIcon = document.querySelector('.minus')
		if (quantity === 1) {
			minusIcon?.classList.add('gray')
		} else {
			minusIcon?.classList.remove('gray')
		}
	}, [quantity])

	return (
		<div className="container">
			<header>
				<img className="logo" src={logo} alt={alt} />
				<h1 className="counter-title">{title}</h1>
			</header>
			<div className="counter-wrapper">
				<div className="minus counter-icon" onClick={() => decreaseQuantity()}>
					<i className={minus}></i>
				</div>
				<div className="input">
					<input name="quantity" value={quantity} type="number" readOnly />
				</div>
				<div className="plus counter-icon" onClick={() => increaseQuantity()}>
					<i className={plus}></i>
				</div>
			</div>
		</div>
	)
}
