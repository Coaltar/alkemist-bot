
const { SlashCommandBuilder } = require('discord.js');
const uwu = require('uwu-js');

const uwuifiy = (text) => {
  return uwu(text);
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('uwu')
    .setDescription(" :3 whats this~ ")
    .addStringOption(option =>
      option.setName('input')
        .setDescription(' text to modify ')
        .setRequired(true)),
  async execute(interaction) {
    // await interaction.reply('pong!');
    await interaction.deferReply();
    const inputString = interaction.options.getString('input');
    await interaction.editReply(uwuifiy(inputString));
  },
};



// new SlashCommandBuilder()
//   .setName('uwu')
//   .setDescription('Replies with uwu~');
