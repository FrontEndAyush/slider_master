function App() {
  return (
    <>
      <div className="h-screen">
        <div className="h-screen w-[75vw] mx-auto">
          <div className="flex justify-between items-center">
            {/* first img div */}
            <div>
              <img src="/images/pattern-quotes.svg" alt="" />
            </div>

            {/* second img */}
            <div>
              <img
                src="/images/pattern-bg.svg"
                className="h-[80vh] mt-10"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="w-[80vw] mx-auto">
          <div className="absolute top-0 flex justify-between items-center ">
            <div>
              <p className="w-[30vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis iste hic obcaecati? Id, praesentium? Necessitatibus aut
                nesciunt itaque assumenda, saepe consequatur? Ut praesentium
                harum quibusdam veniam reprehenderit, sed veritatis consectetur
                explicabo corporis eum et, fugiat excepturi cum repellat ullam
                aliquid modi doloremque. Ducimus, assumenda?
              </p>
            </div>

            <div>
              <img src="/images/image-john.jpg" alt=""   />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
