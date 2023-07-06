import ItemOnceHeader from "../ItemOnceHeader/ItemOnceHeader"
import List from "../List/List"

export default function ProfileCard({ id, name, avatar, details = {} }) {
	return (
		<div className="profile-card">
			{id ? (
				<>
					<img src={avatar} alt="" className="profile-card__avatar" />
					<h2 className="profile-card__name">{name}</h2>
					<List>
						<ItemOnceHeader id={id} header={`City: ${details.city}`} onRequest={() => {}} className={"item-once-header"} />
						<ItemOnceHeader id={id} header={`Company: ${details.company}`} onRequest={() => {}} className={"item-once-header"} />
						<ItemOnceHeader id={id} header={`Position: ${details.position}`} onRequest={() => {}} className={"item-once-header"} />
					</List>
				</>
			) : (
				<></>
			)}
		</div>
	)
}
