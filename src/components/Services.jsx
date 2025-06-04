import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import bannerServices from "../assets/banner-services.png";
import iconCheck from "../assets/icon-check.svg";
import Button from "./Button";
import IconCrown from "./IconCrown";
import IconNode2 from "./IconNode2";
import IconDeviceMessage from "./IconDeviceMessage";

const TAB_DATA = [
	{
		label: "Smart Classification",
		icon: IconCrown,
	},
	{
		label: "Real-Time Detection",
		icon: IconNode2,
	},
	{
		label: "Eco Reward Tracking",
		icon: IconDeviceMessage,
	},
];

const FEATURE_LIST = [
	"Otomatis mengklasifikasikan sampah berdasarkan jenisnya",
	"Memproses data klasifikasi secara real-time",
	"Memberi poin reward setelah penyetoran berhasil",
];

function ServiceTabPanel() {
	return (
		<div className="flex flex-col lg:flex-row gap-y-8 items-center justify-between px-4 sm:px-8 lg:px-2">
			<div className="flex items-center justify-center flex-1">
				<img src={bannerServices} alt="Service Banner" />
			</div>
			<div className="flex flex-col items-start flex-1 gap-8">
				<div className="flex flex-col gap-y-3 md:text-center lg:text-start">
					<h2 className="text-3xl font-bold leading-[2.75rem]">
						Empowering Smart Waste Management
					</h2>
					<p className="font-medium text-lg md:mx-auto lg:mx-0 w-full md:w-4/5">
						Trashure membantu Anda memantau klasifikasi sampah, menghitung
						kontribusi lingkungan Anda, dan mendapatkan reward secara real-time.
					</p>
				</div>
				<div className="flex flex-col gap-y-5">
					{FEATURE_LIST.map((feature, idx) => (
						<div className="flex gap-3 items-center" key={idx}>
							<div className="p-1.5 bg-green-2 flex items-center justify-center rounded-full">
								<img src={iconCheck} alt="Checkmark" />
							</div>
							<p className="font-bold text-lg">{feature}</p>
						</div>
					))}
				</div>
				<Link to="/howitworks">
					<Button
						variant="secondary"
						size="md"
						className="w-full md:w-auto"
					>
						Pelajari Cara Kerja
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default function Services() {
	return (
		<section id="features">
			<div className="pt-12 md:pt-24 container mx-auto md:px-4 lg:px-0">
				<div className="text-center px-4 gap-y-4 flex flex-col">
					<h1 className="font-extrabold text-4xl md:text-5xl lg:leading-[4rem]">
						Fitur Canggih untuk Lingkungan Lebih Bersih
					</h1>
					<p className="font-medium text-lg">
						Trashure dilengkapi teknologi cerdas untuk memilah sampah secara
						otomatis dan memberi Anda reward dengan mudah.
					</p>
				</div>

				<Tabs>
					<div className="py-12 flex items-center justify-center">
						<TabList className="flex items-center gap-6 md:gap-10 lg:gap-16 px-2 md:px-4 overflow-x-scroll scrollbar-hide border-b-2">
							{TAB_DATA.map((tab, idx) => {
								const Icon = tab.icon;
								return (
									<Tab
										key={tab.label}
										className="group shrink-0 flex items-center gap-3 md:gap-6 cursor-pointer pb-4 md:pb-6"
									>
										<div className="p-2 md:p-3 rounded-full bg-green-2">
											<Icon active={true} />
										</div>
										<span className="font-semibold text-base md:text-xl">
											{tab.label}
										</span>
									</Tab>
								);
							})}
						</TabList>
					</div>
					<div className="px-2 lg:px-2 md:px-4 pb-12 md:pb-24">
						{TAB_DATA.map((_, idx) => (
							<TabPanel key={idx}>
								<ServiceTabPanel />
							</TabPanel>
						))}
					</div>
				</Tabs>
			</div>
		</section>
	);
}