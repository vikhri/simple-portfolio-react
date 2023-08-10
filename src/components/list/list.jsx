import './list.css'
import ProjectCard from "../project-card/projectCard.jsx";
import Button from "../button/button.jsx";
import {useState} from "react";

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
    name:'NFT Opp',
    tags:'nft, web, html',
    picture: '../../src/assets/projects/1.png',
    link: '/'
  },
  {
    id: 3,
    name:'NFT App',
    tags:'nft, web, html',
    picture: '../../src/assets/projects/1.png',
    link: '/'
  },
  {
    id: 4,
    name:'NFT App',
    tags:'nft, web, html',
    picture: '../../src/assets/projects/1.png',
    link: '/'
  },
  {
    id: 5,
    name:'NFT App',
    tags:'nft, web, html',
    picture: '../../src/assets/projects/1.png',
    link: '/'
  },
  {
    id: 6,
    name:'NFT App',
    tags:'nft, web, html',
    picture: '../../src/assets/projects/1.png',
    link: '/'
  },
  {
    id: 7,
    name:'NFT App',
    tags:'nft, web, html',
    picture: '../../src/assets/projects/1.png',
    link: '/'
  },
]

function ProjectsList({themeIsDark}) {

  const [projectsQuantity, setProjectQuantity] = useState(4);

  function HandleLoadMore() {
    if (projects.length <= projectsQuantity) return;
    setProjectQuantity(projectsQuantity +2);
  }


  return (
    <div className={`projects ${themeIsDark && 'dark'}`}>
      <ul className='projects__list'>
        {
          projects.slice(0, projectsQuantity).map((item) => (
            <ProjectCard item={item} key={item.id} />
          ))
        }
      </ul>

      <Button className='projects__button' onLoadMore={HandleLoadMore}><span className="" style={{textAlign: "center"}}>{(projects.length <= projectsQuantity) ? 'That`s it :)' : 'Load more'}</span></Button>
    </div>
  )
}

export default ProjectsList