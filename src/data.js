export const columsNames = {
    vendor: [
        { title: 'Vendor Name', object: 'vendorName' },
        { title: '# of Apps', object: 'Apps' },
        { title: 'Total Spend', object: 'totalSpend' },
        { title: 'Active Contract', object: 'activeContract' },
        { title: 'Source', object: 'source' },
    ],
    app: [
        { title: 'App Name', object: 'appName' },
        { title: 'Category', object: 'category' },
        { title: 'Covered In Contractor', object: 'coveredInContractor' },
        { title: 'Payment Term', object: 'paymentTerm' },
    ]
}

export const data = {
    name: 'Sourabh Soni',
    cId: 1000169,
    vendors: [
        {
            vendorName: 'aBox',
            id: 1,
            Apps: [
                {
                    id: 1,
                    appName: 'aQuickBooks',
                    category: '2Email',
                    coveredInContractor: 'Active',
                    paymentTerm: undefined

                },
                {
                    id: 2,
                    appName: 'bQuickBooks',
                    category: '1Email',
                    coveredInContractor: 'Inactive',
                    paymentTerm: undefined

                },
                {
                    id: 3,
                    appName: 'QuickBooks',
                    category: 'Email',
                    coveredInContractor: 'Active',
                    paymentTerm: undefined

                },
            ],
            totalSpend: 20020,
            activeContract: true,
            source: 'Quick_Books',

        },
        {
            vendorName: 'bBox',
            id: 2,
            Apps: [
                {
                    id: 1,
                    appName: 'aQuickBooks',
                    category: '2Email',
                    coveredInContractor: 'Active',
                    paymentTerm: undefined

                },
                {
                    id: 2,
                    appName: 'bQuickBooks',
                    category: '1Email',
                    coveredInContractor: 'Inactive',
                    paymentTerm: undefined

                },
                {
                    id: 3,
                    appName: 'QuickBooks',
                    category: 'Email',
                    coveredInContractor: 'Active',
                    paymentTerm: undefined

                },
            ],
            totalSpend: 200110,
            activeContract: true,
            source: 'Quick_Books',

        },
        {
            vendorName: 'cBox',
            id: 3,
            Apps: [
                {
                    id: 1,
                    appName: 'aQuickBooks',
                    category: '2Email',
                    coveredInContractor: 'Active',
                    paymentTerm: undefined

                },
                {
                    id: 2,
                    appName: 'bQuickBooks',
                    category: '1Email',
                    coveredInContractor: 'Inactive',
                    paymentTerm: undefined

                },
                {
                    id: 3,
                    appName: 'QuickBooks',
                    category: 'Email',
                    coveredInContractor: 'Active',
                    paymentTerm: undefined

                },
            ],
            totalSpend: 20010,
            activeContract: true,
            source: 'Quick_Books',

        },
    ]
}

