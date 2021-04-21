import ajax from './ajax'
// 根据经纬度获取位置详情
export const reqaddress = (geohash) => ajax(`/position/${geohash}`)
// 获取食品分类
export const reqfoodtypes = () => ajax('/index_category')
// 根据经纬度获取商家列表
export const reqshoplist = (longitude,latitude) => ajax('/shops',{longitude,latitude})
// export const reqaddress = () => ajax()
// export const reqaddress = () => ajax()
// export const reqaddress = () => ajax()
// export const reqaddress = () => ajax()
// export const reqaddress = () => ajax()
// export const reqaddress = () => ajax()
// export const reqaddress = () => ajax()
