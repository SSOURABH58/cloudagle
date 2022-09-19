import React, { useEffect, useState } from 'react'
import './Table.css'

function AppTable({ Header, pApps }) {

    // const [Apps, setApps] = useState(pApps)
    const [SortedBy, setSortedBy] = useState({ key: 'appName', order: true })
    const [Apps, setApps] = useState(pApps.map(app => ({ ...app, isEdit: false })))


    const handleChange = (e, id, key) => {
        setApps(state => state.map(app => app.id === id ? { ...app, [key]: e.target.value } : app))
    }

    const handleEdit = (e, id) => {
        e.stopPropagation()
        setApps(state => state.map(vendor => vendor.id === id ? { ...vendor, isEdit: !vendor.isEdit } : vendor))
    }

    const handleSort = (key) => {
        setSortedBy(state => ({ key: key, order: state.key === key ? !state.order : true }))
    }

    useEffect(() => {
        const { key, order } = SortedBy

        setApps(state => [...state].sort((a, b) =>
            order ? (a[key] > b[key] ? 1 : -1) :
                (a[key] < b[key] ? 1 : -1)))

        return () => { }

    }, [SortedBy])

    return (
        <table style={{ borderRadius: 0 }}>
            <thead>
                <tr>
                    {Header.map((header, key) => <th key={key} className={'appHeader'} onClick={() => handleSort(header.object)}>{header.title + ' '}{SortedBy.key === header.object ? SortedBy.order ? <span>&#8595;</span> : <span>&#8593;</span> : <span>{'  '}</span>}</th>)}
                    <th className={'appHeader'} >{''}</th>
                </tr>
            </thead>
            <tbody>
                {Apps.map((app, key) => <tr key={key}>
                    {
                        Header.map((header, key1) => <td key={key1} className={!(key & 1) ? '' : 'lightApp'}>
                            {app.isEdit ?
                                (header.object !== 'Apps' ?
                                    <input
                                        type="text"
                                        name="name"
                                        value={app[header.object]}
                                        onChange={(e) => handleChange(e, app.id, header.object)}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    : `${app[header.object].length} Apps`)
                                : (header.object !== 'Apps' ? app[header.object] : `${app[header.object].length} Apps`)}
                        </td>)
                    }
                    <td className={!(key & 1) ? '' : 'lightApp'} style={{ color: '#0083ff', cursor: 'pointer' }} onClick={(e) => handleEdit(e, app.id)}>{app.isEdit ? 'Done' : 'Edit'}</td>

                </tr>)}
            </tbody>
        </table>
    )
}

export default AppTable