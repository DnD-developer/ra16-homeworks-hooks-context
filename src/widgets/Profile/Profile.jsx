import "./Profile.css"
import List from "../../components/List/List"
import ItemOnceHeader from "../../components/ItemOnceHeader/ItemOnceHeader"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import { useRequest } from "../../hooks/useRequest"
import { useState } from "react"

export default function Profile() {
	const mainUrl = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
	const urlForCard = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/"

	const [activeId, setActiveId] = useState()
	const [allowRequest, setAllowRequest] = useState(false)
	const { stateLoading: manipulationLoader, data: manipulations } = useRequest(mainUrl)
	const { stateLoading: profileLoading, data: profileData } = useRequest(`${urlForCard}${activeId}.json`, allowRequest)

	const onRequest = id => {
		setActiveId(id)
		setAllowRequest(true)
	}

	return (
		<section className="profile">
			<div className="profile__manipulation">
				<List>
					{manipulationLoader ? <ItemOnceHeader header={"Загрузка"} key={1} id={1} className={"item-once-header"} /> : <></>}
					{manipulations.map(({ name, id }) => (
						<ItemOnceHeader
							header={name}
							key={id}
							id={id}
							onRequest={onRequest}
							className={activeId == id ? "item-once-header active" : "item-once-header"}
						/>
					))}
					<ItemOnceHeader header={"..."} key={0} id={0} className={"item-once-header"} onRequest={() => {}} />
				</List>
			</div>
			<div className="profile__content">
				{activeId ? (
					profileLoading ? (
						<ItemOnceHeader header={"Загрузка"} key={1} id={1} className={"item-once-header"} />
					) : (
						<ProfileCard {...profileData} />
					)
				) : (
					<></>
				)}
			</div>
		</section>
	)
}
