import ProfessorRanker from "./ProfessorRanker";
import WorkoutLogger from "./WorkoutLogger";
import JamShare from "./JamShare";
function Projects() {
  return (
    <div id="card">
      <div>
        <h1>Projects</h1>
        <hr />
      </div>
      <WorkoutLogger />
      <JamShare />
      <ProfessorRanker />
    </div>
  );
}

export default Projects;
