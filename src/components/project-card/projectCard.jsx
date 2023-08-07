import './projectCard.css'

function ProjectCard ({item}) {
  return (
    <li>
      <article className='projectCard'>
        <div className='projectCard__inner'>
          <figure>
           <a
             href={item.link}
             target='_blank'
             rel="noreferrer"
           >
            <img className='projectCard__image'
                 src={item.picture}
                 alt={item.name}
                 width='300'
                 height='220'
                 loading='lazy'/>
           </a>
            <p className='projectCard__tags'>{item.tags}</p>
            <figcaption className='projectCard__title'>
            <a
              href={item.link}
              target='_blank'
              rel="noreferrer">
              {item.name}
            </a>
            </figcaption>
          </figure>
        </div>
      </article>
    </li>
  )
}

export default ProjectCard