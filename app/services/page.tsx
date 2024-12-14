import { LinkButton, OutlineLink } from "@/components";
import services from "@/data/services";
import { ArrowLongRightIcon, ShareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";


export default function Services() {
   
    return <div className="bg-white pt-32">
        <div className="w-[90%] md:max-w-[85%] mx-auto md:py-16">
            <section>
                <div>
                    <h1 className="md:py-4 text-5xl md:text-6xl font-extrabold text-[#1b365d]">
                        Our Services
                    </h1>
                    <p className="text-[#2d3847] text-xl md:text-2xl py-4 md:py-5">
                        Comprehensive solutions designed to drive meaningful business transformation and sustainable growth.
                    </p>
                </div>
            </section>
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-10">
                    {
                        services.map((item: any) => <div key={item.title}
                            className="border border-gray-200 rounded-xl w-full p-5 md:p-10 md:my-0"
                        >
                            <div className="flex items-center space-x-2">
                                <Image src={item.icon} height={500} width={500} alt={item.title}
                                    className="h-16 w-16 rounded-full" />
                                <h1 className="text-[#1b365d] text-2xl md:text-4xl font-semibold">{item.title} </h1>
                            </div>
                            <div className="py-2">
                                <p className="text-[#2d3847] text-lg md:text-xl">{item.subtitle} </p>
                            </div>
                            <div className="py-2">
                             {item.items&&   <Link href={`/services/${item.id}`} className="text-[#2312e0] md:text-lg flex items-center space-x-2">
                                    <span className="border-b border-[#2312e0]">Learn More</span>
                                    <ArrowLongRightIcon className="size-6" />
                                </Link>}
                            </div>
                        </div>)
                    }
                </div>
            </section>
        </div>
        <div className="bg-[#f2f5f9]">
            <div className="py-16 w-[90%] md:max-w-[85%] mx-auto">
                <h1 className="py-2 text-4xl md:text-5xl font-bold text-center text-[#2d3847]">Interested to get services?</h1>
                <p className="text-[#2d3847] md:text-lg text-center py-2">
                    Contact our team to explore how we can help you achieve your business objectives.
                </p>
                <div className="py-5">
                    <div className="md:flex justify-center items-center md:space-x-6">
                        <div className="py-2">
                            <LinkButton title={"Get Started"} href={""}
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