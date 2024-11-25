import Image from "next/image";
import Link from "next/link";


export default function Brand() {
  return <Link href="/"
    className="flex space-x-2 items-center"
  >
    <Image
      alt="logo"
      src="/logo.png"
      className="h-12 md:h-16 w-auto rounded-full"
      width={600} height={600}
    />
  </Link>
}