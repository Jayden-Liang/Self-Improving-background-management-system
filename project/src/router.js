import Reading from './Components/Reading/Reading.vue'
import Note from './Components/Note/Note.vue'
import MemoryCard from './Components/MemoryCard/MemoryCard.vue'

export const routes=[
    {path: '', component: Reading},
    {path:'/note',component: Note},
    {path:'/card', component: MemoryCard}
]