import { SimpleBannerDark, SimpleBannerWhite } from "@/data"
import { SimpleBanner, FlatBanner } from "@/ui/banners"

const Banners = [
  {
    title: "Simple Banner Flag (White Theme)",
    component: <SimpleBanner mode='light' />,
    code: SimpleBannerWhite,
    id: 'simple-banner-with-flag-white-theme'
  },
  {
    title: "Simple Banner Flag (Dark Theme)",
    component: <SimpleBanner mode='dark' />,
    code: SimpleBannerDark,
    id: 'simple-banner-with-flag-dark-theme'
  },
  {
    title: "Flat Banner Flag (White Theme)",
    component: <FlatBanner mode='light' />,
    code: SimpleBannerDark,
    id: 'flat-banner-with-flag-white-theme'
  },
  {
    title: "Flat Banner Flag (Dark Theme)",
    component: <FlatBanner mode='dark' />,
    code: SimpleBannerDark,
    id: 'flat-banner-with-flag-dark-theme'
  },
]

export default Banners