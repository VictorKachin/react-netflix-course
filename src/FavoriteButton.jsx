import { useEffect, useState } from 'react'

export function FavoriteButton() {
	const [isFavorite, setIsFavorite] = useState(false)
	useEffect(() => {
		console.log('Состояние изменилось!')
	}, [isFavorite])
	return (
		<button onClick={() => setIsFavorite(!isFavorite)}>
			{isFavorite ? '❤️' : '🤍'}
		</button>
	)
}

// https://www.youtube.com/watch?v=UC2vnwCY4T4
// 29:04
