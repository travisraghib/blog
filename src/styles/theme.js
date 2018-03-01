const colors = require("./colors");

const theme = {
  navigator: {
    colors: {
      title: colors.grey100,
      header: colors.grey100,
      subTitle: colors.grey80,
      scrollTrack: colors.white,
      scrollThumb: colors.grey40,
      linkHover: colors.grey60,
      asideItemActiveBorder: colors.accent
    },
    sizes: {
      asideWidth: "19em",
      maxWidth: "56em"
    },
    backgrounds: {
      wrapper: colors.white,
      asideItemActive: colors.firstDark
    }
  },
  post: {
    colors: {
      author: colors.grey90,
      authorBorder: colors.grey40,
      bold: colors.grey100,
      blockquoteFrame: colors.grey40,
      copyright: colors.grey60,
      link: colors.grey70,
      linkHover: colors.grey60,
      meta: colors.grey100,
      metaBorder: colors.grey100,
      text: colors.grey100,
      title: colors.grey100,
      subTitle: colors.grey80
    },
    backgrounds: {
      wrapper: colors.white,
      meta: colors.white
    },
    sizes: {
      maxWidth: "50em"
    }
  },
  bottomBar: {
    colors: {
      link: colors.white,
      icon: colors.white
    },
    backgrounds: {
      wrapper: colors.grey60,
      icon: colors.grey100
    },
    sizes: {
      height: 30 //pixels
    }
  },
  topBar: {
    colors: {
      logo: colors.white,
      logoPost: colors.grey100,
      red : 'red'
    },
    backgrounds: {
      wrapper: colors.grey100,
      wrapperPost: colors.grey70,
      icon: colors.grey100
    },
    sizes: {
      height: 44 //pixels
    }
  },
  info: {
    colors: {
      text: colors.white,
      link: colors.white,
      linkHover: colors.grey40,
      btn: colors.grey100
    },
    backgrounds: {
      wrapper: colors.grey100,
      btn: colors.grey40
    },
    sizes: {
      maxWidth: "40em"
    }
  },
  mediaQueryTresholds: {
    XL: "65em",
    L: "49em",
    M: "37em",
    S: "28em",
    XS: "21em"
  }
};

export default theme;
