import { useEffect } from "react"
import { request } from "../service/request"
import { useState } from "react"

export function useRequest(url, firstLoad = true) {
	const [stateLoading, setStateLoading] = useState()
	const [data, setData] = useState([])

	useEffect(() => {
		if (firstLoad) {
			;(async () => {
				console.log("запрос")
				setStateLoading(true)

				try {
					const response = await request(url)
					setData(response)
				} catch (error) {
					console.log(error)
				} finally {
					setStateLoading(false)
				}
			})()
		}
	}, [url])

	return { stateLoading, data }
}
