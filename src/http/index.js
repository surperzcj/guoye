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
  home = (params) => HttpUtils.post('/home', params) //首页
  company_profiles = (params) => HttpUtils.post('/company-profiles', params) //公司简介
  performance = (params) => HttpUtils.post('/performance', params) //公司业绩
  commonality = (params) => HttpUtils.post('/commonality', params) //联系我们
  contact_us = (params) => HttpUtils.post('/contact-us', params) //联系我们
  recruitment_details = (params) => HttpUtils.post('/recruitment-details', params) //招聘详情
  employees_home = (params) => HttpUtils.post('/employees_home', params) //员工家园
 
  
}
export default new Https()
