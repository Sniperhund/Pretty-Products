import { FaHeart, FaRegHeart } from "react-icons/fa6"

export const HeartDisplay = ({ favorited = false, onFavorite, className }) => {
	// TODO: Make dark mode compat

	const toggleFavorite = () => {
		if (!onFavorite) return

		onFavorite()
	}

	return (
		<div className={className} onClick={toggleFavorite}>
			{favorited ? <FaHeart /> : <FaRegHeart />}
		</div>
	)
}
