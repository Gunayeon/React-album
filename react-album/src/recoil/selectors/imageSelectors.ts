import {selector} from 'recoil'
import { pageState } from '../atoms/pageStates'
import axios from 'axios'
import { searchState } from '../atoms/searchState'
const API_URL ='http://api.unsplash.com/search/photos'
const API_KEY = 'T8AFctWDFPQLWbDin7cLRqCj69RH1q1EYREg85oT_zU'
const PER_PAGE = 30


export const imageData=selector({
    key:"imageData",
    get: async ({get}) => {
        const searchValue = get(searchState)
        const pageValue=get(pageState)

        // API 호출
        try{
            const res =await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
            console.log(res.data)
            return res.data
        } catch(error) {
            console.log("에러",error)
        }

    },
})