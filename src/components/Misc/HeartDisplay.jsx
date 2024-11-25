import { FaHeart, FaRegHeart } from "react-icons/fa6"

export const HeartDisplay = ({ favorited = false, className }) => {
	// TODO: Make it possible to click the div and toggle if it's favorited or not

	return (
		<div className={className}>
			{favorited ? <FaHeart /> : <FaRegHeart />}
		</div>
	)
}
