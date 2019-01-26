module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/overwatch-ui-doc/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                // @ -> /src
                data: `
                    @import "@/assets/styles/global.scss";
                    @import "@/assets/styles/reset.scss";
                `
            }
        }
    }
}