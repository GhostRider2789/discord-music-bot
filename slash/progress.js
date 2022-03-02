const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("progress")
        .setDescription("The progression of the current song being played"),
    run: async ({client, interaction}) => {
        const queue = client.player.getQueue(interaction.guildId)

        if (!queue) return await interaction.editReply("There's no songs in the queue lel")

        let bar = queue.createProgressBar({
			queue: false,
			length: 19,
		})

        const song = queue.current

        await interaction.editReply({
            embeds: [new MessageEmbed()
                .setThumbnail(song.thumbnail)
                .setDescription(`Currently playing [${song.title}](${song.url})\n\n` + bar)
            ],
        })
    },
}