import Descriptions from './descriptions'
import Board from './board'

export default function DirectorSection({ setModal }) {
    return (
        <>
            <Descriptions />
            <Board setModal={setModal} />
        </>
    )
}