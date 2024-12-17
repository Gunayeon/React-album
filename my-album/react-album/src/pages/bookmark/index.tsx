import CommonHeader from '../../assets/components/common/header/CommonHeader'
import Card from './components/Card'
import styles from './styles/index.module.scss'
import { useEffect, useState } from 'react'
function  index() {
    const [data, setData]=useState([])
    const getData = () => {
        
    }

    useEffect(()=> {
        getData()
    }, [])
    return (
        <div className={styles.page}>
            {/* 공통 헤더 UI부분 */}
            <CommonHeader />
            <main className={styles.page__contents}>
                <Card />
            </main>
        </div>
    )
    
}

export default index