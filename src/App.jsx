import { useEffect, useState } from 'react'

import MainDetail from './components/MainDetail'

import SideListItem from './components/SideListItem'
import { getCripto, getNewsList } from './constants'

function App() {
	// This piece of state keeps the id from the selected coin to be displayed in the MainDetail component
	const [selectedCripto, setSelectedCripto] = useState(null)
	const [criptoList, setCriptoList] = useState([])
	const [newsList, setNewsList] = useState([])

	useEffect(() => {
		getCripto().then(setCriptoList)
		getNewsList().then(data => {
			setNewsList(data['status_updates'])
		})
	}, [])

	// This function gives you whether a coin has been selected or not
	// You will need this for the SideListItem component
	function isSelectedCripto(id) {
		return selectedCripto === id
	}

	return (
		/* These (<> </>) are called React Fragments, and allow us to return more than one top element */
		<>
			<aside className="side-list">
				<ul>
					{criptoList.map(item => (
						<SideListItem
							key={item.id}
							item={item}
							selectCripto={setSelectedCripto}
							isSelectedCripto={isSelectedCripto}
						/>
					))}
				</ul>
			</aside>
			<main className="main-detail">
				{selectedCripto ? <MainDetail /> : 'Select a coin bro!'}
				{/* News feed component needs to go here */}
			</main>
		</>
	)
}

export default App
