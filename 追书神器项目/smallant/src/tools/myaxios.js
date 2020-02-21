import axios from 'axios'
import QS from 'qs';
import { Indicator } from 'mint-ui';

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

var ishow = false;
axios.interceptors.request.use(function(config) { // 拦截请求前的状态
	return config;  //添加这一行
})

axios.interceptors.response.use(function(response) { // 拦截请求后的状态
	return response;
})

export default function myaxios(method,url,params){
    if(method == "GET"){
        return axios.get(url,{params:params})
    }
    else if(method == "POST"){
        var params = QS.stringify(params);
        return axios.post(url,params)
    }
}

export const staticPath = 'http://statics.zhuishushenqi.com';
export const statistics ="/cats/lv2/statistics" //get
export const sortbooks = "/cats/lv2 "      //get
export const booksbrief = "/book/by-categories?"
export const bookDetailURL = '/book/'
export const bookDiscussURL = '/post/review/best-by-book?'
export const rankingGenderURL = "/ranking/gender"
export const rankingURL = "/ranking/"

export const booksChaptersIdURL = '/atoc/?view=summary&book='
export const booksChaptersURL = '/btoc/'
export const booksTextURL = '/chapter/'


//li
export const booksURL = "/book/by-categories?gender=male&type=hot&major=%E7%8E%84%E5%B9%BB&minor=&start=0&limit=20"
export const booksnewURL = "/book/by-categories?gender=male&type=new&major=武侠&minor=&start=0&limit=20"
export const bookgoodURL = "/book/by-categories?gender=female&type=new&major=青春校园&minor=&start=0&limit=20"
export const bookmonthURL = "/book/by-categories?gender=male&type=over&major=都市&minor=&start=0&limit=20"
export const bookmonthsURL = "/book/by-categories?gender=female&type=over&major=现代言情&minor=&start=0&limit=20"
export const bookancientURL = "/book/by-categories?gender=female&type=over&major=古代言情&minor=&start=0&limit=20" 
export const hotbookURL = "/book/by-categories?gender=male&type=over&major=科幻&minor=&start=0&limit=20"
export const hotsbookURL = "/book/by-categories?gender=female&type=over&major=青春校园&minor=&start=0&limit=20"
export const bookrankURL = "/book/by-categories?gender=male&type=over&major=军事&minor=&start=0&limit=20" 
export const bookranksURL = "/book/by-categories?gender=female&type=reputation&major=现代言情&minor=&start=0&limit=20"
export const booksearchURL = "/book/fuzzy-search?"



