import Layout from "@/components/layout";
import MainSection from "@/components/mainSection";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className={`w-screen ${inter.className}`}>
			<Layout isHome={true}>
				<MainSection/>
			</Layout>
		</div>
	);
}
