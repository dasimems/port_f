import Logo from "./images/logo.png"
import {BsUiRadios, BsUiChecks} from "react-icons/bs"
import { BiCodeAlt} from "react-icons/bi"
import Boost from "./icons/arcticons_boost.svg"

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

export const services = [
    {
        service: "Branding",
        icon: <img src={Boost} alt="" />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        background: false
    },

     {
        service: "User Experience",
        icon: <BsUiRadios />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        background: true
    },

     {
        service: "User Interface",
        icon: <BsUiChecks />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        background: false
    },

     {
        service: "Development",
        icon: <BiCodeAlt />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        background: false
    }
]