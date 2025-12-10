import Image from "next/image";
import Marquee from "../ui/marquee";

const Companies = () => {
    return (
        <div className="flex w-full py-5 md:py-6">
            <div className="flex flex-col items-center justify-center text-center w-full py-2">
                <h2 className="text-xl heading font-medium">
                    Built on trusted infrastructure
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                    Enterprise-grade cloud and edge computing.
                </p>
                <div className="mt-4 md:mt-5 w-full relative overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:30s]">
                        <div className="flex items-center justify-center gap-12 md:gap-16">
                            <Image
                                src="/logos/cloudlare.png"
                                alt="Cloudflare"
                                width={160}
                                height={40}
                                className="h-8 w-40 md:w-44 object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                            />
                            <Image
                                src="/logos/Google_Cloud_logo.png"
                                alt="Google Cloud"
                                width={160}
                                height={40}
                                className="h-8 w-40 md:w-44 object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                            />
                            <Image
                                src="/logos/Fastly_logo.png"
                                alt="Fastly"
                                width={160}
                                height={40}
                                className="h-8 w-40 md:w-44 object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                            />
                        </div>
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </div>
    )
};

export default Companies
