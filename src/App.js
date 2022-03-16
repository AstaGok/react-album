import Header from "./components/Header";
import PostContent from "./components/PostContent";
import Box from "./components/Box";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header />
    <PostContent />
      <div className="container">
       <div className="row">
      <div className="col-md-4">
      <Box />
        </div>
        <div className="col-md-4">
      <Box />
        </div>
        <div className="col-md-4">
      <Box />
        </div>
        </div>
        <div className="row">
      <div className="col-md-4">
      <Box />
        </div>
        <div className="col-md-4">
      <Box />
        </div>
        <div className="col-md-4">
      <Box />
        </div>
        </div>
        <div className="row">
      <div className="col-md-4">
      <Box />
        </div>
        <div className="col-md-4">
      <Box />
        </div>
        <div className="col-md-4">
      <Box />
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
