import React from 'react';
import graph1 from '../../../assets/graph1.svg'
import graph2 from '../../../assets/graph2.svg'

export const Graph =[

    {
        number:'92.6k',
        image:<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users "><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>        ,
        type:'Subscribers Gained',
        graph:graph1

    },
    {
        number:'97.5K',
        image:<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag "><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>,        type:'Subscribers Gained',
        graph:graph2

    }
]

export const Bars =[
    {
        contents:'Goal: $100000',
        progress:51,
        type:''
    },
    {
        contents:'Users: 100K',
        progress:61,
        type:'warning'
    },
    {
        contents:'Retention: 90%',
        progress:71,
        type:'danger'

    },
    {
        contents:'Duration: 1yr',
        progress:91,
        type:'success'

    }
]


