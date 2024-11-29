import { LinkButton, OutlineLink } from "@/components";
import { ArrowLongRightIcon, PhoneIcon, ShareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";


export default function MissionVision() {

    return <div className="bg-white pt-32">
        <div className="w-[90%] md:max-w-[85%] mx-auto md:py-16">
            <section>
                <div className="md:flex justify-between items-center md:space-x-10">
                    <div className="w-full md:w-1/2">
                        <div className="py-4">
                            <h1 className="text-[#1b365d] text-2xl md:text-5xl font-bold">Our Mission</h1>
                            <p className="py-4 text-[#1b365d] text-lg md:text-xl">
                                Enhance private sector performance by transforming decision-making
                                through data-driven methodologies, leveraging passionate experts and cutting-edge technology.
                            </p>
                        </div>
                        <div className="py-4">
                            <h1 className="text-[#1b365d] text-2xl md:text-5xl font-bold">Our Vision</h1>
                            <p className="py-4 text-[#1b365d] text-lg md:text-xl">
                                To be a trusted catalyst for data-driven business excellence,
                                where every strategic decision unlocks sustainable value.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="pt-4 grid grid-cols-2 gap-1">
                            <Image alt="vision" src={"/about/1.png"}
                                width={500} height={500} className="h-wull w-full rounded-sm" />
                            <Image alt="vision" src={"/about/2.png"}
                                width={500} height={500} className="h-wull w-full rounded-sm" />
                        </div>
                        <div className="pb-4 pt-1">
                            <Image alt="vision" src={"/about/3.png"}
                                width={500} height={500} className="h-wull w-full rounded-sm" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="py-4 md:py-10">
                    <div>
                        <div className="py-2 md:py-6">
                            <h1 className="text-[#1b365d] text-2xl md:text-5xl font-bold">
                                Corporate Values
                            </h1>
                        </div>
                        <div className="py-4">
                            <div className="relative flex justify-center items-center">
                                <Image className="hidden md:block mx-auto h-full max-h-[500px] rounded-lg w-full" src={"/about/3.png"} alt=""
                                    width={600} height={600} />
                                <div className="md:absolute bottom-2 right-0 w-full md:w-[70%] rounded bg-gray-50 flex justify-center items-center">
                                    <div className="p-5 md:p-16 md:py-16">
                                        <h1 className="py-1 md:py-3 text-[#1b365d] text-2xl md:text-4xl font-bold">
                                            Innovation
                                        </h1>
                                        <p className="py-1 md:py-3 text-[#1b365d] text-lg md:text-2xl">
                                            We pioneer creative solutions and embrace new approaches
                                            to solve complex business challenges.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="py-4 md:py-10">
                    <div>
                        <div className="py-2 md:py-6">
                            <h1 className="text-[#1b365d] text-2xl md:text-5xl font-bold">
                                Collaboration
                            </h1>
                        </div>
                        <div className="py-4">
                            <div className="relative flex justify-center items-center">
                                <Image
                                    className="hidden md:block mx-auto h-full max-h-[500px] rounded-lg w-full"
                                    src={"/about/4.png"}
                                    alt=""
                                    width={600} height={600} />
                                <div className="md:absolute bottom-2 right-0 w-full md:w-[70%] rounded bg-gray-50 flex justify-center items-center">
                                    <div className="p-5 md:p-16 md:py-16">
                                        <h1 className="py-1 md:py-3 text-[#1b365d] text-2xl md:text-4xl font-bold">
                                            Collaboration
                                        </h1>
                                        <p className="py-1 md:py-3 text-[#1b365d] text-lg md:text-2xl">
                                            We unite diverse expertise and perspectives to deliver
                                            superior outcomes for our clients through seamless teamwork.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="py-4 md:py-10">
                    <div>
                        <div className="py-4">
                            <div className="relative flex justify-center items-center">
                                <Image
                                    className="hidden md:block mx-auto h-full max-h-[500px] rounded-lg w-full"
                                    src={"/about/5.png"}
                                    alt=""
                                    width={600} height={600} />
                                <div className="md:absolute bottom-2 right-0 w-full md:w-[70%] rounded bg-gray-50 flex justify-center items-center">
                                    <div className="p-5 md:p-16 md:py-16">
                                        <h1 className="py-1 md:py-3 text-[#1b365d] text-2xl md:text-4xl font-bold">
                                            Impact Driven Results
                                        </h1>
                                        <p className="py-1 md:py-3 text-[#1b365d] text-lg md:text-2xl">
                                            We focus on achieving measurable, meaningful change that
                                            creates lasting value for our clients.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="py-4 md:py-10">
                    <div>
                        <div className="py-4">
                            <div className="relative flex justify-center items-center">
                                <Image
                                    className="hidden md:block mx-auto h-full max-h-[500px] rounded-lg w-full"
                                    src={"/about/6.png"}
                                    alt=""
                                    width={700} height={700} />
                                <div className="md:absolute bottom-2 right-0 w-full md:w-[70%] rounded bg-gray-50 flex justify-center items-center">
                                    <div className="p-5 md:p-16 md:py-16">
                                        <h1 className="py-1 md:py-3 text-[#1b365d] text-2xl md:text-4xl font-bold">
                                            Knowledge Empowerment
                                        </h1>
                                        <p className="py-1 md:py-3 text-[#1b365d] text-lg md:text-2xl">
                                            We actively share expertise and build capabilities, enabling our
                                            clients and teams to make informed decisions and grow.
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                                        <PhoneIcon className="size-4" fill="currentColor"  />
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