module.exports = {
  apps: [
    {
      name: 'crafty-q',
      script: 'node_modules/.bin/next',
      args: 'start -p 3225',
      cwd: '/var/www/crafty-q',
      exec_mode: 'fork',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        PORT: 3225,
      },
    },
  ],
}
