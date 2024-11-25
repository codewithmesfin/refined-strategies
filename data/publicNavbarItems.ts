import NAV_ITEMS from "./navInterface"


const publicNavitems: Array<NAV_ITEMS> = [
    {
        title: "About",
        href: "/about",
        children: [
            {
                title: "Mission & Vision",
                href: "/mission-vision"
            },
            {
                title: "Our People",
                href: "/our-people"
            }
        ]
    },
    {
        title: "Why us ?",
        href: "/whyus"
    },
    {
        title: "Start Learning",
        href: "/start-learning"
    },
    {
        title: "Get in touch",
        href: "/contact"
    }
]



export default publicNavitems