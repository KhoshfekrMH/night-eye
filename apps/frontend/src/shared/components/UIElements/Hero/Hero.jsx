function Hero(props) {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={props.image} className="max-w rounded-xl shadow-2xl" />
          <div className="p-2">
            <h1 className="text-5xl font-bold title-text">{props.title}</h1>
            <p className="py-6">{props.description}</p>
            <button className="btn btn-primary">
              <a href={props.buttonLink}>{props.buttonText}</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
