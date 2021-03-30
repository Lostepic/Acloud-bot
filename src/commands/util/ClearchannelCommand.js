const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ClearchannelCommand extends BaseCommand {
  constructor() {
    super('clearchannel', 'util', ['cc']);
  }

  run(client, message, args) {
    if (message.member.hasPermission('ADMINISTRATOR')) {
        message.channel.messages.fetch().then((results) => {
            message.channel.bulkDelete(results)
        })
    }
}
}