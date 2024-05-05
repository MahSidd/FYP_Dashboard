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
        icon: <MdDashboard/>
      },
      {
        title: "Staff",
        path: "/Dashboard/Staff",
        icon: <MdSupervisedUserCircle/>
      },
      {
        title: "Complains",
        path: "/Dashboard/Complains",
        icon: <MdErrorOutline/>
      },
      {
        title: "Events",
        path: "/Dashboard/Events",
        icon: <MdErrorOutline/>
      },
      {
      title: "Visitor",
      path: "/Dashboard/Visitor",
      icon: <MdSupervisedUserCircle/>
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