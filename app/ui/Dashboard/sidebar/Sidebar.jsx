import Image from "next/image"
import Menulink from "./Menulink/Menulink"
import styles from "./sidebar.module.css"
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessageSquareDetail } from "react-icons/bi";


import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdErrorOutline,
  
  MdHelpCenter,
  MdOutlineSettings,
  MdLogout,
} from "react-icons/md";

const menuItems =[
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/Dashboard",
        icon: <MdDashboard  width="20" height="20"/>
      },
      {
        title: "Staff",
        path: "/Dashboard/Staff",
        icon: <MdSupervisedUserCircle width="20" height="20"/>
      },
      {
        title: "Maintainance",
        path: "/Dashboard/Complains",
        icon:<Image src='/ic main.png' alt="complain" width="20" height="20"/>
      },
      {
        title: "Event Management",
        path: "/Dashboard/Events",
        icon:<Image src='/Vector.png' alt="Event" width="20" height="20"/>
      },
      {
      title: "Visitor Accesss",
      path: "/Dashboard/Visitor",
      icon: <Image src='/Group.png' alt="Visitor" width="20" height="20"/>
    },
    {
      title: "Fire Alert",
      path: "/Dashboard/Visitor",
      icon: <Image src='/fire ic.png' alt="Fire" width="20" height="20"/>
    },

    ],
  },
  { title: "Analytics",
    list: [
      {
        title: "Messages",
        path: "/Dashboard/Messages",
        icon: <BiSolidMessageSquareDetail />
      },
      {
        title: "Notification",
        path: "/Dashboard/Notification",
        icon: <IoIosNotifications />
      },
    ],
  },
  { title: "User",
    list: [
      {
        title: "Help",
        path: "/Dashboard/Help",
        icon: <MdHelpCenter/>
      },
      {
        title: "Setting",
        path: "/Dashboard/Setting",
        icon: <MdOutlineSettings/>
      },
      {
        title: "Logout",
        path: "/",
        icon: <MdLogout/>
       }
    ]
  }
];
function Sidebar() {
  
  
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src='/noavatar.png' alt="" width="30" height ="30" />
        <div className={styles.details}>
          <span className={styles.username}>Mahnoor Tariq</span>
          <span className={styles.userdes}>Adminsitrator</span>


        </div>
      </div>
      <ul className={styles.List}>
        {menuItems.map((cat) => (
          <li key= {cat.title}>
            <span className={styles.cat}>
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <Menulink item= {item} key={item.title}/>
            ))}
          </li>
        ))}
      </ul>

    </div>
  )
}
  
  export default Sidebar