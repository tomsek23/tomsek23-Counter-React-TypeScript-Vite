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
	const [direction, setDirection] = useState<'up' | 'down'>('up')

	const updateQuantity = (change: number) => {
		setDirection(change > 0 ? 'up' : 'down')
		setQuantity(prev => Math.max(1, prev + change))
	}

	useEffect(() => {
		const timer = setTimeout(() => setDirection('up'), 300)
		return () => clearTimeout(timer)
	}, [quantity])

	return (
		<div className="container">
			<header>
				<img className="logo" src={logo} alt={alt} />
				<h1 className="counter-title">{title}</h1>
			</header>
			<div className="counter-wrapper">
				<div className={`minus counter-icon ${quantity === 1 ? 'gray' : ''}`} onClick={() => updateQuantity(-1)}>
					<i className={minus}></i>
				</div>
				<div className="input">
					<div className="counter-value">
						<span key={quantity} className={`animated-number ${direction === 'up' ? 'slide-up' : 'slide-down'}`}>
							{quantity}
						</span>
					</div>
				</div>
				<div className="plus counter-icon" onClick={() => updateQuantity(1)}>
					<i className={plus}></i>
				</div>
			</div>
		</div>
	)
}
