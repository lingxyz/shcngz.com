const cheerio = require("cheerio")
const request = require("sync-request")

/**
 * 公告列表 关键词过滤并推送
 */
const body = request('GET', 'https://shcngz.com/pages/news_list.aspx?mid=29').getBody().toString()
let $ = cheerio.load(body)
$('.news_list_ul li span').each((i, element) => {
  let text = $(element).text()
  // if (text.includes('晨和公寓')) {
  if (text.includes('国庆放假')) {
    // 推送
    console.log(text)

  }
});