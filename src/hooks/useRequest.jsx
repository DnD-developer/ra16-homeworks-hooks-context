import { useEffect } from "react"
import { request } from "../service/request"
import { useState } from "react"

export function useRequest(url) {
	const [stateLoading, setStateLoading] = useState()
	const [data, setData] = useState([])

	useEffect(() => {
		;(async () => {
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
	}, [url])

	return { stateLoading, data }
}
