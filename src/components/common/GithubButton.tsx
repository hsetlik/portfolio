import React from 'react'
import { getProject } from '../../app/projectInfo';

interface Props {
  name: string;
}

export default function GithubButton({ name }: Props) {
  const project = getProject(name);
  const url = `https://www.github.com/hsetlik${project.githubUrl}`;
  return (
      <div className='row bg-primary gh-button' >
        <span className='col'>Source:</span>
        <a className='col' href={url}>
          <img className='lang-logo' alt='gh' src='/portfolio/img/tool-logos/github_logo.svg'></img>
        </a>
      </div>

  )
}
