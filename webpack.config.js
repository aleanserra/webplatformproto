const path = require('path');

module.exports = {
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src/app/'),
      libraries: path.resolve(__dirname, 'src/libraries/'),
      components: path.resolve(__dirname, 'src/app/components/'),
      context: path.resolve(__dirname, 'src/app/context/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      ui: path.resolve(__dirname, 'src/ui/'),
      img: path.resolve(__dirname, 'src/assets/img/')
    },
    extensions: ['.tsx', '.ts', '.js', '.scss', '.png', '.svg', '.jpg', '.jpeg', '.gif'],
    mainFields: ['main', 'module', 'browser']
  }
}
