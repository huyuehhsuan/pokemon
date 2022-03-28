module.exports = {
    css: {
        extract: false
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '/pokemon/' // test20200915 為 repo 名稱
        :
        '/'
}