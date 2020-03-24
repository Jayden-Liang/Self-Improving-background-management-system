import url_1 from '../movie/movie-1.png'
import url_2 from '../movie/ronglu.jpg'
import url_3 from '../movie/luomajiari.jpg'
import url_4 from '../movie/wushuang.jpg'
import url_5 from '../movie/godfather.jpg'
import url_6 from '../movie/fangniuban.jpg'
import url_7 from '../movie/budapeisi.jpg'
import url_8 from '../movie/haidi.jpg'

function allMovies(){
    let story= [
        {
            'title': '以牙还牙，双倍奉还《半泽直树》。终归也只是一部爽剧而已',
            'imgUrl': url_1,
            'tag': '剧情',
            'date': '2030-3-21'
        },
        {
            'title': '熔炉，我们无法改变世界，但我们可以选择不被世界改变...',
            'imgUrl':url_2,
            'tag': '剧情',
            'date': '2030-3-21'
        },
        {
            'title': '罗马假日，爱情片竟也看得这么有滋有味',
            'imgUrl':url_3,
            'tag': '剧情',
            'date': '2030-3-21'
        },
        {
            'title': '无双，看悬疑片就是，导演就不按照你想的演',
            'imgUrl':url_4,
            'tag': '剧情',
            'date': '2030-3-21'
        },
        {
            'title': "教父，I'll gonna make him an offer he can't refuse.",
            'imgUrl':url_5,
            'tag': '剧情',
            'date': '2030-3-21'
        },
        {
            'title': '放牛班的春天，没有老师告诉我们可以成为任何人，那就...',
            'imgUrl':url_6,
            'tag': '剧情',
            'date': '2030-3-21'
        }
        ,
        {
            'title': '布达佩斯大饭店，油画般的色彩，截图大赏',
            'imgUrl':url_7,
            'tag': '剧情',
            'date': '2030-3-21'
        },
        {
            'title': '海蒂和爷爷，阿尔卑斯山的美景也太漂亮了',
            'imgUrl':url_8,
            'tag': '剧情',
            'date': '2030-3-21'
        }

    ]
     return story
    
}

export {
    allMovies
}