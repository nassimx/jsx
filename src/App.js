import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import img2 from '../src/img2.jpg';

function App() {
  return (
    <div>
      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
        <h1 className="title">Nassim</h1>
        <br />
        <img src="/img1.jpg" alt="" />
        <br />
        <img src={img2} alt="" />
      </div>

      <iframe width={853} height={480} src="https://www.youtube.com/embed/HMZNWM-r4ic" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

    </div>
  );
}

export default App;
