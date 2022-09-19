import React from 'react'
import { columsNames as columnNames } from '../../data'
import './Table.css'
import VendorTable from './VenodorTable'

function Table({ vendors }) {

    return (
        <div className={'tableSection'}>
            <div className={'status'}>
                <p>Status</p>
            </div>
            <div className={'vendorTable'}>
                <VendorTable vendors={vendors} columnNames={columnNames} />
            </div>
        </div>
    )
}

export default Table

