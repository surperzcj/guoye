/*
 * @Descripttion: 表格数据加载插件
 * @version: 
 * @Author: ChenTao   <1056416465@qq.com>
 * @Date: 2020-02-20 13:37:32
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-05-09 17:28:07
 */
import HttpUtils from './http'
class Https {
  newdetails = (params) => HttpUtils.post('/news-details', params) //新闻详情
  news = (params) => HttpUtils.post('/news', params) //新闻列表
  recruitmentlist = (params) => HttpUtils.post('/recruitment-list', params) //招聘列表

}
export default new Https()
