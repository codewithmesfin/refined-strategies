import { ArrowRightIcon } from "@heroicons/react/24/outline";
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
    rounded?: string,
    px?: string,
}

export default function OutlineLink({
    title = "Continue",
    showNextIcon = false,
    bgColor = "bg-white",
    textColor = "text-gray-900",
    href,
    borderColor = 'border-gray-400',
    leftIcon,
    py = "py-2",
    px = "px-4 sm:px-6",
    rounded = 'rounded-xl'
}: PROPS) {
    return <Link
        href={href}
        className={`${bgColor} ${borderColor} ${textColor} ${py} ${px} flex justify-center md:justify-evenly items-center space-x-2 ${rounded} border hover:border-green-500 hover:bg-green-500 hover:text-white`}
    >{leftIcon}
        <span>{title}</span>
        {showNextIcon && <ArrowRightIcon path="right" className="size-6" strokeWidth={2} />}
    </Link>
}