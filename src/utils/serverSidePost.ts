import fs from "fs-extra"
import projectsMetadata from "../data/projectsMetadata.json"

export const getProjectsMetadata = async () => {
    try {
        const projects = await fs.readdir("./src/pages/projects")
        return projects
            .filter((project) => !project.endsWith(".tsx"))
            .filter((project) => projectsMetadata.hasOwnProperty(project))
            .map((project) => {
                return {
                    ...projectsMetadata[project as keyof typeof projectsMetadata],
                    slug: `/projects/${project}`,
                }
            })
    } catch (e) {
        throw e + "Error reading projects"
    }
}