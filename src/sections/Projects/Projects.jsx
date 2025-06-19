import styles from './ProjectsStyles.module.css';
import react from '../../assets/react.png';
import cypress from '../../assets/cypress.svg';
import clearance from '../../assets/clearance.png';
import lambda from '../../assets/lambda.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Contributions</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={clearance}
          h3="Government Clearance"
          p="Public Trust/Secret"
        />
        <ProjectCard
          src={react}
          h3="React Maintaining"
          p="CBP Contract"
        />
        <ProjectCard
          src={cypress}
          h3="Cypress Unit Testing"
          p="DOD Contract"
        />
        <ProjectCard
          src={lambda}
          h3="AWS Lambda"
          p="DOD Contract"
        />
      </div>
    </section>
  );
}

export default Projects;
