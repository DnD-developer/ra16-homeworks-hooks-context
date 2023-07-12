import "./Previus.css"
import PreviusContent from "../../components/PreviusContent/PreviusContent"
import { useRequest } from "../../hooks/useRequest"

export default function Previus() {
	const url = "https://back-test-of01.onrender.com"

	const { data: dataOk, stateLoading: loadingOk, error: errorOk } = useRequest(`${url}/data`)
	const { data: dataLoad, stateLoading: loadingLoad, error: errorLoad } = useRequest(`${url}/loading`)
	const { data: dataError, stateLoading: loadingError, error: errorError } = useRequest(`${url}/error`)

	return (
		<div className="previus">
			<PreviusContent data={dataOk} load={loadingOk} error={errorOk} />
			<PreviusContent data={dataLoad} load={loadingLoad} error={errorLoad} />
			<PreviusContent data={dataError} load={loadingError} error={errorError} />
		</div>
	)
}
