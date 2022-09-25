import { useState, useEffect } from 'react'
import breakpoints from '../style/breakpoints'

export default function useMediaQuery(device) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(breakpoints[device]);
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener)
    }, [matches, device]);

    return matches
}