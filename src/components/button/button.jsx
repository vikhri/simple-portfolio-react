import './button.css'
export default function Button ({children, onLoadMore}) {
  return (
    <div className='button__container'>
      <button className='button' onClick={onLoadMore}>{children}</button>
    </div>
  )
}