import './button.css'
export default function Button ({children}) {
  return (
    <div className='button__container'>
      <button className='button'>{children}</button>
    </div>
  )
}