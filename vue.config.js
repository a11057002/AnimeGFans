// const fs = require('fs')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer:{
    port: 8001,
    disableHostCheck: true,
    // https:{
    //   key:fs.readFileSync('../server/private.key'),
    //   cert:fs.readFileSync('../server/certificate.crt')
    // }
  },
}
