import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface PROPS {
    title: string,
    showNextIcon?: boolean,
    bgColor?: string,
    textColor?: string,
    href: string
    borderColor?: string,
    leftIcon?: any,
    py?: string,
    px?: string,
    openOnOtherTab?:boolean,
    rounded?:string
}

export default function LinkButton({
    title = "Continue",
    showNextIcon = false,
    bgColor = "bg-[#c5a572]",
    textColor = "text-white",
    href,
    borderColor = 'border-[#c5a572]',
    leftIcon,
    py = "py-2",
    px = "px-4 sm:px-6",
    openOnOtherTab=false,
    rounded='rounded-xl'
}: PROPS) {
    return <Link
        href={href}
        target={openOnOtherTab?'_blank':'_self'}
        className={`${bgColor} ${borderColor} ${textColor} ${py} ${px} flex justify-center md:justify-evenly items-center space-x-2 ${rounded} border hover:border-green-500 hover:bg-green-500 hover:text-white `}
    >
        {leftIcon}
        <span>{title}</span>
        {showNextIcon && <ArrowLongRightIcon path="right" className="size-6" strokeWidth={2} />}
    </Link>
}