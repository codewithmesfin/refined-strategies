import NAV_ITEMS from "./navInterface"


const publicNavitems: Array<NAV_ITEMS> = [
    {
        title: "About",
        href: "/mission-vision",
        children: [
            {
                title: "Mission & Vision",
                href: "/mission-vision"
            },
            {
                title: "Our People",
                href: "/our-people"
            }
        ],
    },
    {
        title: "Why us ?",
        href: "/whyus"
    },
    {
        title: "Start Learning",
        href: "https://i-learn.et"
    },
    {
        title: "Get in touch",
        href: "https://i-learn.et/contact"
    }
]



export default publicNavitems