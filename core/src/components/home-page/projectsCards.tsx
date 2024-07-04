import React from 'react'
import ProjectsCard from './projectsCard'

const dataProject = [
    {id: 1, title: '', description: '', url: '', image: ''},
    {id: 2, title: '', description: '', url: '', image: ''},
    {id: 3, title: '', description: '', url: '', image: ''},
    {id: 4, title: '', description: '', url: '', image: ''},
    {id: 5, title: '', description: '', url: '', image: ''},
    {id: 6, title: '', description: '', url: '', image: ''},
    {id: 7, title: '', description: '', url: '', image: ''},
    {id: 8, title: '', description: '', url: '', image: ''},
]

export default function ProjectsCards() {
  return (
    <div className='flex mt-[20px] justify-between flex-wrap'>
    {dataProject.map((el) => <ProjectsCard  key={el.id}/>)}
    </div>
  )
}
