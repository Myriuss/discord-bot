const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder()
        .setName("exit")
        .setDescription("ikhroj iqawed"),
	execute: async ({ client, interaction }) => {

        // Get the current queue
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue)
		{
			await interaction.reply("Makayn walo a zebi")
			return;
		}

        // Deletes all the songs from the queue and exits the channel
		queue.destroy();

        await interaction.reply("Hahouwa mcha ")
	},
}