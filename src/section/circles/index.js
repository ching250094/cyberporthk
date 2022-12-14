import useMediaQuery from '../../hooks/useMediaQuery'
import Desktop from './Desktop'
import Mobile from './Mobile'

export default function Circles() {
    const isDesktop = useMediaQuery('desktop')
    return (
        <>
            {isDesktop ? <Desktop /> : <Mobile />}
        </>
    )
}