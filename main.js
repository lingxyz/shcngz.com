const schedule = require('./lib/schedule')
const news_list = require('./news_list')

/**
 * 入口文件（主逻辑）
 */

// 每天9点推送公告·关键词过滤结果
// 每天9:00跑job原因（网站开放登录时间为9点）
const cron = '0 0 9 * * *'
// const cron = '* * * * * *'
schedule(cron, news_list)
