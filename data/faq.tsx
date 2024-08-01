import * as React from 'react'

const faq = {
  title: 'Frequently Asked Questions',
  items: [
    {
      q: 'How many cars can I manage with ASM AutoStockMaster?',
      a: (
        <>
          The standard package allows you to manage up to 50 cars. The advanced
          package increases this limit to 200 cars, and the premium package lets
          you manage an unlimited number of cars.
        </>
      ),
    },
    {
      q: 'Can I use ASM AutoStockMaster for multiple user accounts?',
      a: 'Yes, ASM AutoStockMaster supports multiple user accounts. The standard package includes 5 user accounts, the advanced package includes 20 user accounts, and the premium package offers unlimited user accounts.',
    },
    {
      q: 'What kind of support is available with ASM AutoStockMaster?',
      a: 'The standard package includes technical support via email. The advanced package offers 24/7 technical support, and the premium package provides personal technical support.',
    },
    {
      q: 'What storage options are available with ASM AutoStockMaster?',
      a: 'The standard package includes 10 GB of storage space, the advanced package includes 50 GB of storage space, and the premium package offers unlimited storage space.',
    },
    {
      q: 'What types of reports and analytics does ASM AutoStockMaster provide?',
      a: 'The standard package includes basic reports. The advanced package offers advanced reports and data analysis, while the premium package provides special reports and data analysis.',
    },
  ],
}

export default faq
