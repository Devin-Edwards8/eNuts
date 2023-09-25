module.exports = {
  apps: [{
    name: 'client',
    script: 'serve dist',
    cwd: '/client/'
  },
  {
    name: 'server',
    script: 'npm start'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-140-151-153.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/devKey.pem',
      ref: 'origin/main',
      repo: 'https://github.com/Devin-Edwards8/eNuts.git',
      path: '/home/ubuntu/eNuts',
      'post-deploy': 'npm install && pm2 restart ecosystem.config.cjs && pm2 save && cd client && npm install && npm run build'
    }
  }
}