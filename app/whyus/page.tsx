import { LinkButton, OutlineLink } from "@/components";
import { ArrowLongRightIcon, PhoneIcon, ShareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";


export default function Whyus() {
    const members = [
        {
            name: "Proven Expertise",
            subtitle: "32+ years of combined experience serving industry leaders across sectors",
            img: "/why/1.png"
        },
        {
            name: "Data-Driven Approach",
            subtitle: "Leverage advanced analytics and industry insights for informed decision-making",
            img: "/why/2.png"
        },
        {
            name: "Global Perspective",
            subtitle: "International experience with a deep understanding of local markets",
            img: "/why/3.png"
        }
    ]

    return <div className="bg-white pt-32">
        <div className="w-[90%] md:max-w-[85%] mx-auto md:py-16">
            <section>
                <div>
                    <h1 className="text-[#1b365d] text-2xl md:text-5xl font-bold">Why Us ?</h1>
                    <div className="my-10 p-6 md:p-16 rounded bg-[#f5f7fa]">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-10">
                            {
                                members.map((item: any) => <div key={item.name}>
                                    <div className="py-3 w-full">
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            width={600}
                                            height={600}
                                            className="w-16 h-16 rounded-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="py-1 text-lg md:text-3xl text-[#1b365d] font-medium">{item.name}</h1>
                                        <p className="py-1 text-lg md:text-xl text-[#1b365d]">{item.subtitle}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="bg-[#2d3847] py-10">
            <section className="md:py-16 w-[90%] md:max-w-[90%] mx-auto">
                <div>
                    <h1 className="text-center text-white text-3xl md:text-6xl">
                        Ready to Get Our Services?
                    </h1>
                    <div className="py-3">
                        <p className="text-white text-center text-lg md:text-xl">
                            Contact our team to explore how we can help you achieve your business objectives.
                        </p>
                        <div className="pt-10 flex justify-center space-x-4">
                            <LinkButton title={"Get Started"} href={"/contact"}
                                bgColor="bg-white" textColor="text-black"
                            />
                            <OutlineLink title={"Call Now !"} href={"tel:+251 91 202 3828"}
                                leftIcon={
                                    <PhoneIcon className="size-4" fill="currentColor" />
                                }
                                bgColor="bg-[#2d3847]"
                                textColor="text-white"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
}