const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class StatusCommand extends BaseCommand {
  constructor() {
    super('members', 'util', []);
  }

  run(client, message, args) {
    client.guilds.cache.forEach((guild) => {
        message.channel.send(
            `${guild.name} has a total of ${guild.memberCount} members`
        )
    })
}
}