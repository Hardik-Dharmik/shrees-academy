import Image from "next/image";
import Link from "next/link";
import withBasePath from '@/utils/basePath'

const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex items-center gap-3 h-full group">
            <Image
                src={withBasePath('/images/logo/logo.png')}
                alt="logo"
                width={200}
                height={50}
                className="h-10 md:h-12 w-auto object-contain"
                quality={100}
            />
            <div className="flex flex-col leading-[1.1] -space-y-0.5">
                <span className="text-base md:text-lg font-extrabold">
                    <span className="text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">Shree's </span>
                    <span className="text-yellow-500 dark:text-yellow-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-300 transition-colors duration-300">Academy</span>
                </span>
                <span className="text-[10px] md:text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 text-center">
                    in
                </span>
                <span className="text-xs md:text-sm font-semibold text-primary dark:text-primary/90 group-hover:text-primary/80 dark:group-hover:text-primary transition-colors duration-300">
                    Wisdom Quality Education
                </span>
            </div>
        </Link>
    );
};

export default Logo;
