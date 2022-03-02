const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("shuffle")
        .setDescription("Shuffles the songs in the queue"),
    run: async ({client, interaction}) => {
        const queue = client.player.getQueue(interaction.guildId)

        if (!queue) return await interaction.editReply("There's no songs in the queue lel")

        queue.shuffle()
        await interaction.editReply(`The queue of ${queue.tracks.length} has been shuffled :D`)
    },
}