const schedule = require('node-schedule');

// 定时任务二次封装
module.exports = function(cron, cb) {
  schedule.scheduleJob(cron, () => {
    cb()
    console.log(`${new Date().toLocaleString()}: schedule execute at ${cron}`);
  });
}