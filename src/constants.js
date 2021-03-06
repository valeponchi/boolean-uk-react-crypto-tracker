const API = 'https://api.coingecko.com/api/v3'

export const STATUS_UPDATES = `${API}/status_updates`
export const CRIPTO_LIST = `${API}/coins/markets?vs_currency=gbp`
export const getCriptoUpdateUrl = id =>
	`${API}/simple/price?ids=${id}&vs_currencies=gbp&include_last_updated_at=true`

export function getCripto() {
	return fetch(CRIPTO_LIST).then(resp => resp.json())
}

export function getNewsList() {
	return fetch(STATUS_UPDATES).then(response => response.json())
}
