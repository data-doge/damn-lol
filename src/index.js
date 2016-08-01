var notifier = require('node-notifier')
var cron = require('node-cron')

notify()
cron.schedule('*/10 * * * * *', notify)

function notify () {
  notifier.notify({
    title: 'DAMN LOL',
    message: 'DAMN LOL',
    icon: './ikea.png'
  })
}
