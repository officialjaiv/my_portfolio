"use client";

import {useRouter} from "next/navigation";
import {RepoType, ProjectType, type IProjectItem} from "@/types";
import {Balancer} from "react-wrap-balancer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import CardBox from "@/components/core/CardBox";

const ProjectItem = ({project}: { project: IProjectItem }) => {
    const router = useRouter();

    // const _handleNavigateToPage = (id: string) => {
    //     if (!id || id.length < 1) return;
    //
    //     router.push(`/projects?id=${id}`);
    // };

    return (
        <CardBox
            classNames="min-w-[calc(100%-2rem)] sm:min-w-[25rem] md:min-w-[28rem] aspect-[3/5] max-h-[30rem] p-4 gap-8 items-center justify-between bg-[var(--textColor10)] group slide_in"
            // onClick={() => _handleNavigateToPage(project.id)}
        >
            <Column classNames="w-full items-center justify-start">
                <Row classNames="w-[2.5rem] md:w-[3rem] aspect-square items-center justify-center">
                    <Image
                        src={project.icon}
                        alt={`project-${project.title}`}
                        width={100}
                        height={100}
                        sizes="100%"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={project.icon}
                        className="w-full h-full object-cover aspect-square"
                    />
                </Row>

                <p className="text-lg/6 font-semibold mt-4">{project.title}</p>

                <div className="flex gap-4 items-center justify-between">
                    <div
                        className={`flex flex-row items-center justify-center rounded-full py-[0.05] px-[0.5rem] mt-4 capitalize text-center border ${
                            project.repoType === RepoType.Private
                                ? "text-[var(--errorColor)] border-[var(--errorColor50)]"
                                : "text-[var(--successColor)] border-[var(--successColor50)]"
                        }`}
                    >
                        <p className="text-xs/6 font-semibold">
                            {project.repoType === RepoType.Private ? "Private" : "Public"}
                        </p>
                    </div>

                    <div
                        className="flex flex-row items-center justify-center rounded-full py-[0.05] px-[0.5rem] mt-4 capitalize text-center border text-[var(--successColor)] border-[var(--successColor50)]"
                    >
                        <p className="text-xs/6 font-semibold">
                            {project.projectType === ProjectType.Personal ? "Personal" : project.projectType === ProjectType.JobWork ? "Job Work" : "Freelance"}
                        </p>
                    </div>
                </div>

                <Row classNames="w-full items-center justify-center mt-4 gap-2">
                    {project.githubUrl ? (
                        <Link
                            href={project.githubUrl}
                            aria-label={`${project.title} GitHub URL`}
                            target="_blank"
                            className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="text-base/6 text-[var(--textColor)]"
                            />
                        </Link>
                    ) : null}

                    {project.url ? (
                        <Link
                            href={project.url}
                            aria-label={`${project.title} Project URL`}
                            target="_blank"
                            className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                        >
                            <FontAwesomeIcon
                                icon={faEye}
                                className="text-base/6 text-[var(--textColor)]"
                            />
                        </Link>
                    ) : null}
                </Row>
            </Column>

            <Column classNames="w-full items-center">
                <p className="text-center text-base/6">
                    <Balancer>{project.description}</Balancer>
                </p>

                {project.tags && project.tags.length > 0 ? (
                    <Row classNames="w-full items-center justify-center flex-wrap mt-4">
                        {project.tags.map((tag, i) => {
                            return (
                                <p
                                    key={`tag-${i}`}
                                    className="rounded-[var(--borderRadius)] border border-[var(--textColor50)] py-[.125rem] px-2 mr-2 mb-2 text-xs/6 font-normal"
                                >
                                    {tag}
                                </p>
                            );
                        })}
                    </Row>
                ) : null}
            </Column>
        </CardBox>
    );
};

export default ProjectItem;
