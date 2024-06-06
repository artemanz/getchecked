export const handlePageScroll = (enabled: boolean) => {
  if (!enabled) {
    // document.body.style.paddingRight =
    //   window.innerWidth - document.documentElement.clientWidth + "px"
    document.documentElement.style.overflowY = "hidden"
  } else {
    document.documentElement.style.overflowY = ""
    // document.body.style.paddingRight = ""
  }
}
