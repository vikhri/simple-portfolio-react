import './list.css'
import ProjectCard from "../project-card/projectCard.jsx";
import Button from "../button/button.jsx";

const projects = [
  {
    id: 1,
    name:'NFT App',
    tags:'nft, web, html',
    picture: '../../src/assets/projects/1.png',
    link: '/'
  },
  {
    id: 2,
    name:'NFT App',
    tags:'nft, web, html',
    picture: '../../src/assets/projects/1.png',
    link: '/'
  },
  {
    id: 2,
    name:'NFT App',
    tags:'nft, web, html',
    picture: '../../src/assets/projects/1.png',
    link: '/'
  },
  {
    id: 2,
    name:'NFT App',
    tags:'nft, web, html',
    picture: '../../src/assets/projects/1.png',
    link: '/'
  },
]

function ProjectsList() {
  return (
    <div className='projects'>
      <ul className='projects__list'>
        {
          projects.map((item) => (
            <ProjectCard item={item} key={item.id} />
          ))
        }
      </ul>
      <Button className='projects__button'>Load more</Button>
    </div>
  )
}

export default ProjectsList