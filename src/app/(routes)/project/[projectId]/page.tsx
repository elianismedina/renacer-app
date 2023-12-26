import Gallery from "../../components/gallery";
import getProject from "../../../actions/get-project";
import Info from "../../components/info";
import Container from "../../components/ui/container";

export const revalidate = 0;

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  const project = await getProject(params.projectId);

  if (!project) {
    return null;
  }

  return (
    <div className=" bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={project.images} />
          </div>
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info data={project} />
          </div>
          <hr className="my-10" />
        </div>
      </Container>
    </div>
  );
};

export default ProjectPage;
