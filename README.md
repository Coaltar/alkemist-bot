
# alkemist-bot

## Overview

A simple discord bot made using discordjos. Essentially a fork of a demo project found here: https://github.com/discordjs/guide

Tutorial for this project can be found here:
https://discordjs.guide/


## Key differences

This bot runs in docker! (*optional*)
Sample config is in src/config.json.template, add your own variables!

Scripts for flash commands are broken into two separate folders:
- commands: published globally
- dev_commands: published only to the guild specified under guildId (check the config template)
