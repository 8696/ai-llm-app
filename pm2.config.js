module.exports = {
  apps: [
    {
      script: 'dist-server/app.js',
      name: require('./package.json').name,
      // instances: require('os').cpus().length,
      instances: 1,
      env_production: {
        NODE_ENV: 'production',
        NODE_PM2: true,
        FEATURE_ENV: 'production'
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      out_file: './logs/pm2/log.log',
      error_file: './logs/pm2/error.log'
    }
  ]
};
