module.exports = member => {
  const channel = member.guild.channels.find('name', 'log');
  if (!channel) return;
  channel.send(`**📥 |** ${member} **Sunucuya giriş yaptı Hoşgeldin!**`);
};

