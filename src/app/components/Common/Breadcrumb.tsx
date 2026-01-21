import Link from "next/link";
import { BreadcrumbProps } from "../../types/breadcrumb";

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  pageName,
  pageDescription,
}) => {
  return (
    <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 dark:bg-darkmode relative z-0 overflow-hidden pb-[80px] pt-[180px] md:pt-[200px] lg:pt-[220px]">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3 absolute bottom-0 left-0 h-px w-full bg-linear-to-r"></div>
      <div className="container mx-auto relative z-10">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="text-center">
              <h1 className="text-white mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] md:leading-[1.2] dark:text-white">
                {pageName}
              </h1>
              <p className="text-white/90 dark:text-black-6 mb-5 text-base">
                {pageDescription}
              </p>

              <ul className="flex items-center justify-center gap-[10px]">
                <li>
                  <Link
                    href="/"
                    className="text-white/90 hover:text-white flex items-center gap-[10px] text-base font-medium dark:text-white dark:text-opacity-50 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <p className="text-white flex items-center gap-[10px] text-base font-medium">
                    <span className="text-white/70 dark:text-white dark:text-opacity-50"> / </span>
                    {pageName}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
