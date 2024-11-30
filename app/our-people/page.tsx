import { LinkButton, OutlineLink } from "@/components";
import { ArrowLongRightIcon, PhoneIcon, ShareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";


export default function OurPeople() {
    const members = [
        {
            name: "Abey B.",
            subtitle: "Financial Sector, Innovation, Corporate Services, Investment",
            img: "/people/1.png"
        },
        {
            name: "Asebe J.",
            subtitle: "Enterprise Technology Vision, Digital Business Architecture, Strategic Innovation Leadership",
            img: "/people/1.png"
        },
        {
            name: "Mesfin T.",
            subtitle: "Digital Transformation, Technology Architecture, Innovation Leadership, Enterprise Solutions",
            img: "/people/1.png"
        },
        {
            name: "Tigist R.",
            subtitle: "Organizational Culture Development, Human Capital Development",
            img: "/people/1.png"
        },
        {
            name: "Filmon S.",
            subtitle: "Private Sector Development, Value creation, Strategy, Investment",
            img: "/people/1.png"
        },
        {
            name: "Woinshet E.",
            subtitle: "Customer Service Excellence, Corporate Services, Customer Relationship Management",
            img: "/people/1.png"
        },
    ]

    return <div className="bg-white pt-32">
        <div className="w-[90%] md:max-w-[85%] mx-auto md:py-16">
            <section>
                <div>
                    <h1 className="text-[#1b365d] text-2xl md:text-5xl font-bold">
                        Our People
                    </h1>
                    <div className="my-10 p-6 md:p-10 rounded bg-[#f5f7fa]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
                            {
                                members.map((item: any) => <div key={item.name} className="py-6">
                                    <div className="py-3 w-full">
                                        <Image src={item.img} alt={item.name} width={600} height={600}
                                            className="w-full h-full rounded-full max-h-[250px] object-contain" />
                                    </div>
                                    <div className="py-3">
                                        <h1 className="py-1 text-lg md:text-2xl text-center text-[#1b365d] font-medium">{item.name}</h1>
                                        <p className="py-1 md:text-lg text-center text-[#1b365d]">{item.subtitle}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="bg-[#f2f5f9]">
            <div className="py-16 w-[90%] md:max-w-[85%] mx-auto">
                <h1 className="py-2 text-4xl md:text-5xl font-bold text-center text-[#2d3847]">
                    {"Let's"} Explore Solutions Together
                </h1>
                <p className="text-[#2d3847] md:text-lg text-center py-2">
                    Our senior consultants are here to understand your situation and explore how we might help.
                </p>
                <div className="py-5">
                    <div className="md:flex justify-center items-center md:space-x-6">
                        <div className="py-2">
                            <LinkButton title={"Subscribe Now"} href={""}
                                bgColor="bg-[#c5a572]" showNextIcon py="py-3"
                                rounded="rounded-full" px="sm:px-10"
                            />
                        </div>
                        <div className="py-2">
                            <OutlineLink title={"Suggest your frriend"} href={""}
                                bgColor="bg-white" py="py-3"
                                rounded="rounded-full" px="sm:px-10"
                                borderColor="border-[#c5a572]"
                                textColor="text-[#c5a572]"
                                leftIcon={
                                    <ShareIcon className="size-6" />
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}