import React, { useEffect, useState } from 'react'
import AppTable from './AppTable'
import './Table.css'

function VendorTable({ vendors, columnNames }) {
    const [Header, setHeader] = useState(columnNames)
    const [Vendors, setVendors] = useState(vendors.map(vendor => ({ ...vendor, isOpen: false, isEdit: false })))
    const [SortedBy, setSortedBy] = useState({ key: 'vendorName', order: true })

    const handleSelect = (id) => {
        setVendors(state => state.map(vendor => vendor.id === id ? { ...vendor, isOpen: !vendor.isOpen } : vendor))
    }

    const handleEdit = (e, id) => {
        e.stopPropagation()
        setVendors(state => state.map(vendor => vendor.id === id ? { ...vendor, isEdit: !vendor.isEdit } : vendor))
    }

    const handleChange = (e, id, key) => {
        setVendors(state => state.map(vendor => vendor.id === id ? { ...vendor, [key]: e.target.value } : vendor))
    }

    const handleSort = (key) => {
        setSortedBy(state => ({ key: key, order: state.key === key ? !state.order : true }))
    }

    useEffect(() => {
        const { key, order } = SortedBy

        setVendors(state => [...state].sort((a, b) =>
            order ? (a[key] > b[key] ? 1 : -1) :
                (a[key] < b[key] ? 1 : -1)))

        return () => { }

    }, [SortedBy])

    return (
        <table>
            <thead>
                <tr>
                    {Header.vendor.map((header, key) => <th key={key} onClick={() => handleSort(header.object)}>{header.title + ' '}{SortedBy.key === header.object ? SortedBy.order ? <span>&#8595;</span> : <span>&#8593;</span> : ''}</th>)}
                    <th>{''}</th>
                </tr>
            </thead>
            <tbody>
                {Vendors.map((vendor, key) => [
                    <tr key={key} onClick={() => handleSelect(vendor.id)}>

                        {Header.vendor.map((header, key1) => <td key={key1} className={!(key & 1) ? '' : 'lightBlue'}>{vendor.isEdit ?
                            (header.object !== 'Apps' ?
                                <input
                                    type="text"
                                    name="name"
                                    value={vendor[header.object]}
                                    onChange={(e) => handleChange(e, vendor.id, header.object)}
                                    onClick={(e) => e.stopPropagation()}
                                />
                                : `${vendor[header.object].length} Apps`)
                            : (header.object !== 'Apps' ? vendor[header.object] : `${vendor[header.object].length} Apps`)}</td>)
                        }

                        <td className={!(key & 1) ? '' : 'lightBlue'} style={{ color: '#0083ff', cursor: 'pointer' }} onClick={(e) => handleEdit(e, vendor.id)}>{vendor.isEdit ? 'Done' : 'Edit'}</td>
                    </tr>
                    ,
                    vendor.isOpen ? <tr key={`sub${key}`}>
                        <td colSpan={Header.vendor.length + 1} style={{ paddingLeft: 0 }}>
                            <AppTable Header={Header.app} pApps={vendor.Apps} />
                        </td>
                    </tr>
                        : undefined])}
            </tbody>
        </table>
    )
}

export default VendorTable
