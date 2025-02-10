import { AdjustmentsHorizontalIcon, ArrowPathIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Brand, LinkButton, OutlineLink } from '@/components'



export default function Intro() {
    const trustedOrganizations = [
        "Berhan Bank",
        "Siinqee Bank",
        "MEDCON Engineering & Construction",
        "YA Real Estate",
        "Zeki Private Bulk Transport",
        "Tech Ethio IT Solutions",
        "GLG International Business House PLC"
    ];
    const stories = [
        { label: "Project Delivered", value: "73 +" },
        { label: "Client Retention", value: "92 %" },
        { label: "Client Recommendation", value: "65 %" }
    ];

    return <>
        <div className="bg-white pt-32">
            <div className="w-[90%] md:max-w-[85%] mx-auto md:py-16">
                <section className="md:flex justify-between md:space-x-10 items-start">
                    <div className="w-full">
                        <h1 className="text-3xl md:text-7xl font-extrabold text-gray-800">
                            Strategic Advisory for the dynamic business environment
                        </h1>
                        <p className="text-gray-700 text-lg md:text-xl py-10">
                            We help you identify emerging opportunities, develop
                            robust business models, and create sustainable competitive
                            advantages in an ever-evolving market landscape. Our data-driven
                            approach ensures your strategic decisions are both visionary
                            and grounded in market realities.
                        </p>
                        <div className="py-3 md:mt-6">
                            <div className="flex items-center space-x-4">
                                <LinkButton title={"Explore Our Services"} href={"/services"}
                                    py="py-3"
                                />
                                <LinkButton title={"Resources"} href={"/resources"}
                                    py="py-3"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:max-w-[500px] pt-10 md:pt-0">
                        <Image src={"/images/img1.png"} alt="img1" height={600} width={600}
                            className="w-full h-full md:max-h-[600px] rounded-br-[20px] object-cover" />
                    </div>
                </section>
                <section className="my-10 md:my-24">
                    <div className="md:py-16">
                        <h1 className="text-3xl md:text-6xl font-extrabold text-gray-800">
                            Trusted by Major Partners
                        </h1>
                        <p className="py-10 text-gray-700 text-lg md:text-2xl">
                            We partner with forward-thinking organizations to drive growth, optimize operations, and achieve sustainable success through data-driven insights and expert guidance.
                        </p>
                    </div>
                    <div className="py-4">
                        <div className="md:flex md:space-x-10">
                            <div className="w-full md:w-2/5 pb-6 md:pb-0">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">Trusted by Leading Organizations: </h2>
                            </div>
                            <div className="w-full md:w-3/5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                                    {
                                        trustedOrganizations.map((item) => <div key={item} className="w-full py-1 md:py-1">
                                            <h2 className="text-xl md:text-3xl text-gray-500">
                                                {item}
                                            </h2>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div>
                        <div className="md:flex md:space-x-10 justify-evenly">
                            {stories.map((item) => <div key={item.label} className="py-6 md:py-1">
                                <h1 className="py-2 text-center font-bold text-6xl md:text-8xl text-gray-900">{item.value} </h1>
                                <h2 className="py-2 text-center text-2xl md:text-4xl text-gray-700">{item.label} </h2>
                            </div>)
                            }
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
                                <LinkButton title={"Get Started"} href={"/contact"}
                                    bgColor="bg-white" textColor="text-black"
                                />
                                <OutlineLink title={"Call Now !"} href={"tel:+251 91 202 3828"}
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
    </>
}