function SideListItem({ isSelectedCripto, selectCripto, item: { id, name } }) {
	// const { id, name } = item
	return (
		<li>
			<button
				className={isSelectedCripto(id) ? 'selected' : ''}
				onClick={() => selectCripto(id)}
			>
				{name}
			</button>
		</li>
	)
}

export default SideListItem
