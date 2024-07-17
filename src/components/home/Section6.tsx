import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import SectionTitle from "@/components/common/SectionTitle";
import SocialButton from "./ui/SocialButton";
import socialLinks from "@/data/socialLinks";

const HomeSection6 = ({id}: { id: string }) => {
    return (
        <ResponsiveBox
            classNames="bg-[var(--bgColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
            id={id}
        >
            <ConstraintedBox classNames="p-4 py-16">
                <SectionTitle>Get in Touch</SectionTitle>

                <Column classNames="mt-16 w-full">
                    <GridBox classNames="sm:grid-cols-3 w-full mx-auto gap-4">
                        {socialLinks.filter((link, index) => index !== 3).map((link, index) => {
                            return (
                                <SocialButton
                                    key={`social-link-${index}`}
                                    text={link.text}
                                    icon={link.icon}
                                    url={link.url}
                                />
                            );
                        })}
                    </GridBox>
                    {/*<GridBox classNames="sm:grid-cols-2 w-full mx-auto gap-4 mt-6">*/}
                    {/*    <a href="https://www.buymeacoffee.com/jaivikbhanushali" target="_blank">*/}
                    {/*        <img*/}
                    {/*            className="relative flex flex-row animated__hover h-[48px] w-full object-contain"*/}
                    {/*            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"*/}
                    {/*            alt="Buy Me A Coffee"*/}
                    {/*        />*/}
                    {/*    </a>*/}

                    {/*    <a href="https://ko-fi.com/jaivikbhanushali" target="_blank">*/}
                    {/*        <img*/}
                    {/*            className="relative flex flex-row animated__hover h-[48px] w-full object-contain border-none border-0"*/}
                    {/*            src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"*/}
                    {/*            alt="Buy Me a Coffee at ko-fi.com"*/}
                    {/*        />*/}
                    {/*    </a>*/}
                    {/*</GridBox>*/}

                    <p className="text-center mx-auto mt-16 text-2xl/6 font-semibold">
                        I&apos;m{" "}
                        <span className="text-[var(--primaryColor)]">Available</span> for
                        Freelancing.
                    </p>
                </Column>
            </ConstraintedBox>
        </ResponsiveBox>
    );
};

export default HomeSection6;
