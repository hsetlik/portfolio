import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getProject } from '../../app/projectInfo';
import github_logo from '/img/github_logo.svg';

interface Props {
    name: string;
}

export default function GithubButton({name}: Props) {
    const project = getProject(name);
    const url = `https://www.github.com/hsetlik${project.githubUrl}`;
  return (
    <a href={url}>
        <div className='row' >
            <p>See the source code: </p>
            <img className='lang-logo' src={github_logo}></img>
        </div>
    </a>
    
  )
}
