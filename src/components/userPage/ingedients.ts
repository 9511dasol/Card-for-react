export interface Card_Info {
    img?: string;
    timg?: boolean;
    rotate?: boolean;
    recommend?: boolean;
    cardname?: string;
    mfee?: number;
    Kmfee?: number;
    benefits?: string;
    more?: string;
    notice1?: string;
    notice2?: string;
    innate__num?: string;
}

export interface Selector {
    label: string;
    value: string;
}

export interface category {
    name: string;
    value: string;
}

export interface qnaList {
    show: boolean;
    category: string;
    question: string;
    answer: string;
}

export const cardinfo: Card_Info[] = [
    // useEffect 데이터 베이스에서 불러올 때 대비
    {
        img: "https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditAXFBZE.png",
        recommend: true,
        cardname: "카카오뱅크 신한카드",
        mfee: 17000,
        Kmfee: 15000,
        benefits: "10번 결제당 캐시백, 배달, 택시",
        more: "https://www.shinhancard.com/pconts/html/card/apply/credit/1196302_2207.html",
        notice1: "세금 공과금 등",
        notice2: "상품권",
        innate__num: "1",

    },
    {
        img: "https://static11.samsungcard.com/wcms/home/scard/image/personal/IDON_AAP1731.gif",
        timg: true,
        recommend: false,
        cardname: "삼성 ID ON 카드",
        mfee: 18000,
        Kmfee: 15000,
        benefits: "많이 쓰는 영역, 교통 통신 스트리밍, 간편결제",
        more: "https://www.samsungcard.com/home/card/cardinfo/PGHPPCCCardCardinfoDetails001?code=AAP1731",
        notice1: "",
        notice2: "세금 공과금 할인이 적용된 이용금액, 상품권 등",
        innate__num: "2",
    },
    {
        img: "https://img1.kbcard.com/ST/img/cxc/kbcard/upload/img/product/09206_img.png",
        timg: false,
        recommend: true,
        rotate: true,
        cardname: "톡톡 my point 카드",
        mfee: 12000,
        Kmfee: 12000,
        benefits: "국내외 모든 가맹점, KB PAY 5% 적립, 연간리워드 적립",
        more: "https://card.kbcard.com/CRD/DVIEW/HCAMCXPRICAC0076?mainCC=a&cooperationcode=09206&solicitorcode=7000000001",
        notice1: "",
        notice2: "세금 공과금 할인이 적용된 이용금액, 상품권 등",
        innate__num: "3",
    },
    {
        img: "https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditAOBCB6.png",
        timg: false,
        recommend: true,
        rotate: true,
        cardname: "신한카드 The More(더모아)",
        mfee: 18000,
        Kmfee: 15000,
        benefits: "기본 적립, 특별 적립, 추가 적립, 포인트 재투자",
        more: "https://www.shinhancard.com/pconts/html/card/apply/credit/1198942_2207.html",
        notice1: "",
        notice2: "세금 공과금 할인이 적용된 이용금액, 상품권 등",
        innate__num: "4",
    },
]

export const categories: category[] = [
    {
        name: "자주 묻는 질문",
        value: "all",
    },
    {
        name: "카드 추천 기준",
        value: "Recommend",
    },
    {
        name: "카테고리 2",
        value: "category2",
    },
    {
        name: "카테고리 3",
        value: "category3",
    },
];

export const qnaLists: qnaList[] = [
    {
        show: false,
        category: "Recommend",
        question: "카드 추천에 대한 출처가 어디인가요 ?",
        answer: "특정 커뮤니티입니다.",
    },
    {
        show: false,
        category: "category2",
        question: "what is that ? 2!",
        answer: "this is react. 2!",
    },
    {
        show: false,
        category: "category3",
        question: "what is that ? 3!",
        answer: "this is react. 3!",
    },
    {
        show: false,
        category: "Recommend",
        question: "카드를 추천하는 이유는 뭔가요?",
        answer: "당신의 삶, 물질적인 요소를 조금 더 풍부하게 만들어주기 때문입니다.",
    },
    {
        show: false,
        category: "category2",
        question: "what is that ? 5!",
        answer: "this is react. 5!",
    },
    {
        show: false,
        category: "category3",
        question: "what is that ? 6",
        answer: "this is react. 6",
    },
];