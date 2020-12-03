import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <div>
      <h1 className="text-white p-5 text-xl">
        Hola aqui vamos a poner un link
      </h1>

      <a
        href="https://ubertrk.com/c/2506175/927882/5539"
        target="_top"
        id="927882"
      >
        <img
          src="//a.impactradius-go.com/display-ad/5539-927882"
          style={{ border: 0, width: 300, height: 250 }}
        />
      </a>
      <img
        height="0"
        width="0"
        src="https://ubertrk.com/i/2506175/927882/5539"
        style={{ position: "absolute", visibility: "hidden" }}
        border="0"
      />
    </div>
  );
}
