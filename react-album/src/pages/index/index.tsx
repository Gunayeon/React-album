import {useMemo, useState} from 'react'
import CommonHeader from '@components/common/header/CommonHeader'
import CommonSearchBar from '@components/common/searchBar/CommonSearchBar';
import CommonNav from '@components/common/navigation/CommonNav';
import CommonFooter from '@components/common/footer/CommonFooter';
import Card from './components/Card';
import DetailDialog from '@components/common/dialog/DetailDialog';

import styles from './styles/index.module.scss';
import Loading from './components/Loading';
import { CardDTO } from '../types/card';
import { useRecoilValueLoadable } from 'recoil';



import { imageData } from '../../recoil/selectors/imageSelectors';
function index() {
    // const imgSelector = useRecoilValue(imageData)
    const imgSelector = useRecoilValueLoadable(imageData)
    const [imgData, setImgData] = useState<CardDTO>()
    const [open, setOpen] = useState<boolean>(false) 


    const CARD_LIST = useMemo(() => {
        // console.log("이미지데이터" ,imgData);
        // console.log("이미지 셀렉터",imgSelector);
        if (imgSelector.state === 'hasValue') {
            const result = imgSelector.contents.results.map((card: CardDTO) => {
                return <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData} />;
            })
            return result;
        } else {
            return <Loading />
        }
       
    }, [imgSelector]); // 닫는 중괄호와 소괄호 추가
    
    return (
        <div className={styles.page}>
            {/* 공통 헤터 UI 부분 */}
            <CommonHeader />
            {/* 공통 네비게이션 UI 부분 */}
            <CommonNav />
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>nyeonn</span>
                        <span className={styles.wrapper__desc}>
                            <br />
                            나연 실습페이지입니다
                            

                        </span>
                        {/* 검색창 UI 부분 */}
                        <CommonSearchBar />
                    </div>
                </div>
                <div className={styles.page__contents__imageBox}>
                    {CARD_LIST}
                </div>
            </div>
            {/* 공통 푸터 UI 부분 */}
            <CommonFooter />
            {open && <DetailDialog data={imgData} handleDialog={setOpen}/>}
           
        </div>
    )
}

export default index;
