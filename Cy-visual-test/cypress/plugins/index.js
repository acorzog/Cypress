const { addMatchImageSnapshotPlugin } = require('../../node_modules/cypress-image-snapshot/plugin')
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
}
