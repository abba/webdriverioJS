export const gotoPage = () => {
    browser.url('/')
}

export const hasLogo = () => {
   return browser.isVisible(".BrandLogo-img")

}