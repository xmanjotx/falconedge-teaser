import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";

const Footer = () => {
    return (
        <footer className="w-full py-10 relative">
            <Container>
                <Wrapper className="relative flex flex-col items-center justify-center pb-20 overflow-hidden footer">
                    <Particles
                        className="absolute inset-0 w-full -z-10"
                        quantity={40}
                        ease={10}
                        color="#10b981"
                        refresh
                    />
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center gap-2">
                            <Icons.icon className="w-5 h-5 text-primary" />
                            <span className="text-xl font-medium font-heading">
                                FalconEdge
                            </span>
                        </div>
                        <p className="text-base mt-4 text-muted-foreground">
                            Intelligence at the edge.
                        </p>
                        <Button className="mt-8">
                            <Link href="/request-access">
                                Request Access
                            </Link>
                        </Button>
                    </div>
                </Wrapper>
            </Container>
            <Container>
                <Wrapper className="pt-10 flex items-center justify-center relative">
                    <p className="text-sm text-secondary-foreground">
                        &copy; {new Date().getFullYear()} FalconEdge. All rights reserved.
                    </p>
                </Wrapper>
            </Container>
        </footer>
    )
};

export default Footer
