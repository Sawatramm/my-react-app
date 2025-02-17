import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
function App() {

  return( //จะสามารถ return ได้แค่ค่าเดียว เลยจะแก้ไขด้วย <></>
    
    <>
        <Header/> {/*เป็น sortcut*/}
        <Card/>
        <Food/>
        <Footer/>
    </>
  );

}

export default App
