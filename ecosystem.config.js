/* eslint-disable prettier/prettier */
module.exports = {
    apps: [
        {
            name: 'CHOAM-TERMINAL-bot',
            script: './build/src/index.js',
            node_args: '-r dotenv/config',
        },
    ],
// eslint-disable-next-line prettier/prettier
};
