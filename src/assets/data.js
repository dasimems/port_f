import Logo from "./images/logo.png"
import AppOne from "./images/app_1.png"
import AppTwo from "./images/app_2.png"
import {BsUiRadios, BsUiChecks, BsPatchCheck } from "react-icons/bs"
import { BiCodeAlt, BiLineChart} from "react-icons/bi"
import { AiFillAndroid} from "react-icons/ai"
import { TbWorld} from "react-icons/tb"
import { MdPhotoLibrary} from "react-icons/md"
import Boost from "./icons/arcticons_boost.svg"
import Stat from "./images/stats.png"
import ProfileImage from "./images/profile_pic.png"
import ProfileImageOne from "./images/profile_pic_1.png"
import ProfileImageTwo from "./images/profile_pic_2.png"

export const routeName = {
    home: "",
    about: "about",
    contact: "contact",
    blog: "blog",
    services: "services",
    works: "works"
}

export const contactDetails = {
    facebook: "",
    instagram: "",
    twitter: "",
    location: "455 West Orchard Street Kings Mountain, NC 28086",
    phoneNumberOne: "(272) 211-7370",
    phoneNumberTwo: "(524) 386-5730",
    email: "support@yourbrand.com",
    linkedIn: "",
    whatsapp: ""
}

export const stats = [
    {
        number: 126,
        description: "Mobile app completed"
    },

    {
        number: 98,
        description: "Happy Customers"
    },

    {
        number: 176,
        description: "App version"
    },

    {
        number: 16,
        description: "Award Win"
    }
]

export const team = [
    {
        name: "Fletch Skinner",
        skills: "Product Strategist",
        image: ProfileImageTwo
    },

    {
        name: "Lance Bogrol",
        skills: "Visual Designer",
        image: ProfileImage
    },

    {
        name: "Valentino Morose",
        skills: "App Developer",
        image: ProfileImageOne
    }
]

export const images = {
    logo: {
        image: Logo,
        alt: ""
    },

    appOne: {
        image: AppOne,
        alt: ""
    },

    appTwo: {
        image: AppTwo,
        alt: ""
    },

    stat: {
        image: Stat,
        alt: ""
    }
}

export const about = [
    {
        title: "Design and UX that ensures your app will be loved and used",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

     {
        title: "Enterprise-grade development secures reliability and quality",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

     {
        title: "A proven and tested process guarantees your success",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

     {
        title: "Start-to-end app development agency",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

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

export const reasons = [
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

export const services = [
    {
        service: "Mobile and App Development",
        icon: <AiFillAndroid />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        background: false
    },

     {
        service: "Web Development",
        icon: <TbWorld />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        background: true
    },

     {
        service: "Design and User Experience",
        icon: <BsUiRadios />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        background: false
    },

     {
        service: "Maintenance and App Monitoring",
        icon: <BiLineChart />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        background: false
    },

     {
        service: "User Definition and Profiling",
        icon: <BsPatchCheck />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        background: false
    },

     {
        service: "Graphic Assets for App Store",
        icon: <MdPhotoLibrary />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        background: false
    }
]

export const bannerList = [
    {
        title: "App Development",
        icon: <AiFillAndroid />
    },

    {
        title: "Web Development",
        icon: <TbWorld />
    },

    {
        title: "UI/UX Design",
        icon: <BsUiRadios />
    }
]