import Logo from "./images/logo.png"

export const routeName = {
    home: "",
    about: "about",
    contact: "contact",
    blog: "blog",
    services: "services",
    works: "works"
}

export const images = {
    logo: {
        image: Logo,
        alt: ""
    }
}

export const headerLinks = [
    {
        link: routeName.home,
        linkName: "Home",
        bordered: false
    },

    {
        link: routeName.works,
        linkName: "Our Works",
        bordered: false
    },

    {
        link: routeName.about,
        linkName: "About Us",
        bordered: false
    },

    {
        link: routeName.services,
        linkName: "Services",
        bordered: false
    },

    {
        link: routeName.blog,
        linkName: "Blog",
        bordered: false
    },

    {
        link: routeName.contact,
        linkName: "Contact",
        bordered: true
    }
]