import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
export default function(props){

  const illusterRef = useIntersectionObserver('md:animate-slide-left animate-slide-bottom')

  return(
    <div className="md:w-1/3 w-2/3 opacity-0" ref={illusterRef}>
        <img src={props.url} />
      </div>
  )
}