interface ProjectTypes  {
    id:number,
    tech:string,
    title:string,
    image:string,
    href:string
}

export const ProjectWeb : ProjectTypes[] = [
    {
        'id':1,
        'tech' : 'Next Js , Design',
        'title' :'متجر كوداتا',
        'image' : '/chat.png',
        'href' : 'https://shop.codata-agency.com',
    },
    {
        'id':2,
        'tech' : 'Next Js , Design',
        'title' :'عقارات كوداتا',
        'image' : '/chat.png',
        'href' : 'https://realestate.codata-agency.com',
    },
    {
        'id':3,
        'tech' : 'PHP , Design',
        'title' :'IPTV Service',
        'image' : '/chat.png',
        'href' : 'https://codata-admin.com',
    },
]