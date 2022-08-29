import Col_1_1 from '../../assets/images/directors/col_1_1.svg'
import Col_1_2 from '../../assets/images/directors/col_1_2.svg'
import Col_1_3 from '../../assets/images/directors/col_1_3.svg'
import Col_1_4 from '../../assets/images/directors/col_1_4.svg'
import Col_2_1 from '../../assets/images/directors/col_2_1.svg'
import Col_2_2 from '../../assets/images/directors/col_2_2.svg'
import Col_2_3 from '../../assets/images/directors/col_2_3.svg'
import Col_2_4 from '../../assets/images/directors/col_2_4.svg'
import Col_3_1 from '../../assets/images/directors/col_3_1.svg'
import Col_3_2 from '../../assets/images/directors/col_3_2.svg'
import Col_3_3 from '../../assets/images/directors/col_3_3.svg'
import Col_3_4 from '../../assets/images/directors/col_3_4.svg'

export const photos = {
    Col_1_1,
    Col_1_2,
    Col_1_3,
    Col_1_4,
    Col_2_1,
    Col_2_2,
    Col_2_3,
    Col_2_4,
    Col_3_1,
    Col_3_2,
    Col_3_3,
    Col_3_4
}

export const getColumns = () => Object.keys(photos).reduce((columns, col) => {
    const index = col.match(/Col_(.*)_.*$/)?.[1]
    columns[index] ??= []
    columns[index] = [...columns[index], photos[col]]
    return columns
}, {})

