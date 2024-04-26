import ProjectCard from "../../../components/partials/projectCard";

const ProjectsPage = () => {
    return (
        <section className="section-tours" id="section-tours">
            <h2 className="heading-secondary">
                Our Projects
            </h2>
            <div className="row">
                <ProjectCard heading={"The Sea Explorer"} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus dignissimos hic quod enim explicabo facilis nihil magni, rerum dicta praesentium, exercitationem vel sunt repellat animi ab totam illum! Et, minus." price={100} link={'/projects/0'} />
                <ProjectCard heading={"The Forest Hiker"} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus dignissimos hic quod enim explicabo facilis nihil magni, rerum dicta praesentium, exercitationem vel sunt repellat animi ab totam illum! Et, minus." price={478} link={'/projects/1'}/>
                <ProjectCard heading={"The Snow Adventurer"} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus dignissimos hic quod enim explicabo facilis nihil magni, rerum dicta praesentium, exercitationem vel sunt repellat animi ab totam illum! Et, minus." price={615} link={'/projects/2'} />      
            </div>
        </section>
    )
}

export default ProjectsPage