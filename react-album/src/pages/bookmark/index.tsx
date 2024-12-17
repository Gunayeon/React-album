
import CommonHeader from '../../assets/components/common/header/CommonHeader'
import Card from './components/Card'
import styles from './styles/index.module.scss'
import { useEffect, useState } from 'react'
import { CardDTO } from '../types/card'

function Index() {
  const [data, setData] = useState<CardDTO[]>([])

  const getData = async () => {

    const getLocalStorage=JSON.parse(localStorage.getItem('bookmark'))
    
    if(getLocalStorage || getLocalStorage !== null) setData(getLocalStorage)
    else setData([])



    console.log(getData);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI부분 */}
      <CommonHeader />
      <main className={styles.page__contents}>
        {data.length === 0 ? 
            <div className={styles.page__contents__noData}>조회 가능한 데이터가 없습니다.</div> : (
                data.map((item: CardDTO) => {
                    return <Card prop={item} key={item.id} />
                  })
            )
        }
        
      </main>
    </div>
  )
}

export default Index
