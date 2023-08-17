import {AiOutlineTable} from "react-icons/ai"
import {AiOutlineDashboard} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineContacts} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"


/* Start data to map on the side bar */
 export const SideData = [
    {
        icon: <AiOutlineHome size={30}/> ,
        title:"Home",
        link:"/home"
    },
    {
        icon:<AiOutlineTable size={30}/>,
        title:"Table",
        link:"/table"
    },
    {
        icon:<AiOutlineDashboard size={30}/>,
        title:"Dashboard",
        link:"/dashboard"
    },
    {
        icon:<AiOutlineMail size={30}/>,
        title:"Email",
        link:"/email"
    },
    {
        icon:<AiOutlineContacts size={30}/>,
        title:"Contact",
        link:"/contact"
    },

]
/* end data to map on the side bar */