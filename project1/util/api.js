let baseUrl = 'http://127.0.0.1:3000/';
const token = uni.getStorageSync('token')?uni.getStorageSync('token'):'';
export const api = (options) =>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl + options.url,
			method:options.method || 'GET',
			header:{Authorization:token},
			data:options.data || {},
			success:(res) =>{
				resolve(res)
			},
			fail:(err)=>{
				reject(err)
			}
		})

	})
}