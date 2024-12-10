import { useRef, useEffect } from "react";

export function useIntersectionObserver(animationClass, threshold = 0.5) {
  const elementRef = useRef(null);

  const animation_array = animationClass.split(' ')

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Toggle the animation class based on intersection
        animation_array.forEach(class_name => 
          element.classList.toggle(class_name, entry.isIntersecting)
        )
      });
    }, { threshold });

    if (element) {
      observer.observe(element); // Start observing the element
    }

    // Cleanup observer on unmount
    return () => {
      if (element) {
        observer.unobserve(element); // Stop observing when the component unmounts
      }
    };
  }, [animationClass, threshold]); // Re-run when animationClass or threshold changes

  return elementRef;
}
