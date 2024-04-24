import styles from "@/app/page.module.css";
import ProjectCard from "@/components/partials/projectCard";

const ProjectsPage = () => {
    return (
        <div className={styles.main}>
            <section className="section-tours" id="section-tours">
                <h2 className="heading-secondary">
                    Our Projects
                </h2>

                <div className="row">
                    <ProjectCard heading={"The Sea Explorer"} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus dignissimos hic quod enim explicabo facilis nihil magni, rerum dicta praesentium, exercitationem vel sunt repellat animi ab totam illum! Et, minus." price={100} id={'0'} />
                    <ProjectCard heading={"The Forest Hiker"} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus dignissimos hic quod enim explicabo facilis nihil magni, rerum dicta praesentium, exercitationem vel sunt repellat animi ab totam illum! Et, minus." price={478} id={'1'} />
                    <ProjectCard heading={"The Snow Adventurer"} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus dignissimos hic quod enim explicabo facilis nihil magni, rerum dicta praesentium, exercitationem vel sunt repellat animi ab totam illum! Et, minus." price={615} id={'2'} />      
                </div>
            </section>
        </div>
    )
}

export default ProjectsPage