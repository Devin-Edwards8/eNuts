module.exports = {
  apps: [{
    name: 'client',
    script: 'serve dist',
    cwd: '/client/'
  },
  {
    name: 'server',
    script: 'npm start',
    env: {
      PORT: 8080,
      ATLAS_URI: "mongodb+srv://enutsadmin:R1x5NRMcpW5l5ujb@cluster0.cpim715.mongodb.net/?retryWrites=true&w=majority"
    }
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-140-151-153.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/deploy.key',
      ref: 'origin/main',
      repo: 'https://github.com/Devin-Edwards8/eNuts.git',
      path: '/home/ubuntu/eNuts',
      'pre-setup': 'rm -rf eNuts',
      'post-deploy': 'npm install && cd client && npm install && npm run build && cd .. && pm2 restart ecosystem.config.cjs && pm2 save'
    }

  }
}