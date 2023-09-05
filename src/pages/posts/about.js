import Link from 'next/link'
import FirstPost from './firstPost'

export default function About({ props }) {
  return (
    <>111{props.map((item, index) => {
      return <div>{item.name}----{item.age}----{index}</div>
    })}
    </>
  )
}