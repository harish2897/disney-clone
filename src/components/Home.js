import React,{useEffect} from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommends from './Recommends'
import Trending from './Trending'
import Viewers from './Viewers'
import {useDispatch,useSelector} from 'react-redux'
import db from '../firebase'
import { setMovies } from "../features/movie/movieSlice";
import {selectUserName} from '../features/user/userSlice';
import { collection, getDocs } from "firebase/firestore";

function Home() {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    getDocs(collection(db, "movies")).then((snapshot)=>{
      snapshot._snapshot.docChanges.map((doc)=>{
        switch (doc.doc.data.value.mapValue.fields.type.stringValue) {
          case "recommend":
            recommends = [...recommends, { id: doc.doc.key.path.segments[6], ...doc.doc.data.value.mapValue.fields}];
            break;
            
            case "new":
            newDisneys = [...newDisneys, {id: doc.doc.key.path.segments[6], ...doc.doc.data.value.mapValue.fields}];
            break;
            
            case "original":
            originals = [...originals, { id: doc.doc.key.path.segments[6], ...doc.doc.data.value.mapValue.fields}];
            break;
            
            case "trending":
            trending = [...trending, {id: doc.doc.key.path.segments[6], ...doc.doc.data.value.mapValue.fields}];
            break;
        }
      })
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    })
  }, [userName]);

  return (
    <Container>
        <ImageSlider/>
        <Viewers/>
        <Recommends/>
        <NewDisney/>
        <Originals/>
        <Trending/>
    </Container>
  )
}

const Container = styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display:block;
top: 72px;
padding: 0 calc(3.5vw + 5px);

&:after{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content:"";
    position:absolute;
    inset: 0px;
    opacity:1;
    z-index:-1

}
`
// const Container = styled.main`
//   position: relative;
//   min-height: calc(100vh - 250px);
//   overflow-x: hidden;
//   display: block;
//   top: 72px;
//   padding: 0 calc(3.5vw + 5px);
//   &:after {
//     background: url("/images/home-background.png") center center / cover
//       no-repeat fixed;
//     content: "";
//     position: absolute;
//     inset: 0px;
//     opacity: 1;
//     z-index: -1;
//   }
// `;

export default Home