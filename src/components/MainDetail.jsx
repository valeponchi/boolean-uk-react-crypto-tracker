import { useEffect, useState } from 'react'
import { getCriptoUpdateUrl } from '../constants'

// This function give us the current time in seconds
function getCurrentTime() {
	return Math.round(Date.now() / 1000)
}

/*
  Use this function with the updated_at timestamp you get from each coin item in the API response
 */
function convertToSeconds(dateValue) {
	// This guard is needed due to the API discrepancies in handling dates
	return typeof dateValue === 'string'
		? Math.round(Date.parse(dateValue) / 1000)
		: dateValue
}

function MainDetail({ selectedCriptoItem }) {
	const { name, symbol, last_updated, current_price } = selectedCriptoItem
	const [currentTime, setCurrentTime] = useState(getCurrentTime())

	const updatedTimeAgo = currentTime - convertToSeconds(last_updated)

	useEffect(() => {
		const intervalId = setInterval(() => setCurrentTime(getCurrentTime()), 1000)
		return () => clearInterval(intervalId)
	}, [])

	return (
		<section className="main-detail__central">
			<div className="main-detail__update">
				{/* This part is for the challenge */}
			</div>

			<div className="main-detail__name">
				<h2>{name}</h2>
				<p>
					<span className="small">a.k.a </span>
					{symbol}
				</p>
			</div>

			<div className="main-detail__price">
				<p>{current_price}</p>
				<p>Updated {updatedTimeAgo} seconds ago</p>
			</div>
		</section>
	)
}
export default MainDetail
