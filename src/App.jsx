function App() {
  return (
    <>
      <div className="h-screen">
        <div className="h-screen px-[140px] mx-auto">
          <div className="flex justify-between gap-[200px] items-center flex-wrap-reverse">
            {/* first img div */}
            <div>
              <img  src="/images/pattern-quotes.svg" alt="" />
            </div>

            {/* second img */}
            <div>
              <img
                src="/images/pattern-bg.svg"
                className="  lg:mt-10"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="absolute top-0 w-full flex justify-center items-center h-screen">
          <div className=" flex justify-between flex-wrap-reverse items-center  ">
            <div className="z_index -mr-14">
              <p className="lg:w-[46vw] text-center lg:text-left   lg:text-[32px]">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis iste hic obcaecati? Id, praesentium? Necessitatibus aut
                nesciunt itaque assumenda, saepe consequatur? Ut praesentium."
             
              </p>
              <h1 className="mt-9 text-center lg:text-left"><strong>John Tarpor</strong>  <span className="text-[#C3C1CB]">Junior Front-end Developer</span></h1>
            </div>

            <div className="flex justify-center mx-auto px-6">
              <img src="/images/image-john.jpg"   className=" lg:w-[500px] w-[400px] " alt=""   />
            </div>
          </div>
        </div>

        {/* another curver  */}
        <img src="/images/pattern-curve.svg" className="absolute bottom-0" alt="" />
      </div>
    </>
  );
}

export default App;
