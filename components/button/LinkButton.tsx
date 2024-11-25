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
    openOnOtherTab?:boolean
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
    openOnOtherTab=false
}: PROPS) {
    return <Link
        href={href}
        target={openOnOtherTab?'_blank':'_self'}
        className={`${bgColor} ${borderColor} ${textColor} ${py} flex justify-center md:justify-evenly items-center space-x-2 rounded-xl border hover:border-green-500 hover:bg-green-500 hover:text-white px-4 sm:px-6`}
    >
        {leftIcon}
        <span>{title}</span>
        {showNextIcon && <ArrowLongRightIcon path="right" className="h-4 w-4" strokeWidth={2} />}
    </Link>
}