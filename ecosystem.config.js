module.exports = {
    apps: [
        {
            name: 'CHOAM-TERMINAL-bot',
            script: './build/src/index.js',
            node_args: '-r dotenv/config',
        },
    ],
};