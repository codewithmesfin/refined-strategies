"use client"

import { LinkButton, OutlineLink } from "@/components";
import services from "@/data/services";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useParams } from "next/navigation";



export default function Service() {
    const { id } = useParams()
    const item = services.filter(f => f.id == id)[0]
    console.log(item)


    return <div className="bg-white pt-32">
        <div className="w-[90%] md:max-w-[85%] mx-auto md:py-16">

            <section>
                <div>
                    <div className="flex items-center space-x-2">
                        <Image src={item.icon} height={500} width={500} alt={item.title}
                            className="h-16 w-16 rounded-full" />
                        <h1 className="text-[#1b365d] text-2xl md:text-4xl font-semibold">{item.title} </h1>
                    </div>
                    <div className="my-10 p-6 md:p-16 rounded-xl bg-[#f5f7fa]">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-10">
                          {
                            item.items&& item.items.map((x)=><div key={x.title}>
                                <h1 className="text-[#1b365d] text-xl md:text-2xl font-medium py-2">{x.title} </h1>
                                <p className="text-[#1b365d] text-lg">{x.subtitle} </p>
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
                        Ready to Transform Your Business?
                    </h1>
                    <div className="py-3">
                        <p className="text-white text-center text-lg md:text-xl">
                            Contact our team to explore how we can help you achieve your business objectives.
                        </p>
                        <div className="pt-10 flex justify-center space-x-4">
                            <LinkButton title={"Get Started"} href={""}
                                bgColor="bg-white" textColor="text-black"
                            />
                            <OutlineLink title={"Call Now !"} href={""}
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