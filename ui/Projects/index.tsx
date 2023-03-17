/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import Image from 'next/image'
import projects from './projects';
import { ProjectsContainer, ProjectsContent } from './styles';
import { Container, Title } from '../../styles/styles';
import { AllProjects } from './Github';
import { Briefcase } from 'phosphor-react';

interface Projects {
  slug: string;
  url: string;
  title: string;
  type: string;
  img: string;
  description: string;
  tags?: [name: string, icon: string];
}

export function Projects() {
  return (
    <Container id="projects">
      <Title>
        Projetos
        <span>
          <Briefcase /> Projetos
        </span>
      </Title>
      <ProjectsContainer>
        {projects.map((project) => {
          return (
            <Link href={`/project/${project.url}`} key={project.id}>
              <ProjectsContent>
                <Image src={project.img} alt={project.title} width={1298} height={681}/>
                <div className="title">
                  <h2>{project.title}</h2>
                  <span>{project.type}</span>
                </div>
              </ProjectsContent>
            </Link>
          );
        })}
      </ProjectsContainer>
      <AllProjects />
    </Container>
  );
}
