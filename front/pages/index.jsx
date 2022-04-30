import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import axios from "axios";

const Wrapper = styled.div`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid #000;
`;

const WrapperTitle = styled.h3`
    color: #999;
    font-size: 17px;
`;

const ImageBox = styled.div`
    width: 860px;
    height: 600px;

    position: relative;
`;

const ImageBox2 = styled.div`
    width: 100%;
    height: 300px;

    position: relative;
`;


const Image1 = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    position: absolute;
    top: 0px;
    left: 0px;
`;

const ImageTitle = styled.article`
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    text-shadow: 6px 6px 4px #999;

    position: absolute;
    top: 10%;
    left: 5%;
`;


const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Image2 = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;

const Image3 = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;

    position: absolute;
    top: 0px;
    left: 0px;
`;


const MyWeb = () => {

    // 관리자 모드버튼
    const [devMode, setDevMode] = useState(false);

    // 이미지 제목을 바꿔주는 스테이트
    const [imageTitle1, setimageTitle1] = useState(null);
    const [imageURL1, setimageURL1] = useState(null);

    const [imageTitle2, setimageTitle2] = useState(null);
    const [imageURL2, setimageURL2] = useState(null);

    const [imageTitle3, setimageTitle3] = useState(null);
    const [imageURL3, setimageURL3] = useState(null);

    const [imageTitle4, setimageTitle4] = useState(null);
    const [imageURL4, setimageURL4] = useState(null);

    const [imageTitle5, setimageTitle5] = useState(null);
    const [imageURL5, setimageURL5] = useState(null);


    // 윗 devmode 스테이트를 리랜더링 하게 하는 핸들러
    const devModeToggleHandler = useCallback(() => {
        setDevMode((prev) => !prev);
    }, [devMode]);

    // 이미지 타이틀1을 바꿔주는 핸들러
    const imageTitle1ChangeHandler = useCallback((e) => {
        setimageTitle1(e.target.value);
    },
        [imageTitle1]
    )

    // 이미지 타이틀2을 바꿔주는 핸들러
    const imageTitle2ChangeHandler = useCallback((e) => {
        setimageTitle2(e.target.value);
    },
        [imageTitle2]
    );

    // 이미지 타이틀3을 바꿔주는 핸들러
    const imageTitle3ChangeHandler = useCallback((e) => {
        setimageTitle3(e.target.value);
    },
        [imageTitle3]
    );

    // 이미지 타이틀4을 바꿔주는 핸들러
    const imageTitle4ChangeHandler = useCallback((e) => {
        setimageTitle4(e.target.value);
    },
        [imageTitle4]
    );

    // 이미지 타이틀5을 바꿔주는 핸들러
    const imageTitle5ChangeHandler = useCallback((e) => {
        setimageTitle5(e.target.value);
    },
        [imageTitle5]
    );

    const getOne = async() => {
        const res = await axios.get("http://localhost:4000/one/get");
        
        setimageTitle1(res.data.txt);
        setimageURL1(res.data.imageURL);
    };

    const getTwo = async() => {
        const res = await axios.get("http://localhost:4000/three/get");
        
        setimageTitle2(res.data.txt);
        setimageURL2(res.data.imageURL);
    };


    const getThree = async() => {
        const res = await axios.get("http://localhost:4000/three/get1");

        setimageTitle3(res.data.txt);
        setimageURL3(res.data.imageURL);
    };

    const getFour = async() => {
        const res = await axios.get("http://localhost:4000/three/get2");

        setimageTitle4(res.data.txt);
        setimageURL4(res.data.imageURL);
    };

    const getFive = async() => {
        const res = await axios.get("http://localhost:4000/three/get3");

        setimageTitle5(res.data.txt);
        setimageURL5(res.data.imageURL);
    };

    useEffect(() => {
        getOne();
        getTwo();
        getThree();
        getFour();
        getFive(); 
    }, []);

    const updateTypeOne = useCallback(async() => {

        if(!imageTitle1.trim()) {
            return alert("문구를 입력해야 합니다.")
        }

        console.log(imageTitle1);

        const res = await axios.post("http://localhost:4000/one/update", {txt : imageTitle1});

        if (res.data.result) {
            alert("수정 성공");
        } else {
            alert("수정 실패");
        };
    }, [imageTitle1]); 

    const updateTypeTwo = useCallback(async() => {

        if(!imageTitle2.trim()) {
            return alert("문구를 입력해야 합니다.")
        }

        const res = await axios.post("http://localhost:4000/Three/update", {txt : imageTitle2});

        if (res.data.result) {
            alert("수정 성공");
        } else {
            alert("수정 실패");
        };

    }, [imageTitle2]);

    const updateTypeThree = useCallback(async() => {

        if(!imageTitle3.trim()) {
            return alert("문구를 입력해야 합니다.")
        }

        const res = await axios.post("http://localhost:4000/Three/update1", {txt : imageTitle3});

        if (res.data.result) {
            alert("수정 성공");
        } else {
            alert("수정 실패");
        };

    }, [imageTitle3]);

    const updateTypeFour = useCallback(async() => {

        if(!imageTitle4.trim()) {
            return alert("문구를 입력해야 합니다.")
        }

        const res = await axios.post("http://localhost:4000/Three/update2", {txt : imageTitle4});

        if (res.data.result) {
            alert("수정 성공");
        } else {
            alert("수정 실패");
        };

    }, [imageTitle4]);

    const updateTypeFive = useCallback(async() => {

        if(!imageTitle5.trim()) {
            return alert("문구를 입력해야 합니다.")
        }

        const res = await axios.post("http://localhost:4000/Three/update3", {txt : imageTitle5});

        if (res.data.result) {
            alert("수정 성공");
        } else {
            alert("수정 실패");
        };

    }, [imageTitle5]);

    return <section>

        <button onClick={devModeToggleHandler}>{devMode ? "관리자 끄기" : "관리자 켜기"}</button>

        {/* 이미지와 텍스트를 관리 할 수 있게 한다. */}
        <Wrapper>
            <WrapperTitle >이미지와 텍스트를 관리 할 수 있게 한다.</WrapperTitle >
            <ImageBox>

                {imageURL1 && (
                    <Image1 src={imageURL1} alt="mainPoster"/>
                )}

                {imageTitle1 && <ImageTitle>{imageTitle1}</ImageTitle>}
            </ImageBox>
            
            {/* 이미지 텍스트 제목을 바꿔주는 input */}
            {devMode && imageTitle1 !== null && <div>
                <input value={imageTitle1} onChange={imageTitle1ChangeHandler}/>
                <button onClick={updateTypeOne}>확인</button>
            </div>}
        </Wrapper>

        {/* 이미지 슬라이드의 이미지를 관리 할수있게 */}
        <Wrapper>
            <WrapperTitle >이미지 슬라이드의 이미지를 관리 할수있게 </WrapperTitle >

            <Carousel autoplay={true} speed={1000}>
                <div>
                    <Image2 src="https://i.pinimg.com/474x/20/d9/ce/20d9ce0b5369b1ec11e0fb4199177359.jpg" alt="1" />
                </div>
                <div>
                    <Image2 src="https://i.pinimg.com/474x/0a/4a/4c/0a4a4c1216ef3d818e5685f70e655b6f.jpg" alt="2" />
                </div>
                <div>
                    <Image2 src="https://i.pinimg.com/474x/4e/a1/41/4ea141a5da368f010516b071a9dcc2e2.jpg" alt="3" />
                </div>
                <div>
                    <Image2 src="https://i.pinimg.com/474x/9a/3c/63/9a3c63777e124fec064902e7e9cf8699.jpg" alt="4" />
                </div>
            </Carousel>
        </Wrapper>

        {/* 이미지 슬라이더에 이미지와 텍스트를 관리 할 수 있게 한다. */}
        <Wrapper>
            <WrapperTitle >이미지 슬라이더에 이미지와 텍스트를 관리 할 수 있게 한다.</WrapperTitle >
            <Carousel autoplay={true} speed={1000}>
                <ImageBox2>
                    {imageURL2 && (<Image3 src={imageURL2} alt="1" />)}
                    {imageTitle2 && (<ImageTitle>{imageTitle2}</ImageTitle>)}
                </ImageBox2>
                <ImageBox2>
                    {imageURL3 && (<Image3 src={imageURL3} alt="2" />)}
                    {imageTitle3 && (<ImageTitle>{imageTitle3}</ImageTitle>)}
                </ImageBox2>
                <ImageBox2>
                    {imageURL4 && (<Image3 src={imageURL4} alt="3" />)}
                    {imageURL4 && (<ImageTitle>{imageTitle4}</ImageTitle>)}
                </ImageBox2>
                <ImageBox2>
                    {imageURL5 && (<Image3 src={imageURL5} alt="4" />)}
                    {imageTitle5 && (<ImageTitle>{imageTitle5}</ImageTitle>)}
                </ImageBox2>
            </Carousel>

             {/* 이미지 텍스트 제목을 바꿔주는 input */}
            {devMode && imageTitle2 !== null && imageTitle3 != null && <div>
                <input value={imageTitle2} onChange={imageTitle2ChangeHandler}/>
                <button onClick={updateTypeTwo}>확인</button>

                <input value={imageTitle3} onChange={imageTitle3ChangeHandler}/>
                <button onClick={updateTypeThree}>확인</button>

                <input value={imageTitle4} onChange={imageTitle4ChangeHandler}/>
                <button onClick={updateTypeFour}>확인</button>

                <input value={imageTitle5} onChange={imageTitle5ChangeHandler}/>
                <button onClick={updateTypeFive}>확인</button>
            </div>}
        </Wrapper>
    </section>;
}

export default MyWeb;