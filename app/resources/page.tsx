'use client'
import { Button, LinkButton, OutlineLink } from "@/components";
import { ArrowLongRightIcon, ShareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";


export default function Resources() {
    const resources = [
        {
            image: "/resources/1.png",
            title: "Product Development Guideline",
            date: "July, 2024",
            src: ""
        },
        {
            image: "/resources/2.png",
            title: "Strategy Formulation Handbook",
            date: "August, 2024",
            src: ""
        },
        {
            image: "/resources/3.png",
            title: "Diaspora Engagement Model",
            date: "November, 2024",
            src: ""
        }
    ]
    const download = () => {

    }
    return <div className="bg-white pt-32">
        <div className="w-[90%] md:max-w-[85%] mx-auto md:py-16">
            <section className="pb-10">
                <div>
                    <h1 className="md:py-4 text-5xl md:text-6xl font-extrabold text-[#1b365d]">
                        Resources
                    </h1>
                </div>
            </section>
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10 mb-10">
                    {
                        resources.map((item: any) => <div key={item.title} className="shadow bg-gray-100 w-full">
                            <Image src={item.image} width={500} height={500} alt={item.title}
                                className="rounded-t-xl w-full object-cover" />
                            <div className="p-5">
                                <h1 className="text-[#1b365d] text-lg md:text-xl font-medium">{item.title} </h1>
                                <div className="my-4 flex items-center justify-between space-x-3">
                                    <p className="text-[#1b365d] text-sm">{item.date} </p>
                                    <Button title={"DOWNLOAD"} onclick={download}
                                    py="py-2" px="px-3" rounded="rounded-lg" />
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </section>
        </div>
        <div className="bg-[#f2f5f9]">
            <div className="py-16 w-[90%] md:max-w-[85%] mx-auto">
                <h1 className="py-2 text-4xl md:text-5xl font-bold text-center text-[#2d3847]">
                Get our insights delivered  to your inbox. 
                    </h1>
                <p className="text-[#2d3847] md:text-lg text-center py-2">
                Our publications suggest business opportunities, reveal winning strategies, and provide actionable frameworks
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