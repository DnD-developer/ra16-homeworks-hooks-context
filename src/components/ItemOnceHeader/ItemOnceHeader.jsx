import "./ItemOnceHeader.css"
export default function ItemOnceHeader({ id, header, onRequest, className }) {
	const onRequestHandler = () => {
		onRequest(id)
	}
	return (
		<li className={className} onClick={onRequestHandler}>
			<h2 className="item-once-header__header">{header}</h2>
		</li>
	)
}
