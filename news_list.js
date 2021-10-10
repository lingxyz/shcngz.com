const cheerio = require("cheerio")
const request = require("sync-request")

/**
 * 公告列表 关键词过滤并推送
 */
module.exports = function() {
  const body = request('GET', 'https://shcngz.com/pages/news_list.aspx?mid=29').getBody().toString()
  let $ = cheerio.load(body)
  $('.news_list_ul li span').each((i, element) => {
    let text = $(element).text()
    if (text.includes('晨和公寓')) {
    // if (text.includes('国庆放假')) {
      // 推送，todo 接入WxPusher
      console.log(text)

    }
  });
}

// todo 定时任务，每天9:00跑（网站开放登录时间为9点）。若命中关键词推送/全部推送
// todo 登录，查看当前排队信息。若信息变化推送/全部推送
// todo 捡漏推送