var notifier = require('node-notifier')
var random = require('lodash.random')
var moment = require('moment')
var schedule = require('node-schedule')

function scheduleNotification () {
  var nextTime = moment().add(random(10, 60), 'seconds').toDate()

  schedule.scheduleJob(nextTime, function () {
    notifier.notify({
      title: 'DAMN LOL',
      message: 'DAMN LOL',
      icon: './ikea.png',
      sound: true
    })

    scheduleNotification()
  })
}

scheduleNotification()
