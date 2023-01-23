const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply('pong!');
  },
};



// new SlashCommandBuilder()
//   .setName('uwu')
//   .setDescription('Replies with uwu~');
