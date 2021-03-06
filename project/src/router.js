import Reading from './Components/Reading/Reading.vue'
import Note from './Components/Note/Note.vue'
import MemoryCard from './Components/MemoryCard/MemoryCard.vue'
import Movie from './Components/Movie/Movie.vue'
import MoviePost from './Components/Movie/MoviePost/MoviePost.vue'
import MovieBg from './Components/Movie/MovieBg.vue'
import ReadingBg from './Components/Reading/ReadingBg.vue'
import ReadingBgMg from './Components/Reading/Cmp/ReadingBgMg.vue'
import Mgbookdetail from  './Components/Reading/Cmp/Mgbookdetail.vue'
import CardBg from  './Components/MemoryCard/childcmp/CardBg.vue'

export const routes=[
    {path: '', component: Movie},
    {path:'/reading', component: Reading},
    {path:'/note',component: Note},
    {path:'/card', component: MemoryCard},
    {path:'/movie', component: Movie},
    {path:'/movies/:title',component: MoviePost},
    {path: '/movie-bg',component: MovieBg},
    {path: '/reading-bg',component: ReadingBg, children:[
        { path: '',component: Mgbookdetail},
        {path: 'management', component:  ReadingBgMg, name: 'userEdit'}
        
    ]},
    {path: '/card-bg',component: CardBg},

]