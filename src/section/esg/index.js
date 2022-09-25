import useMediaQuery from '../../hooks/useMediaQuery'
import Desktop from './Desktop'
import Mobile from './mobile'

export default function Esg() {
    const isDesktop = useMediaQuery('desktop')
    return (
        <>
            {isDesktop ? <Desktop /> : <Mobile />}
        </>
    )
}