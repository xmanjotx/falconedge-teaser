import Image from "next/image";
import Marquee from "../ui/marquee";

const Companies = () => {
    return (
        <div className="flex w-full py-5 md:py-6">
            <div className="flex flex-col items-center justify-center text-center w-full py-2">
                <h2 className="text-xl heading font-medium">
                    Processing at the edge. Secured from the core.
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                    Infrastructure trusted by governments worldwide.
                </p>
                <div className="mt-4 md:mt-5 w-full relative overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:40s]">
                        <div className="flex items-center justify-center gap-16 md:gap-20">
                            <Image
                                src="/logos/cloudlare.png"
                                alt="Cloudflare"
                                width={120}
                                height={30}
                                className="h-6 w-32 object-contain opacity-40 grayscale hover:opacity-60 transition-all"
                            />
                            <Image
                                src="/logos/Google_Cloud_logo.png"
                                alt="Google Cloud"
                                width={120}
                                height={30}
                                className="h-6 w-32 object-contain opacity-40 grayscale hover:opacity-60 transition-all"
                            />
                            <Image
                                src="/logos/Fastly_logo.png"
                                alt="Fastly"
                                width={120}
                                height={30}
                                className="h-6 w-32 object-contain opacity-40 grayscale hover:opacity-60 transition-all"
                            />
                        </div>
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </div>
    )
};

export default Companies
