import { memo, useEffect, useState } from 'react'

function FavoriteButton() {
	const [isFavorite, setIsFavorite] = useState(false)
	useEffect(() => {
		console.log('Состояние изменилось!')
	}, [isFavorite])
	return (
        <button className="btn" onClick={() => setIsFavorite(!isFavorite)}>
			{isFavorite ? '❤️' : '🤍'}
		</button>
	)
}
export default memo(FavoriteButton)