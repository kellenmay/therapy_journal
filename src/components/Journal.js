import { useState } from 'react'


const Journal = () => {

    const [journals] = useState( [{
        id: 1,
        title: 'Entry 1',
        body: 'Dear Diary',
        emotion: 7,
    },
    {
        id: 2,
        title: 'Entry 2',
        body: 'Dear Diary',
        emotion: 7,
    },
    {
        id: 3,
        title: 'Entry 3',
        body: 'Dear Diary',
        emotion: 7,
    },
    
    ])

    return (
        'Hello World'
    )
}

export default Journal
