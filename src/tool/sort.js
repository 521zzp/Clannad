/*
 * 各种排序
 */
/*
 * 默认排序
 */



/*
 * 投资金额降序
 */
export const rankMD = (a, b) => {
	return b.total - a.total
}
/*
 * 投资金额升序
 */
export const rankMU = (a, b) => {
	return a.total - b.total
}
/*
 * 投资期限降序
 */
export const rankTD = (a, b) => {
	return b.day - a.day
}
/*
 * 投资期限升序
 */
export const rankTU = (a, b) => {
	return a.day - b.day
}
/*
 * 投资利率降序
 */
export const rankRD = (a, b) => {
	return b.rate - a.rate
}
/*
 * 投资利率升序
 */
export const rankRU = (a, b) => {
	return a.rate - b.rate
}