import "./PreviusContent.css"

export default function PreviusContent({ data, load, error }) {
	const dataContent = error ? "Ошибка загрузки" : data

	return (
		<div className="previus-content">
			<p className="previus-content__text">{load ? "Загрузка" : dataContent.status}</p>
		</div>
	)
}
