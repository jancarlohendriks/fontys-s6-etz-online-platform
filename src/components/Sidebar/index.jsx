import { useRouter } from 'next/router'
import Image from "next/image";
import Link from 'next/link'
import styles from "./Sidebar.module.scss";

import IconHome from "@/assets/icons/home.svg";
import IconTv from "@/assets/icons/tv.svg";
import IconPlay from "@/assets/icons/play.svg";
import IconHelp from "@/assets/icons/help.svg";

const Sidebar = () => {
	const router = useRouter()
	return (
		<div className={styles.root}>
			<div className={styles.logo}>
				<Image src="/images/logo.png" alt="me" layout="fill" />
			</div>

			<ul className={styles.menu}>
				<li className={router.pathname == "/" ? "active" : ""}><Link href="/"><a><IconHome /><span>Thuisscherm</span></a></Link></li>
				<li className={router.pathname == "/sharedTv" ? "active" : ""}><Link href="/sharedTv"><a><IconTv /><span>Samen tv kijken</span></a></Link></li>
				<li className={router.pathname == "/sharedGame" ? "active" : ""}><Link href="/sharedGame"><a><IconPlay /><span>Samen een spel spelen</span></a></Link></li>
			</ul>
			<div className={styles.footer}>
				<IconHelp />
				<p>Hulp nodig?</p>
			</div>
		</div>
	)
}

export default Sidebar